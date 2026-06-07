
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index) VALUES
-- Interaction Design (was missing - use correct ID from UI/UX usability test)
-- Design Systems
('89ce6f9d-8adf-4e83-af4a-698b698e353f', 'mcq', 'What is a design system?', '["Collection of reusable components and guidelines","Single color palette","One font file","A JavaScript library"]', '"Collection of reusable components and guidelines"', 'Design systems ensure consistency across products.', 'visual', 0),
('89ce6f9d-8adf-4e83-af4a-698b698e353f', 'mcq', 'What is a design token?', '["Named design decision (color, spacing)","API key","Database field","HTML tag"]', '"Named design decision (color, spacing)"', 'Design tokens store visual design values.', 'visual', 1),
('89ce6f9d-8adf-4e83-af4a-698b698e353f', 'mcq', 'Which is an example of a design system?', '["Material Design","React","Node.js","PostgreSQL"]', '"Material Design"', 'Material Design is Google''s design system.', 'visual', 2),
-- Prototyping
('037bec63-36fa-4378-bca3-da4d2730be4d', 'mcq', 'What is a prototype?', '["Interactive simulation of the final product","Final code","Database schema","Server config"]', '"Interactive simulation of the final product"', 'Prototypes let you test interactions before coding.', 'visual', 0),
('037bec63-36fa-4378-bca3-da4d2730be4d', 'mcq', 'High-fidelity prototype is?', '["Close to final design with real content","Paper sketch","Wireframe","Sitemap"]', '"Close to final design with real content"', 'Hi-fi prototypes look like the real product.', 'visual', 1),
('037bec63-36fa-4378-bca3-da4d2730be4d', 'mcq', 'Which tool creates interactive prototypes?', '["Figma","MySQL","VS Code","Git"]', '"Figma"', 'Figma supports interactive prototyping.', 'visual', 2),
-- Usability Test Quiz
('93ce0830-d12e-4799-a1e3-263ecfcb4c9d', 'mcq', 'What is a think-aloud protocol?', '["User verbalizes thoughts while testing","Code review method","Database technique","API testing"]', '"User verbalizes thoughts while testing"', 'Think-aloud helps understand user reasoning.', 'visual', 0),
('93ce0830-d12e-4799-a1e3-263ecfcb4c9d', 'mcq', 'SUS stands for?', '["System Usability Scale","Software Update System","Simple User Survey","Standard UI Score"]', '"System Usability Scale"', 'SUS is a standard usability questionnaire.', 'visual', 1),
('93ce0830-d12e-4799-a1e3-263ecfcb4c9d', 'mcq', 'What is a heuristic evaluation?', '["Expert review based on usability principles","User testing","A/B testing","Code review"]', '"Expert review based on usability principles"', 'Experts evaluate against usability heuristics.', 'visual', 2),
-- Portfolio
('b85dc695-acc7-443b-80d7-ba0efca15dac', 'mcq', 'What should a UX portfolio include?', '["Case studies with process and results","Only screenshots","Just a resume","Code samples"]', '"Case studies with process and results"', 'Show your design process and outcomes.', 'visual', 0),
('b85dc695-acc7-443b-80d7-ba0efca15dac', 'mcq', 'Best format for a design portfolio?', '["Website/Online portfolio","Printed book only","Email attachment","Social media post"]', '"Website/Online portfolio"', 'Online portfolios are accessible and interactive.', 'visual', 1),
('b85dc695-acc7-443b-80d7-ba0efca15dac', 'mcq', 'What makes a strong case study?', '["Problem, process, solution, and results","Just the final mockup","Only wireframes","Code snippets"]', '"Problem, process, solution, and results"', 'Strong case studies tell the full design story.', 'visual', 2),

