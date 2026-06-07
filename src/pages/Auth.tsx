import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo_codemode.png";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [loginId, setLoginId] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  // Debounced username availability check
  useEffect(() => {
    if (isLogin) return;
    const u = username.trim();
    if (u.length === 0) { setUsernameError(null); return; }
    if (u.length < 3) { setUsernameError("Min. 3 karakter"); return; }
    if (!/^[a-z0-9_]+$/.test(u)) { setUsernameError("Hanya huruf kecil, angka, _"); return; }
    setUsernameError(null);
    setCheckingUsername(true);
    const t = setTimeout(async () => {
      const { data } = await supabase.from("profiles").select("user_id").eq("username", u).maybeSingle();
      if (data) setUsernameError("Username sudah dipakai");
      setCheckingUsername(false);
    }, 400);
    return () => { clearTimeout(t); setCheckingUsername(false); };
  }, [username, isLogin]);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Resolve login: allow either email or username
        let loginEmail = loginId.trim();
        if (!loginEmail.includes("@")) {
          const { data: resolved, error: rpcErr } = await supabase.rpc("get_email_by_username", { _username: loginEmail.toLowerCase() });
          if (rpcErr) throw rpcErr;
          if (!resolved) throw new Error("Username tidak ditemukan");
          loginEmail = resolved as string;
        }
        const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password });
        if (error) throw error;
        toast({ title: "Selamat datang kembali!" });
        navigate("/");
      } else {
        if (usernameError) throw new Error(usernameError);
        const u = username.trim().toLowerCase();
        if (u.length < 3) throw new Error("Username min. 3 karakter");
        // Final availability check
        const { data: taken } = await supabase.from("profiles").select("user_id").eq("username", u).maybeSingle();
        if (taken) throw new Error("Username sudah dipakai");

        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName, username: u },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        if (data.session) {
          toast({ title: "Akun berhasil dibuat!", description: "Selamat datang di CodeMode." });
          navigate("/");
        } else {
          const { error: signInErr } = await supabase.auth.signInWithPassword({ email, password });
          if (signInErr) throw signInErr;
          toast({ title: "Akun berhasil dibuat!" });
          navigate("/");
        }
      }
    } catch (error: any) {
      toast({ title: "Terjadi kesalahan", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Terjadi kesalahan",
        description: error.message || String(error),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <a href="/" className="inline-flex items-center gap-2 font-heading font-bold text-2xl text-foreground mb-2">
            <img src={logo} alt="CodeMode" className="h-9" />
          </a>
          <h1 className="text-2xl font-bold text-foreground mt-4">
            {isLogin ? "Selamat datang kembali" : "Buat akun Anda"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isLogin ? "Masuk untuk lanjut belajar" : "Mulai perjalanan coding Anda hari ini"}
          </p>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 shadow-sm space-y-6">
          <Button
            variant="outline"
            className="w-full h-11 gap-2"
            onClick={handleGoogleSignIn}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Lanjutkan dengan Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">atau</span>
            </div>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nama lengkap</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nama Anda"
                    required={!isLogin}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">@</span>
                    <Input
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                      placeholder="username_anda"
                      className="pl-7"
                      required={!isLogin}
                      maxLength={24}
                    />
                  </div>
                  {checkingUsername && <p className="text-[11px] text-muted-foreground">Memeriksa ketersediaan...</p>}
                  {!checkingUsername && usernameError && <p className="text-[11px] text-destructive">{usernameError}</p>}
                  {!checkingUsername && !usernameError && username.length >= 3 && (
                    <p className="text-[11px] text-emerald-600">Username tersedia ✓</p>
                  )}
                </div>
              </>
            )}

            {!isLogin ? (
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="loginId">Username atau email</Label>
                <Input
                  id="loginId"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="username_anda atau email"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Kata sandi</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            <Button type="submit" className="w-full h-11" disabled={loading}>
              {loading ? "Mohon tunggu..." : isLogin ? "Masuk" : "Buat akun"}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-medium hover:underline"
          >
            {isLogin ? "Daftar" : "Masuk"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
