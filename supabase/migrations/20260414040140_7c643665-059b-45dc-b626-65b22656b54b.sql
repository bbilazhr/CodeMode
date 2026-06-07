
-- Add resource columns to lessons
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS resource_url text;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS resource_type text DEFAULT 'video';

-- Add role and onboarding columns to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role text;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS onboarding_completed boolean DEFAULT false;

-- Allow all authenticated users to view user_analytics (for leaderboard)
DROP POLICY IF EXISTS "Users can view own analytics" ON public.user_analytics;
CREATE POLICY "Anyone authenticated can view analytics"
ON public.user_analytics
FOR SELECT
TO authenticated
USING (true);

-- Allow all authenticated users to view user_streaks (for leaderboard)
DROP POLICY IF EXISTS "Users can view own streaks" ON public.user_streaks;
CREATE POLICY "Anyone authenticated can view streaks"
ON public.user_streaks
FOR SELECT
TO authenticated
USING (true);