-- Cyber Security questions
-- Basics
('cc9dc15d-2e30-4fd3-9a8c-28454876adf7', 'mcq', 'CIA in cybersecurity stands for?', '["Confidentiality, Integrity, Availability","Central Intelligence Agency","Code Integration Analysis","Cyber Information Access"]', '"Confidentiality, Integrity, Availability"', 'The CIA triad is the foundation of information security.', 'security', 0),
('cc9dc15d-2e30-4fd3-9a8c-28454876adf7', 'mcq', 'What is malware?', '["Malicious software","Email client","Firewall","Antivirus"]', '"Malicious software"', 'Malware is software designed to cause harm.', 'security', 1),
('cc9dc15d-2e30-4fd3-9a8c-28454876adf7', 'mcq', 'What is phishing?', '["Fraudulent attempt to obtain sensitive data","Network scanning","Code review","Database backup"]', '"Fraudulent attempt to obtain sensitive data"', 'Phishing tricks users into revealing information.', 'security', 2),
-- Network Security
('5ecc9929-4b39-412e-ae7a-8e3d03f204cc', 'mcq', 'What is a firewall?', '["Network security system that filters traffic","Antivirus software","Password manager","VPN"]', '"Network security system that filters traffic"', 'Firewalls monitor and control network traffic.', 'security', 0),
('5ecc9929-4b39-412e-ae7a-8e3d03f204cc', 'mcq', 'What does VPN stand for?', '["Virtual Private Network","Very Private Network","Visual Protocol Network","Verified Public Network"]', '"Virtual Private Network"', 'VPNs create encrypted connections over the internet.', 'security', 1),
('5ecc9929-4b39-412e-ae7a-8e3d03f204cc', 'mcq', 'What is a DDoS attack?', '["Overwhelming a server with traffic","Stealing passwords","Code injection","File encryption"]', '"Overwhelming a server with traffic"', 'DDoS floods servers to make them unavailable.', 'security', 2),
-- Protocol
('16a61196-c5da-4016-a7f5-47da51d1ec09', 'mcq', 'HTTPS uses which protocol for encryption?', '["TLS/SSL","FTP","SMTP","SSH"]', '"TLS/SSL"', 'HTTPS uses TLS/SSL to encrypt web traffic.', 'security', 0),
('16a61196-c5da-4016-a7f5-47da51d1ec09', 'mcq', 'Which port does HTTPS use by default?', '["443","80","22","3306"]', '"443"', 'Port 443 is the standard HTTPS port.', 'security', 1),
('16a61196-c5da-4016-a7f5-47da51d1ec09', 'mcq', 'What is SSH used for?', '["Secure remote server access","Sending emails","Web browsing","File sharing"]', '"Secure remote server access"', 'SSH provides encrypted remote shell access.', 'security', 2),
-- Cryptography
('baa8d749-e156-4bf1-9348-6fc8ee66749a', 'mcq', 'What is symmetric encryption?', '["Same key for encrypt and decrypt","Different keys","No key needed","Hash function"]', '"Same key for encrypt and decrypt"', 'Symmetric encryption uses one shared key.', 'security', 0),
('baa8d749-e156-4bf1-9348-6fc8ee66749a', 'mcq', 'AES stands for?', '["Advanced Encryption Standard","Automated Encoding System","Applied Encryption Software","Advanced Email Security"]', '"Advanced Encryption Standard"', 'AES is a widely used encryption algorithm.', 'security', 1),
('baa8d749-e156-4bf1-9348-6fc8ee66749a', 'mcq', 'What is hashing?', '["One-way function producing fixed-length output","Two-way encryption","Compression","Encoding"]', '"One-way function producing fixed-length output"', 'Hashes cannot be reversed to get the original data.', 'security', 2),
-- OWASP Part 1
('be789b17-96d0-401d-9f81-f5a9abe366cc', 'mcq', 'What is SQL injection?', '["Inserting malicious SQL through user input","Normal database query","API call","File upload"]', '"Inserting malicious SQL through user input"', 'SQL injection exploits unsanitized user input.', 'security', 0),
('be789b17-96d0-401d-9f81-f5a9abe366cc', 'mcq', 'What is XSS?', '["Cross-Site Scripting","Cross-Server Security","Client-Side Storage","Cascading Style Sheets"]', '"Cross-Site Scripting"', 'XSS injects malicious scripts into web pages.', 'security', 1),
('be789b17-96d0-401d-9f81-f5a9abe366cc', 'mcq', 'How to prevent SQL injection?', '["Parameterized queries","String concatenation","Disabling database","Using plain text"]', '"Parameterized queries"', 'Parameterized queries separate code from data.', 'security', 2),
-- OWASP Part 2
('94b89ca7-3858-4ba0-b78a-1a166f2f94fa', 'mcq', 'What is CSRF?', '["Cross-Site Request Forgery","Client Server Request Form","Cross-System Resource Finder","Central Security Request Filter"]', '"Cross-Site Request Forgery"', 'CSRF tricks users into performing unwanted actions.', 'security', 0),
('94b89ca7-3858-4ba0-b78a-1a166f2f94fa', 'mcq', 'What is broken authentication?', '["Weak login/session management","Strong passwords","Two-factor auth","Encryption"]', '"Weak login/session management"', 'Broken auth allows attackers to access accounts.', 'security', 1),
('94b89ca7-3858-4ba0-b78a-1a166f2f94fa', 'mcq', 'OWASP stands for?', '["Open Web Application Security Project","Online Web App Security Protocol","Open Wireless Application System","Organized Web Access Security Plan"]', '"Open Web Application Security Project"', 'OWASP provides web security resources.', 'security', 2),
-- Web App Security
('625bfd58-6bbb-469a-a43b-17cd78030084', 'mcq', 'What is input validation?', '["Checking user input for safety","Styling forms","Database backup","Server monitoring"]', '"Checking user input for safety"', 'Input validation prevents malicious data entry.', 'security', 0),
('625bfd58-6bbb-469a-a43b-17cd78030084', 'mcq', 'What is Content Security Policy?', '["HTTP header to prevent XSS","CSS framework","JavaScript library","Database tool"]', '"HTTP header to prevent XSS"', 'CSP restricts which resources can be loaded.', 'security', 1),
('625bfd58-6bbb-469a-a43b-17cd78030084', 'mcq', 'What is rate limiting?', '["Restricting number of requests per time","Limiting database size","Reducing page speed","Blocking all traffic"]', '"Restricting number of requests per time"', 'Rate limiting prevents abuse and DDoS attacks.', 'security', 2),
-- Recon
('c5cdfd15-d3f9-41c6-83b8-5ac5720df547', 'mcq', 'What is reconnaissance in cybersecurity?', '["Gathering information about a target","Building software","Designing UI","Managing databases"]', '"Gathering information about a target"', 'Recon is the first phase of ethical hacking.', 'security', 0),
('c5cdfd15-d3f9-41c6-83b8-5ac5720df547', 'mcq', 'What tool is used for network scanning?', '["Nmap","Figma","VS Code","Excel"]', '"Nmap"', 'Nmap discovers hosts and services on networks.', 'security', 1),
('c5cdfd15-d3f9-41c6-83b8-5ac5720df547', 'mcq', 'What is footprinting?', '["Collecting target system information","Creating wireframes","Writing tests","Deploying apps"]', '"Collecting target system information"', 'Footprinting maps out target infrastructure.', 'security', 2),
-- Pen Testing
('7a258951-95d6-40c8-8ea5-0f04953b8821', 'mcq', 'What is penetration testing?', '["Authorized simulated attack to find vulnerabilities","Unauthorized hacking","Code review","UI testing"]', '"Authorized simulated attack to find vulnerabilities"', 'Pen testing identifies security weaknesses.', 'security', 0),
('7a258951-95d6-40c8-8ea5-0f04953b8821', 'mcq', 'Which is a pen testing framework?', '["Metasploit","React","Django","Flutter"]', '"Metasploit"', 'Metasploit is a popular penetration testing tool.', 'security', 1),
('7a258951-95d6-40c8-8ea5-0f04953b8821', 'mcq', 'What is a vulnerability scanner?', '["Tool that automatically finds security flaws","Code editor","Design tool","Database viewer"]', '"Tool that automatically finds security flaws"', 'Scanners automate vulnerability detection.', 'security', 2),
-- Incident Response
('94f8f4e3-e7c1-4825-84ee-af2043a78f48', 'mcq', 'First step in incident response?', '["Identification","Eradication","Recovery","Containment"]', '"Identification"', 'You must identify the incident before responding.', 'security', 0),
('94f8f4e3-e7c1-4825-84ee-af2043a78f48', 'mcq', 'What is a SIEM?', '["Security Information and Event Management system","Simple Internet Email Module","Secure Integrated Encryption Method","Server Infrastructure Event Monitor"]', '"Security Information and Event Management system"', 'SIEM aggregates and analyzes security events.', 'security', 1),
('94f8f4e3-e7c1-4825-84ee-af2043a78f48', 'mcq', 'What is digital forensics?', '["Investigating digital evidence after an incident","Building websites","Testing APIs","Managing servers"]', '"Investigating digital evidence after an incident"', 'Forensics recovers and analyzes digital evidence.', 'security', 2);
