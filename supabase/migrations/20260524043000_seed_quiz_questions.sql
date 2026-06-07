-- ============================================================
-- Seed Quiz Questions for all courses
-- ============================================================
-- These quiz questions correspond to the quizzes created in
-- migration 20260524040000_seed_courses_and_lessons.sql

-- ============================================================
-- FRONT-END: HTML Dasar (quiz: 4ac471ff-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('4ac471ff-04f8-4a86-a3d3-2ed3db1f6e50', 'mcq', 'What does HTML stand for?', '["HyperText Markup Language","High Tech Modern Language","HyperText Modern Layout","Home Tool Markup Language"]', '"HyperText Markup Language"', 'HTML is the standard markup language.', 'markup', 0, NULL, NULL),
('4ac471ff-04f8-4a86-a3d3-2ed3db1f6e50', 'blank_space', 'Complete the HTML heading:', NULL, '["<h1>"]', 'h1 is the largest heading tag.', 'markup', 1, '___ Hello World </h1>', '["<h1>","<h2>","<head>","<header>"]'),
('4ac471ff-04f8-4a86-a3d3-2ed3db1f6e50', 'mcq', 'Which tag creates a hyperlink?', '["<a>","<link>","<href>","<url>"]', '"<a>"', 'The anchor tag creates hyperlinks.', 'markup', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: CSS & Styling (quiz: b23de411-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('b23de411-f676-40d9-aeaa-b0e7394332dd', 'mcq', 'Which property changes text color?', '["color","text-color","font-color","text-style"]', '"color"', 'The color property sets text color.', 'visual', 0, NULL, NULL),
('b23de411-f676-40d9-aeaa-b0e7394332dd', 'blank_space', 'Complete the CSS flexbox:', NULL, '["display: flex"]', 'display: flex enables flexbox layout.', 'visual', 1, '.container { ___; justify-content: center; }', '["display: flex","display: grid","display: block","display: inline"]'),
('b23de411-f676-40d9-aeaa-b0e7394332dd', 'short_coding', 'Write CSS to set background color to blue', NULL, '"background-color: blue;"', 'background-color sets the background.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: Responsive Design (quiz: 165111bf-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('165111bf-c7c4-4c21-b9b3-856fdb55906e', 'mcq', 'What makes a website responsive?', '["Media queries","JavaScript only","Server-side rendering","Database queries"]', '"Media queries"', 'Media queries adapt layouts to screen sizes.', 'visual', 0, NULL, NULL),
('165111bf-c7c4-4c21-b9b3-856fdb55906e', 'mcq', 'Which viewport meta tag is essential?', '["width=device-width","height=device-height","zoom=auto","scale=responsive"]', '"width=device-width"', 'Sets viewport to device width.', 'visual', 1, NULL, NULL),
('165111bf-c7c4-4c21-b9b3-856fdb55906e', 'blank_space', 'Complete the media query:', NULL, '["@media"]', '@media applies styles conditionally.', 'visual', 2, '___ (max-width: 768px) { .sidebar { display: none; } }', '["@media","@screen","@device","@responsive"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: JavaScript ES6+ (quiz: 76267112-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('76267112-29f8-4d74-91d0-4e1fd9bc2521', 'mcq', 'Which keyword declares a constant in ES6?', '["const","var","let","static"]', '"const"', 'const declares a read-only variable.', 'logic', 0, NULL, NULL),
('76267112-29f8-4d74-91d0-4e1fd9bc2521', 'blank_space', 'Complete the arrow function:', NULL, '["=>"]', 'Arrow functions use => syntax.', 'logic', 1, 'const add = (a, b) ___ a + b;', '["=>","->",">>","~>"]'),
('76267112-29f8-4d74-91d0-4e1fd9bc2521', 'short_coding', 'Write a template literal with variable name', NULL, '"`Hello ${name}`"', 'Template literals use backticks and ${}.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: DOM Manipulation (quiz: b887c619-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('b887c619-4144-4680-ae42-39ebe5a11748', 'mcq', 'What does DOM stand for?', '["Document Object Model","Data Object Manager","Digital Output Method","Document Oriented Markup"]', '"Document Object Model"', 'DOM represents the page as objects.', 'logic', 0, NULL, NULL),
('b887c619-4144-4680-ae42-39ebe5a11748', 'blank_space', 'Complete the DOM selector:', NULL, '["document.getElementById"]', 'getElementById selects by ID.', 'logic', 1, 'const el = ___("myDiv");', '["document.getElementById","document.querySelector","document.getElement","dom.findById"]'),
('b887c619-4144-4680-ae42-39ebe5a11748', 'mcq', 'Which method adds an event listener?', '["addEventListener","onEvent","bindEvent","attachEvent"]', '"addEventListener"', 'addEventListener attaches event handlers.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: React Fundamentals (quiz: def3ab96-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('def3ab96-d3c9-4dc4-ba15-a11a2f1c9583', 'mcq', 'React was created by?', '["Facebook/Meta","Google","Microsoft","Apple"]', '"Facebook/Meta"', 'React was developed by Facebook.', 'logic', 0, NULL, NULL),
('def3ab96-d3c9-4dc4-ba15-a11a2f1c9583', 'mcq', 'What is JSX?', '["JavaScript XML syntax","Java Server Extension","JSON XML Schema","JavaScript Extra"]', '"JavaScript XML syntax"', 'JSX lets you write HTML in JavaScript.', 'markup', 1, NULL, NULL),
('def3ab96-d3c9-4dc4-ba15-a11a2f1c9583', 'blank_space', 'Complete the React component:', NULL, '["return"]', 'Components return JSX.', 'logic', 2, 'function App() { ___ (<div>Hello</div>); }', '["return","render","output","display"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: React Hooks (quiz: 7b2ae47c-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('7b2ae47c-8578-4a84-947b-e08435fdccd0', 'mcq', 'Which hook manages state?', '["useState","useEffect","useRef","useMemo"]', '"useState"', 'useState is the primary state hook.', 'logic', 0, NULL, NULL),
('7b2ae47c-8578-4a84-947b-e08435fdccd0', 'blank_space', 'Complete the useState hook:', NULL, '["useState"]', 'useState returns state and setter.', 'logic', 1, 'const [count, setCount] = ___(0);', '["useState","useEffect","useRef","useReducer"]'),
('7b2ae47c-8578-4a84-947b-e08435fdccd0', 'short_coding', 'Write a useEffect that runs only on mount', NULL, '"useEffect(() => { }, []);"', 'Empty dependency array runs once.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: Tailwind CSS (quiz: 245f9ed7-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('245f9ed7-4996-4719-ba56-99e6fb8fdcb8', 'mcq', 'Tailwind CSS is what type of framework?', '["Utility-first","Component-based","Semantic","Preprocessor"]', '"Utility-first"', 'Tailwind uses utility classes.', 'visual', 0, NULL, NULL),
('245f9ed7-4996-4719-ba56-99e6fb8fdcb8', 'mcq', 'Which class makes text bold?', '["font-bold","text-bold","bold","fw-bold"]', '"font-bold"', 'font-bold applies font-weight 700.', 'visual', 1, NULL, NULL),
('245f9ed7-4996-4719-ba56-99e6fb8fdcb8', 'blank_space', 'Complete the Tailwind flex class:', NULL, '["flex"]', 'flex enables flexbox in Tailwind.', 'visual', 2, '<div className="___ items-center justify-between">', '["flex","grid","block","inline"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: Fetch API & Async (quiz: 46930158-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('46930158-53c8-4b7f-9955-8f88b8628f6d', 'mcq', 'Which API is used for HTTP requests?', '["fetch","XMLHttpRequest","ajax","request"]', '"fetch"', 'Fetch API provides modern HTTP interface.', 'logic', 0, NULL, NULL),
('46930158-53c8-4b7f-9955-8f88b8628f6d', 'blank_space', 'Complete the fetch call:', NULL, '["await fetch"]', 'await fetch makes async HTTP request.', 'logic', 1, 'const response = ___("/api/data");', '["await fetch","get","http.get","axios"]'),
('46930158-53c8-4b7f-9955-8f88b8628f6d', 'mcq', 'What does async/await replace?', '["Promise .then() chains","Callbacks only","Synchronous code","Event listeners"]', '"Promise .then() chains"', 'async/await provides cleaner promise syntax.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- FRONT-END: Build Tools & Vite (quiz: f06d73e4-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('f06d73e4-fae6-4bc0-9773-a5aca21f19eb', 'mcq', 'What is Vite?', '["Build tool","Database","CSS framework","Testing library"]', '"Build tool"', 'Vite is a fast build tool.', 'logic', 0, NULL, NULL),
('f06d73e4-fae6-4bc0-9773-a5aca21f19eb', 'mcq', 'What does npm stand for?', '["Node Package Manager","New Project Module","Network Protocol Manager","Node Program Method"]', '"Node Package Manager"', 'npm manages JavaScript packages.', 'logic', 1, NULL, NULL),
('f06d73e4-fae6-4bc0-9773-a5aca21f19eb', 'blank_space', 'Complete the build command:', NULL, '["npm run build"]', 'npm run build creates production bundle.', 'logic', 2, '$ ___', '["npm run build","npm start","npm install","npm test"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: HTTP Fundamentals (quiz: 66ebced2-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('66ebced2-8c4c-4d38-be33-ead60880313a', 'mcq', 'What does HTTP stand for?', '["HyperText Transfer Protocol","High Tech Transfer Protocol","HyperText Transmission Process","Home Tool Transfer Protocol"]', '"HyperText Transfer Protocol"', 'HTTP is the foundation of data communication on the web.', 'logic', 0, NULL, NULL),
('66ebced2-8c4c-4d38-be33-ead60880313a', 'mcq', 'Which HTTP method is used to retrieve data?', '["GET","POST","PUT","DELETE"]', '"GET"', 'GET requests are used to retrieve data from a server.', 'logic', 1, NULL, NULL),
('66ebced2-8c4c-4d38-be33-ead60880313a', 'mcq', 'What status code means Not Found?', '["404","200","500","301"]', '"404"', '404 indicates the requested resource was not found.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: PHP Dasar (quiz: 2e4e6d9c-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('2e4e6d9c-91ea-4f13-8774-9049a7cecf8b', 'blank_space', 'Complete the PHP variable declaration:', NULL, '["$name"]', 'PHP variables start with a $ sign.', 'markup', 0, '___ = "CodeMode";', '["$name","name","var name","let name"]'),
('2e4e6d9c-91ea-4f13-8774-9049a7cecf8b', 'mcq', 'Which symbol starts a PHP variable?', '["$","#","@","&"]', '"$"', 'All PHP variables begin with a dollar sign.', 'markup', 1, NULL, NULL),
('2e4e6d9c-91ea-4f13-8774-9049a7cecf8b', 'short_coding', 'Write a PHP echo statement that prints Hello World', NULL, '"echo \"Hello World\";"', 'echo is used to output text in PHP.', 'markup', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: Laravel Framework (quiz: 553f8407-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('553f8407-4660-467d-910a-c5b7572e64b4', 'mcq', 'Laravel is a framework for which language?', '["PHP","Python","JavaScript","Ruby"]', '"PHP"', 'Laravel is a popular PHP web framework.', 'logic', 0, NULL, NULL),
('553f8407-4660-467d-910a-c5b7572e64b4', 'mcq', 'What is Eloquent in Laravel?', '["ORM","Template Engine","Router","Middleware"]', '"ORM"', 'Eloquent is Laravel ORM.', 'database', 1, NULL, NULL),
('553f8407-4660-467d-910a-c5b7572e64b4', 'blank_space', 'Complete the Laravel route:', NULL, '["Route::get"]', 'Routes in Laravel use the Route facade.', 'logic', 2, '___("/hello", function () { return "Hello!"; });', '["Route::get","Route::post","app.get","router.get"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: Node.js Essentials (quiz: e3059e9c-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('e3059e9c-f7af-4aab-bd1a-5d71f92f4625', 'mcq', 'Node.js runs on which engine?', '["V8","SpiderMonkey","Chakra","JavaScriptCore"]', '"V8"', 'Node.js is built on V8 JavaScript engine.', 'logic', 0, NULL, NULL),
('e3059e9c-f7af-4aab-bd1a-5d71f92f4625', 'short_coding', 'Write a require statement to import express', NULL, '"const express = require(''express'');"', 'require() imports modules in Node.js.', 'logic', 1, NULL, NULL),
('e3059e9c-f7af-4aab-bd1a-5d71f92f4625', 'blank_space', 'Complete the Express server:', NULL, '["app.listen"]', 'app.listen starts the Express server.', 'logic', 2, '___(3000, () => console.log("Running"));', '["app.listen","server.start","app.run","app.start"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: REST API Design (quiz: f39329d0-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('f39329d0-903d-4796-b444-3a0b9c1a24d6', 'mcq', 'REST stands for?', '["Representational State Transfer","Remote Execution Service Tool","Real-time Event System","Resource State Transmission"]', '"Representational State Transfer"', 'REST is an architectural style for APIs.', 'logic', 0, NULL, NULL),
('f39329d0-903d-4796-b444-3a0b9c1a24d6', 'mcq', 'Which HTTP method updates a resource?', '["PUT","GET","POST","OPTIONS"]', '"PUT"', 'PUT updates an existing resource.', 'logic', 1, NULL, NULL),
('f39329d0-903d-4796-b444-3a0b9c1a24d6', 'mcq', 'What format is commonly used in REST APIs?', '["JSON","XML","CSV","YAML"]', '"JSON"', 'JSON is the most common REST API format.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: API Testing (quiz: 655ef872-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('655ef872-e847-4a34-a9d6-13cdc2f7aea8', 'mcq', 'Which tool is commonly used for API testing?', '["Postman","Photoshop","VS Code","Chrome"]', '"Postman"', 'Postman is a popular API testing tool.', 'logic', 0, NULL, NULL),
('655ef872-e847-4a34-a9d6-13cdc2f7aea8', 'mcq', 'What does a 200 status code mean?', '["OK/Success","Created","Not Found","Server Error"]', '"OK/Success"', '200 means the request was successful.', 'logic', 1, NULL, NULL),
('655ef872-e847-4a34-a9d6-13cdc2f7aea8', 'mcq', 'What is API documentation?', '["Description of endpoints and usage","Source code","Database schema","Server logs"]', '"Description of endpoints and usage"', 'API docs describe how to use the API.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: Backend Auth & Security (quiz: 49f15f1f-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('49f15f1f-157f-4463-9090-fbb7dd53f610', 'mcq', 'What does JWT stand for?', '["JSON Web Token","Java Web Tool","JavaScript Web Transfer","JSON Web Transport"]', '"JSON Web Token"', 'JWT is a compact token format.', 'security', 0, NULL, NULL),
('49f15f1f-157f-4463-9090-fbb7dd53f610', 'mcq', 'Which is more secure for storing passwords?', '["Bcrypt hashing","Plain text","Base64 encoding","MD5 hashing"]', '"Bcrypt hashing"', 'Bcrypt is a secure password hashing algorithm.', 'security', 1, NULL, NULL),
('49f15f1f-157f-4463-9090-fbb7dd53f610', 'mcq', 'What is CORS?', '["Cross-Origin Resource Sharing","Cross-Origin Request Security","Client-Origin Response System","Cross-Object Resource Sharing"]', '"Cross-Origin Resource Sharing"', 'CORS controls which origins can access resources.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- BACK-END: Docker & CI/CD (quiz: 097d0048-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('097d0048-bd48-4ab2-a3e6-d43c8a0e33c2', 'mcq', 'What is Docker used for?', '["Containerization","Version control","Code editing","API testing"]', '"Containerization"', 'Docker packages apps into containers.', 'logic', 0, NULL, NULL),
('097d0048-bd48-4ab2-a3e6-d43c8a0e33c2', 'mcq', 'CI/CD stands for?', '["Continuous Integration/Continuous Deployment","Code Integration/Code Deployment","Central Interface/Central Database","Client Integration/Client Delivery"]', '"Continuous Integration/Continuous Deployment"', 'CI/CD automates building, testing, and deploying.', 'logic', 1, NULL, NULL),
('097d0048-bd48-4ab2-a3e6-d43c8a0e33c2', 'blank_space', 'Complete the Docker command:', NULL, '["docker run"]', 'docker run creates and starts a container.', 'logic', 2, '___ -p 3000:3000 my-app', '["docker run","docker start","docker exec","docker build"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- DATABASE: SQL Fundamentals (quiz: 67c4d2ab-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('67c4d2ab-ffae-4172-a9ae-da66f4b8da74', 'blank_space', 'Complete the SQL query:', NULL, '["SELECT"]', 'SELECT retrieves data from a database.', 'database', 0, '___ * FROM users WHERE age > 18;', '["SELECT","GET","FIND","FETCH"]'),
('67c4d2ab-ffae-4172-a9ae-da66f4b8da74', 'mcq', 'Which SQL clause filters results?', '["WHERE","HAVING","GROUP BY","ORDER BY"]', '"WHERE"', 'WHERE filters rows based on conditions.', 'database', 1, NULL, NULL),
('67c4d2ab-ffae-4172-a9ae-da66f4b8da74', 'short_coding', 'Write SQL to select all from products table', NULL, '"SELECT * FROM products;"', 'SELECT * retrieves all columns.', 'database', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- DATABASE: PostgreSQL Deep Dive (quiz: c3fd7cc2-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('c3fd7cc2-26b3-48b1-90c7-d94b71dce0a8', 'mcq', 'PostgreSQL is what type of database?', '["Relational","NoSQL","Graph","Key-Value"]', '"Relational"', 'PostgreSQL is an open-source relational database.', 'database', 0, NULL, NULL),
('c3fd7cc2-26b3-48b1-90c7-d94b71dce0a8', 'mcq', 'Which data type stores true/false in PostgreSQL?', '["BOOLEAN","BIT","BINARY","LOGICAL"]', '"BOOLEAN"', 'BOOLEAN stores true/false values.', 'database', 1, NULL, NULL),
('c3fd7cc2-26b3-48b1-90c7-d94b71dce0a8', 'blank_space', 'Complete the table creation:', NULL, '["CREATE TABLE"]', 'CREATE TABLE defines a new table.', 'database', 2, '___ users (id SERIAL PRIMARY KEY, name TEXT);', '["CREATE TABLE","MAKE TABLE","NEW TABLE","ADD TABLE"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Design Thinking (quiz: 00a22914-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('00a22914-aa0e-47a6-af63-e0e5e6a0f162', 'mcq', 'What is Design Thinking?', '["Human-centered problem solving","Coding methodology","Database design","Marketing strategy"]', '"Human-centered problem solving"', 'Design Thinking focuses on user needs.', 'visual', 0, NULL, NULL),
('00a22914-aa0e-47a6-af63-e0e5e6a0f162', 'mcq', 'First step of Design Thinking?', '["Empathize","Prototype","Test","Define"]', '"Empathize"', 'Empathize understands user needs.', 'visual', 1, NULL, NULL),
('00a22914-aa0e-47a6-af63-e0e5e6a0f162', 'mcq', 'What is a persona in UX?', '["Fictional user representation","Real customer","Developer profile","Design template"]', '"Fictional user representation"', 'Personas represent target users.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Usability Testing (quiz: 52766262-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('52766262-95b4-4f59-b57f-a696ea5e02ba', 'mcq', 'What is a usability test?', '["Observing users interact with product","Code review","Performance test","Security audit"]', '"Observing users interact with product"', 'Usability tests evaluate ease of use.', 'visual', 0, NULL, NULL),
('52766262-95b4-4f59-b57f-a696ea5e02ba', 'mcq', 'What is an A/B test?', '["Comparing two design variants","Alphabetical sorting","Accessibility test","API benchmark"]', '"Comparing two design variants"', 'A/B testing compares two versions.', 'visual', 1, NULL, NULL),
('52766262-95b4-4f59-b57f-a696ea5e02ba', 'mcq', 'Users needed for usability test?', '["5","50","100","1000"]', '"5"', '5 users uncover most issues.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Information Architecture (quiz: 6bf67494-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('6bf67494-1449-4904-bdf5-28914bb6adb2', 'mcq', 'What is information architecture?', '["Organizing content and navigation","Building databases","Writing code","Server setup"]', '"Organizing content and navigation"', 'IA structures content for users.', 'visual', 0, NULL, NULL),
('6bf67494-1449-4904-bdf5-28914bb6adb2', 'mcq', 'What is a sitemap?', '["Visual hierarchy of pages","Code map","Database schema","Server architecture"]', '"Visual hierarchy of pages"', 'Sitemaps show page structure.', 'visual', 1, NULL, NULL),
('6bf67494-1449-4904-bdf5-28914bb6adb2', 'mcq', 'Card sorting helps with?', '["Organizing categories","Choosing colors","Writing code","Testing performance"]', '"Organizing categories"', 'Card sorting organizes info groups.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Wireframing (quiz: 7fdc4004-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('7fdc4004-f080-4482-ac63-b0ae4edf5f6e', 'mcq', 'What is a wireframe?', '["Low-fidelity layout sketch","Final design","Working prototype","Source code"]', '"Low-fidelity layout sketch"', 'Wireframes are structural blueprints.', 'visual', 0, NULL, NULL),
('7fdc4004-f080-4482-ac63-b0ae4edf5f6e', 'mcq', 'Wireframe vs mockup?', '["Wireframe is low-fi, mockup is high-fi","Same thing","Wireframe has code","Mockup is interactive"]', '"Wireframe is low-fi, mockup is high-fi"', 'Wireframes show structure, mockups show visuals.', 'visual', 1, NULL, NULL),
('7fdc4004-f080-4482-ac63-b0ae4edf5f6e', 'mcq', 'Which tool is NOT for wireframing?', '["MySQL","Balsamiq","Figma","Sketch"]', '"MySQL"', 'MySQL is a database tool.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Figma Mastery (quiz: 4c459104-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('4c459104-8b58-4d1a-9dc0-847609ff23c9', 'mcq', 'Figma is primarily used for?', '["UI/UX Design","Backend development","Database management","Server configuration"]', '"UI/UX Design"', 'Figma is a collaborative design tool.', 'visual', 0, NULL, NULL),
('4c459104-8b58-4d1a-9dc0-847609ff23c9', 'mcq', 'Auto Layout in Figma is?', '["Responsive frame resizing","Automatic coding","Database layout","Server scaling"]', '"Responsive frame resizing"', 'Auto Layout makes designs responsive.', 'visual', 1, NULL, NULL),
('4c459104-8b58-4d1a-9dc0-847609ff23c9', 'mcq', 'Figma Components are?', '["Reusable design elements","Database tables","API endpoints","Server modules"]', '"Reusable design elements"', 'Components are reusable building blocks.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Color & Typography (quiz: 71402f2a-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('71402f2a-439b-467b-971e-0c63518000c2', 'mcq', 'Complementary color scheme?', '["Colors opposite on color wheel","Same color shades","Random colors","No colors"]', '"Colors opposite on color wheel"', 'Complementary creates high contrast.', 'visual', 0, NULL, NULL),
('71402f2a-439b-467b-971e-0c63518000c2', 'mcq', 'What is kerning?', '["Space between individual letters","Font size","Line height","Text color"]', '"Space between individual letters"', 'Kerning adjusts character spacing.', 'visual', 1, NULL, NULL),
('71402f2a-439b-467b-971e-0c63518000c2', 'mcq', 'Serif fonts have?', '["Small decorative strokes","No decorations","Only curves","Only straight lines"]', '"Small decorative strokes"', 'Serifs are small lines at character ends.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Design Systems (quiz: 89ce6f9d-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('89ce6f9d-8adf-4e83-af4a-698b698e353f', 'mcq', 'What is a design system?', '["Collection of reusable components and guidelines","Single color palette","One font file","A JavaScript library"]', '"Collection of reusable components and guidelines"', 'Design systems ensure consistency across products.', 'visual', 0, NULL, NULL),
('89ce6f9d-8adf-4e83-af4a-698b698e353f', 'mcq', 'What is a design token?', '["Named design decision (color, spacing)","API key","Database field","HTML tag"]', '"Named design decision (color, spacing)"', 'Design tokens store visual design values.', 'visual', 1, NULL, NULL),
('89ce6f9d-8adf-4e83-af4a-698b698e353f', 'mcq', 'Which is an example of a design system?', '["Material Design","React","Node.js","PostgreSQL"]', '"Material Design"', 'Material Design is Google''s design system.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Prototyping (quiz: 037bec63-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('037bec63-36fa-4378-bca3-da4d2730be4d', 'mcq', 'What is a prototype?', '["Interactive simulation of the final product","Final code","Database schema","Server config"]', '"Interactive simulation of the final product"', 'Prototypes let you test interactions before coding.', 'visual', 0, NULL, NULL),
('037bec63-36fa-4378-bca3-da4d2730be4d', 'mcq', 'High-fidelity prototype is?', '["Close to final design with real content","Paper sketch","Wireframe","Sitemap"]', '"Close to final design with real content"', 'Hi-fi prototypes look like the real product.', 'visual', 1, NULL, NULL),
('037bec63-36fa-4378-bca3-da4d2730be4d', 'mcq', 'Which tool creates interactive prototypes?', '["Figma","MySQL","VS Code","Git"]', '"Figma"', 'Figma supports interactive prototyping.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: Usability Test Quiz (quiz: 93ce0830-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('93ce0830-d12e-4799-a1e3-263ecfcb4c9d', 'mcq', 'What is a think-aloud protocol?', '["User verbalizes thoughts while testing","Code review method","Database technique","API testing"]', '"User verbalizes thoughts while testing"', 'Think-aloud helps understand user reasoning.', 'visual', 0, NULL, NULL),
('93ce0830-d12e-4799-a1e3-263ecfcb4c9d', 'mcq', 'SUS stands for?', '["System Usability Scale","Software Update System","Simple User Survey","Standard UI Score"]', '"System Usability Scale"', 'SUS is a standard usability questionnaire.', 'visual', 1, NULL, NULL),
('93ce0830-d12e-4799-a1e3-263ecfcb4c9d', 'mcq', 'What is a heuristic evaluation?', '["Expert review based on usability principles","User testing","A/B testing","Code review"]', '"Expert review based on usability principles"', 'Experts evaluate against usability heuristics.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- UI/UX: UX Portfolio (quiz: b85dc695-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('b85dc695-acc7-443b-80d7-ba0efca15dac', 'mcq', 'What should a UX portfolio include?', '["Case studies with process and results","Only screenshots","Just a resume","Code samples"]', '"Case studies with process and results"', 'Show your design process and outcomes.', 'visual', 0, NULL, NULL),
('b85dc695-acc7-443b-80d7-ba0efca15dac', 'mcq', 'Best format for a design portfolio?', '["Website/Online portfolio","Printed book only","Email attachment","Social media post"]', '"Website/Online portfolio"', 'Online portfolios are accessible and interactive.', 'visual', 1, NULL, NULL),
('b85dc695-acc7-443b-80d7-ba0efca15dac', 'mcq', 'What makes a strong case study?', '["Problem, process, solution, and results","Just the final mockup","Only wireframes","Code snippets"]', '"Problem, process, solution, and results"', 'Strong case studies tell the full design story.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Security Basics (quiz: cc9dc15d-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('cc9dc15d-2e30-4fd3-9a8c-28454876adf7', 'mcq', 'CIA in cybersecurity stands for?', '["Confidentiality, Integrity, Availability","Central Intelligence Agency","Code Integration Analysis","Cyber Information Access"]', '"Confidentiality, Integrity, Availability"', 'The CIA triad is the foundation of information security.', 'security', 0, NULL, NULL),
('cc9dc15d-2e30-4fd3-9a8c-28454876adf7', 'mcq', 'What is malware?', '["Malicious software","Email client","Firewall","Antivirus"]', '"Malicious software"', 'Malware is software designed to cause harm.', 'security', 1, NULL, NULL),
('cc9dc15d-2e30-4fd3-9a8c-28454876adf7', 'mcq', 'What is phishing?', '["Fraudulent attempt to obtain sensitive data","Network scanning","Code review","Database backup"]', '"Fraudulent attempt to obtain sensitive data"', 'Phishing tricks users into revealing information.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Network Security (quiz: 5ecc9929-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('5ecc9929-4b39-412e-ae7a-8e3d03f204cc', 'mcq', 'What is a firewall?', '["Network security system that filters traffic","Antivirus software","Password manager","VPN"]', '"Network security system that filters traffic"', 'Firewalls monitor and control network traffic.', 'security', 0, NULL, NULL),
('5ecc9929-4b39-412e-ae7a-8e3d03f204cc', 'mcq', 'What does VPN stand for?', '["Virtual Private Network","Very Private Network","Visual Protocol Network","Verified Public Network"]', '"Virtual Private Network"', 'VPNs create encrypted connections over the internet.', 'security', 1, NULL, NULL),
('5ecc9929-4b39-412e-ae7a-8e3d03f204cc', 'mcq', 'What is a DDoS attack?', '["Overwhelming a server with traffic","Stealing passwords","Code injection","File encryption"]', '"Overwhelming a server with traffic"', 'DDoS floods servers to make them unavailable.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Security Protocols (quiz: 16a61196-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('16a61196-c5da-4016-a7f5-47da51d1ec09', 'mcq', 'HTTPS uses which protocol for encryption?', '["TLS/SSL","FTP","SMTP","SSH"]', '"TLS/SSL"', 'HTTPS uses TLS/SSL to encrypt web traffic.', 'security', 0, NULL, NULL),
('16a61196-c5da-4016-a7f5-47da51d1ec09', 'mcq', 'Which port does HTTPS use by default?', '["443","80","22","3306"]', '"443"', 'Port 443 is the standard HTTPS port.', 'security', 1, NULL, NULL),
('16a61196-c5da-4016-a7f5-47da51d1ec09', 'mcq', 'What is SSH used for?', '["Secure remote server access","Sending emails","Web browsing","File sharing"]', '"Secure remote server access"', 'SSH provides encrypted remote shell access.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Cryptography (quiz: baa8d749-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('baa8d749-e156-4bf1-9348-6fc8ee66749a', 'mcq', 'What is symmetric encryption?', '["Same key for encrypt and decrypt","Different keys","No key needed","Hash function"]', '"Same key for encrypt and decrypt"', 'Symmetric encryption uses one shared key.', 'security', 0, NULL, NULL),
('baa8d749-e156-4bf1-9348-6fc8ee66749a', 'mcq', 'AES stands for?', '["Advanced Encryption Standard","Automated Encoding System","Applied Encryption Software","Advanced Email Security"]', '"Advanced Encryption Standard"', 'AES is a widely used encryption algorithm.', 'security', 1, NULL, NULL),
('baa8d749-e156-4bf1-9348-6fc8ee66749a', 'mcq', 'What is hashing?', '["One-way function producing fixed-length output","Two-way encryption","Compression","Encoding"]', '"One-way function producing fixed-length output"', 'Hashes cannot be reversed to get the original data.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: OWASP Top 10 Part 1 (quiz: be789b17-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('be789b17-96d0-401d-9f81-f5a9abe366cc', 'mcq', 'What is SQL injection?', '["Inserting malicious SQL through user input","Normal database query","API call","File upload"]', '"Inserting malicious SQL through user input"', 'SQL injection exploits unsanitized user input.', 'security', 0, NULL, NULL),
('be789b17-96d0-401d-9f81-f5a9abe366cc', 'mcq', 'What is XSS?', '["Cross-Site Scripting","Cross-Server Security","Client-Side Storage","Cascading Style Sheets"]', '"Cross-Site Scripting"', 'XSS injects malicious scripts into web pages.', 'security', 1, NULL, NULL),
('be789b17-96d0-401d-9f81-f5a9abe366cc', 'mcq', 'How to prevent SQL injection?', '["Parameterized queries","String concatenation","Disabling database","Using plain text"]', '"Parameterized queries"', 'Parameterized queries separate code from data.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: OWASP Top 10 Part 2 (quiz: 94b89ca7-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('94b89ca7-3858-4ba0-b78a-1a166f2f94fa', 'mcq', 'What is CSRF?', '["Cross-Site Request Forgery","Client Server Request Form","Cross-System Resource Finder","Central Security Request Filter"]', '"Cross-Site Request Forgery"', 'CSRF tricks users into performing unwanted actions.', 'security', 0, NULL, NULL),
('94b89ca7-3858-4ba0-b78a-1a166f2f94fa', 'mcq', 'What is broken authentication?', '["Weak login/session management","Strong passwords","Two-factor auth","Encryption"]', '"Weak login/session management"', 'Broken auth allows attackers to access accounts.', 'security', 1, NULL, NULL),
('94b89ca7-3858-4ba0-b78a-1a166f2f94fa', 'mcq', 'OWASP stands for?', '["Open Web Application Security Project","Online Web App Security Protocol","Open Wireless Application System","Organized Web Access Security Plan"]', '"Open Web Application Security Project"', 'OWASP provides web security resources.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Web App Security (quiz: 625bfd58-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('625bfd58-6bbb-469a-a43b-17cd78030084', 'mcq', 'What is input validation?', '["Checking user input for safety","Styling forms","Database backup","Server monitoring"]', '"Checking user input for safety"', 'Input validation prevents malicious data entry.', 'security', 0, NULL, NULL),
('625bfd58-6bbb-469a-a43b-17cd78030084', 'mcq', 'What is Content Security Policy?', '["HTTP header to prevent XSS","CSS framework","JavaScript library","Database tool"]', '"HTTP header to prevent XSS"', 'CSP restricts which resources can be loaded.', 'security', 1, NULL, NULL),
('625bfd58-6bbb-469a-a43b-17cd78030084', 'mcq', 'What is rate limiting?', '["Restricting number of requests per time","Limiting database size","Reducing page speed","Blocking all traffic"]', '"Restricting number of requests per time"', 'Rate limiting prevents abuse and DDoS attacks.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Reconnaissance (quiz: c5cdfd15-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('c5cdfd15-d3f9-41c6-83b8-5ac5720df547', 'mcq', 'What is reconnaissance in cybersecurity?', '["Gathering information about a target","Building software","Designing UI","Managing databases"]', '"Gathering information about a target"', 'Recon is the first phase of ethical hacking.', 'security', 0, NULL, NULL),
('c5cdfd15-d3f9-41c6-83b8-5ac5720df547', 'mcq', 'What tool is used for network scanning?', '["Nmap","Figma","VS Code","Excel"]', '"Nmap"', 'Nmap discovers hosts and services on networks.', 'security', 1, NULL, NULL),
('c5cdfd15-d3f9-41c6-83b8-5ac5720df547', 'mcq', 'What is footprinting?', '["Collecting target system information","Creating wireframes","Writing tests","Deploying apps"]', '"Collecting target system information"', 'Footprinting maps out target infrastructure.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Penetration Testing (quiz: 7a258951-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('7a258951-95d6-40c8-8ea5-0f04953b8821', 'mcq', 'What is penetration testing?', '["Authorized simulated attack to find vulnerabilities","Unauthorized hacking","Code review","UI testing"]', '"Authorized simulated attack to find vulnerabilities"', 'Pen testing identifies security weaknesses.', 'security', 0, NULL, NULL),
('7a258951-95d6-40c8-8ea5-0f04953b8821', 'mcq', 'Which is a pen testing framework?', '["Metasploit","React","Django","Flutter"]', '"Metasploit"', 'Metasploit is a popular penetration testing tool.', 'security', 1, NULL, NULL),
('7a258951-95d6-40c8-8ea5-0f04953b8821', 'mcq', 'What is a vulnerability scanner?', '["Tool that automatically finds security flaws","Code editor","Design tool","Database viewer"]', '"Tool that automatically finds security flaws"', 'Scanners automate vulnerability detection.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- CYBER SECURITY: Incident Response (quiz: 94f8f4e3-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('94f8f4e3-e7c1-4825-84ee-af2043a78f48', 'mcq', 'First step in incident response?', '["Identification","Eradication","Recovery","Containment"]', '"Identification"', 'You must identify the incident before responding.', 'security', 0, NULL, NULL),
('94f8f4e3-e7c1-4825-84ee-af2043a78f48', 'mcq', 'What is a SIEM?', '["Security Information and Event Management system","Simple Internet Email Module","Secure Integrated Encryption Method","Server Infrastructure Event Monitor"]', '"Security Information and Event Management system"', 'SIEM aggregates and analyzes security events.', 'security', 1, NULL, NULL),
('94f8f4e3-e7c1-4825-84ee-af2043a78f48', 'mcq', 'What is digital forensics?', '["Investigating digital evidence after an incident","Building websites","Testing APIs","Managing servers"]', '"Investigating digital evidence after an incident"', 'Forensics recovers and analyzes digital evidence.', 'security', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: Mobile Dev Intro (quiz: 482b1802-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('482b1802-1ef3-4cb5-b490-e596e5cc17e8', 'mcq', 'What is cross-platform development?', '["Building for multiple OS from one codebase","Building native apps","Server development","Database design"]', '"Building for multiple OS from one codebase"', 'Cross-platform targets iOS and Android together.', 'logic', 0, NULL, NULL),
('482b1802-1ef3-4cb5-b490-e596e5cc17e8', 'mcq', 'Which is NOT a mobile framework?', '["Django","Flutter","React Native","SwiftUI"]', '"Django"', 'Django is a Python web framework.', 'logic', 1, NULL, NULL),
('482b1802-1ef3-4cb5-b490-e596e5cc17e8', 'mcq', 'What OS does iPhone use?', '["iOS","Android","Windows","HarmonyOS"]', '"iOS"', 'iPhones run iOS.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: Dart Programming (quiz: 1017d705-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('1017d705-754c-4475-b46e-deedc3ceb1b6', 'blank_space', 'Complete the Dart variable:', NULL, '["var"]', 'var declares a variable in Dart.', 'logic', 0, '___ name = "CodeMode";', '["var","let","const","dim"]'),
('1017d705-754c-4475-b46e-deedc3ceb1b6', 'mcq', 'Dart is developed by?', '["Google","Apple","Microsoft","Facebook"]', '"Google"', 'Dart is a Google-developed language.', 'logic', 1, NULL, NULL),
('1017d705-754c-4475-b46e-deedc3ceb1b6', 'short_coding', 'Write a Dart print statement for Hello', NULL, '"print(\"Hello\");"', 'print() outputs to console in Dart.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: Flutter Widgets (quiz: 5f08d8ff-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('5f08d8ff-cb88-4f11-ac8d-c1c2b2d8758f', 'mcq', 'What is the base class for Flutter widgets?', '["Widget","Component","View","Element"]', '"Widget"', 'Everything in Flutter is a Widget.', 'logic', 0, NULL, NULL),
('5f08d8ff-cb88-4f11-ac8d-c1c2b2d8758f', 'mcq', 'Which widget arranges children vertically?', '["Column","Row","Stack","Wrap"]', '"Column"', 'Column arranges children vertically.', 'visual', 1, NULL, NULL),
('5f08d8ff-cb88-4f11-ac8d-c1c2b2d8758f', 'blank_space', 'Complete the Flutter scaffold:', NULL, '["Scaffold"]', 'Scaffold provides material design structure.', 'visual', 2, 'return ___( appBar: AppBar(title: Text("App")), );', '["Scaffold","Container","MaterialApp","Column"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: React Native Basics (quiz: 47a10b8b-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('47a10b8b-ee91-45ba-999f-e010f4249e66', 'mcq', 'React Native uses which language?', '["JavaScript","Dart","Swift","Kotlin"]', '"JavaScript"', 'React Native uses JavaScript.', 'logic', 0, NULL, NULL),
('47a10b8b-ee91-45ba-999f-e010f4249e66', 'mcq', 'Which replaces div in React Native?', '["View","Div","Container","Section"]', '"View"', 'View is the basic building block.', 'markup', 1, NULL, NULL),
('47a10b8b-ee91-45ba-999f-e010f4249e66', 'blank_space', 'Complete the React Native text:', NULL, '["<Text>"]', 'Text displays text in React Native.', 'markup', 2, '___ Hello World </Text>', '["<Text>","<p>","<Label>","<Span>"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: Mobile UI Design (quiz: 3a6541c6-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('3a6541c6-3a2e-45e7-9491-f53855a2d51a', 'mcq', 'What is a hamburger menu?', '["Three-line navigation icon","Food ordering UI","Error message","Loading indicator"]', '"Three-line navigation icon"', 'Hamburger icon toggles mobile nav.', 'visual', 0, NULL, NULL),
('3a6541c6-3a2e-45e7-9491-f53855a2d51a', 'mcq', 'Recommended minimum touch target size?', '["44x44 points","20x20 points","10x10 points","100x100 points"]', '"44x44 points"', 'Apple recommends 44pt minimum.', 'visual', 1, NULL, NULL),
('3a6541c6-3a2e-45e7-9491-f53855a2d51a', 'mcq', 'Bottom nav should have max items?', '["5","10","3","8"]', '"5"', 'Material Design recommends 3-5 items.', 'visual', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: State Management (quiz: 5cd73ee7-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('5cd73ee7-5825-450b-8018-df469b5f1168', 'mcq', 'What is state management?', '["Managing app data flow","Database management","CSS styling","API design"]', '"Managing app data flow"', 'State management handles app data.', 'logic', 0, NULL, NULL),
('5cd73ee7-5825-450b-8018-df469b5f1168', 'mcq', 'Which is a Flutter state solution?', '["Provider","Redux","Vuex","MobX only"]', '"Provider"', 'Provider is Flutter recommended.', 'logic', 1, NULL, NULL),
('5cd73ee7-5825-450b-8018-df469b5f1168', 'blank_space', 'Complete the setState call:', NULL, '["setState"]', 'setState triggers a rebuild.', 'logic', 2, '___(() { counter++; });', '["setState","updateState","changeState","newState"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: Networking & APIs (quiz: 5864d1f4-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('5864d1f4-0cdd-4191-86b9-eedb1f7319b7', 'mcq', 'HTTP package in Flutter?', '["http","fetch","axios","request"]', '"http"', 'The http package handles HTTP in Flutter.', 'logic', 0, NULL, NULL),
('5864d1f4-0cdd-4191-86b9-eedb1f7319b7', 'mcq', 'What is JSON parsing?', '["Converting JSON string to objects","Sending data","Styling UI","Database query"]', '"Converting JSON string to objects"', 'Parsing converts text into objects.', 'logic', 1, NULL, NULL),
('5864d1f4-0cdd-4191-86b9-eedb1f7319b7', 'blank_space', 'Complete the JSON decode:', NULL, '["jsonDecode"]', 'jsonDecode parses JSON in Dart.', 'logic', 2, 'final data = ___(response.body);', '["jsonDecode","JSON.parse","json.load","parseJson"]')
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: Local Storage (quiz: d73cf8bd-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('d73cf8bd-dde0-4ada-84a8-1e1c9c7c90b4', 'mcq', 'SharedPreferences is used for?', '["Storing simple key-value data locally","Cloud storage","Database queries","API calls"]', '"Storing simple key-value data locally"', 'SharedPreferences stores lightweight data.', 'database', 0, NULL, NULL),
('d73cf8bd-dde0-4ada-84a8-1e1c9c7c90b4', 'mcq', 'SQLite is what type of database?', '["Local embedded database","Cloud database","NoSQL database","Graph database"]', '"Local embedded database"', 'SQLite is a lightweight local DB.', 'database', 1, NULL, NULL),
('d73cf8bd-dde0-4ada-84a8-1e1c9c7c90b4', 'mcq', 'AsyncStorage is used in?', '["React Native","Flutter","SwiftUI","Kotlin"]', '"React Native"', 'AsyncStorage is RN key-value storage.', 'database', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: Testing & Debugging (quiz: d418ee09-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('d418ee09-22ff-4251-a716-49c47c811053', 'mcq', 'Widget testing in Flutter tests?', '["Individual UI components","APIs","Databases","Servers"]', '"Individual UI components"', 'Widget tests verify UI rendering.', 'logic', 0, NULL, NULL),
('d418ee09-22ff-4251-a716-49c47c811053', 'mcq', 'Which tool debugs Flutter?', '["DevTools","Postman","pgAdmin","Figma"]', '"DevTools"', 'Flutter DevTools for debugging.', 'logic', 1, NULL, NULL),
('d418ee09-22ff-4251-a716-49c47c811053', 'mcq', 'What is hot reload?', '["Instantly updating code without restart","Restarting device","Clearing cache","Deploying to store"]', '"Instantly updating code without restart"', 'Hot reload preserves state.', 'logic', 2, NULL, NULL)
ON CONFLICT DO NOTHING;

-- ============================================================
-- MOBILE: App Publishing (quiz: e10176cb-...)
-- ============================================================
INSERT INTO public.quiz_questions (quiz_id, question_type, question_text, options, correct_answer, explanation, skill_category, order_index, code_snippet, syntax_chips) VALUES
('e10176cb-3b56-4550-b1d4-433a23efb420', 'mcq', 'Where are Android apps published?', '["Google Play Store","App Store","npm","GitHub"]', '"Google Play Store"', 'Android uses Google Play.', 'logic', 0, NULL, NULL),
('e10176cb-3b56-4550-b1d4-433a23efb420', 'mcq', 'Android app file format?', '["APK/AAB","IPA","EXE","DMG"]', '"APK/AAB"', 'Android uses APK or AAB.', 'logic', 1, NULL, NULL),
('e10176cb-3b56-4550-b1d4-433a23efb420', 'blank_space', 'Complete the Flutter build command:', NULL, '["flutter build"]', 'flutter build creates release builds.', 'logic', 2, '$ ___ apk --release', '["flutter build","flutter run","dart build","flutter deploy"]')
ON CONFLICT DO NOTHING;
