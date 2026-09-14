const questionsData = [
  {
    "id": 1,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Easy Placement",
    "question": "Which of the following is responsible for translating HTML and CSS into a visual representation on the screen?",
    "options": {
      "A": "JavaScript Engine",
      "B": "Browser User Interface",
      "C": "Rendering Engine",
      "D": "Data Persistence Layer"
    },
    "correctAnswer": "C",
    "explanation": "The Rendering Engine (like Blink or WebKit) parses HTML and CSS, constructs the DOM and CSSOM trees, and paints the pixels to the screen.",
    "realWorldApplication": "When developing UI, understanding how the rendering engine calculates layout prevents performance bottlenecks like layout thrashing."
  },
  {
    "id": 2,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Moderate Placement",
    "question": "What is the primary role of the 'DNS resolution' phase when a user types a URL into the browser?",
    "options": {
      "A": "To encrypt the connection between the client and the server.",
      "B": "To translate a human-readable domain name into an IP address.",
      "C": "To establish a TCP handshake with the destination server.",
      "D": "To verify the SSL certificate of the website."
    },
    "correctAnswer": "B",
    "explanation": "Domain Name System (DNS) resolution is the process of querying DNS servers to convert a domain (e.g., example.com) into a routable IP address (e.g., 192.0.2.1).",
    "realWorldApplication": "Configuring A and CNAME records in a domain registrar when deploying a new web application."
  },
  {
    "id": 3,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Easy Placement",
    "question": "Which HTTP status code indicates that a requested resource was not found on the server?",
    "options": {
      "A": "200 OK",
      "B": "301 Moved Permanently",
      "C": "403 Forbidden",
      "D": "404 Not Found"
    },
    "correctAnswer": "D",
    "explanation": "404 Not Found means the server could not find the requested URL. 403 means the user lacks permissions, and 200 means success.",
    "realWorldApplication": "Designing a custom '404 Error' page in React or Next.js to gracefully handle broken links."
  },
  {
    "id": 4,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Moderate Placement",
    "question": "What is the difference between LocalStorage and SessionStorage in modern web browsers?",
    "options": {
      "A": "LocalStorage is cleared when the browser tab is closed, while SessionStorage persists indefinitely.",
      "B": "SessionStorage is cleared when the page session ends (tab is closed), while LocalStorage persists until explicitly deleted.",
      "C": "LocalStorage can store up to 50MB, whereas SessionStorage is limited to 5MB.",
      "D": "SessionStorage is encrypted automatically, while LocalStorage stores plain text."
    },
    "correctAnswer": "B",
    "explanation": "SessionStorage is tied to a single tab/window session and is deleted upon closure. LocalStorage data has no expiration time and persists across browser restarts.",
    "realWorldApplication": "Storing a user's dark-mode preference in LocalStorage, but storing a multi-step form's temporary data in SessionStorage."
  },
  {
    "id": 5,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Moderate-Hard Placement",
    "question": "What is the 'Same-Origin Policy' (SOP) in browser security?",
    "options": {
      "A": "A policy that prevents a website from storing more than 5MB of cookies from the same domain.",
      "B": "A mechanism that forces all HTTP requests to be upgraded to HTTPS if they originate from a secure site.",
      "C": "A critical security model that restricts how a document or script loaded from one origin can interact with a resource from another origin.",
      "D": "A rule that requires all images and scripts on a page to be hosted on the same server as the HTML file."
    },
    "correctAnswer": "C",
    "explanation": "SOP prevents malicious scripts on one webpage from accessing sensitive data on another webpage (different domain, protocol, or port) without explicit permission.",
    "realWorldApplication": "Preventing an attacker's website from reading authenticated banking data in another tab."
  },
  {
    "id": 6,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Hard Placement",
    "question": "Which of the following best describes the 'Render Tree' in a browser?",
    "options": {
      "A": "It is a combination of the DOM tree and the CSSOM tree, containing only the nodes required to render the page.",
      "B": "It is the tree structure representing the raw HTML before CSS is applied.",
      "C": "It is a purely JavaScript-based virtual DOM used by modern frameworks like React.",
      "D": "It represents the network requests dependency tree."
    },
    "correctAnswer": "A",
    "explanation": "The browser merges the DOM (Document Object Model) and CSSOM (CSS Object Model) to form the Render Tree, ignoring non-visual nodes like <head> or elements with 'display: none'.",
    "realWorldApplication": "Optimizing CSS delivery to prevent render-blocking, ensuring the Render Tree builds as fast as possible."
  },
  {
    "id": 7,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Moderate Placement",
    "question": "What does a 'Service Worker' allow a web application to do?",
    "options": {
      "A": "Execute PHP code directly inside the browser.",
      "B": "Bypass the Same-Origin Policy for cross-domain requests.",
      "C": "Run scripts in the background, enabling features like offline caching, background sync, and push notifications.",
      "D": "Render complex 3D graphics using the GPU."
    },
    "correctAnswer": "C",
    "explanation": "Service workers act as network proxies running in the background, separate from the main browser thread. They intercept network requests and manage caching to enable offline capabilities.",
    "realWorldApplication": "Building a Progressive Web App (PWA) that loads instantly from cache even when the user has no internet connection."
  },
  {
    "id": 8,
    "topic": "Browser Fundamentals",
    "category": "theoretical_conceptual",
    "difficulty": "Easy Placement",
    "question": "Which HTTP method is universally used to submit data to the server (e.g., submitting a login form) and can result in changes to the server state?",
    "options": {
      "A": "GET",
      "B": "POST",
      "C": "HEAD",
      "D": "OPTIONS"
    },
    "correctAnswer": "B",
    "explanation": "POST is used to send data to the server to create or update a resource, and its data is enclosed in the request body, not the URL.",
    "realWorldApplication": "Handling a user registration form submission in a Node.js backend using Express."
  },
  {
    "id": 9,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Moderate Placement",
    "question": "You want to improve page load speed by loading an image only when the user scrolls near it. Which HTML attribute accomplishes this natively?",
    "options": {
      "A": "defer=\"true\"",
      "B": "async=\"true\"",
      "C": "loading=\"lazy\"",
      "D": "preload=\"auto\""
    },
    "correctAnswer": "C",
    "explanation": "The 'loading=\"lazy\"' attribute tells the browser to defer loading the image until it intersects with or is near the viewport.",
    "realWorldApplication": "Adding lazy loading to an e-commerce product grid to save bandwidth and improve First Contentful Paint (FCP)."
  },
  {
    "id": 10,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Moderate-Hard Placement",
    "question": "A frontend application tries to fetch data from an API hosted on a different domain, but the browser throws a 'CORS error'. How should this be resolved?",
    "options": {
      "A": "The frontend developer must change the fetch method to POST.",
      "B": "The backend server must respond with the appropriate 'Access-Control-Allow-Origin' header.",
      "C": "The user must disable their firewall.",
      "D": "The frontend must use LocalStorage to cache the request."
    },
    "correctAnswer": "B",
    "explanation": "Cross-Origin Resource Sharing (CORS) is a security feature enforced by the browser. The server must explicitly permit the cross-origin request by sending specific CORS headers.",
    "realWorldApplication": "Configuring a Spring Boot or Node.js API to accept requests from a frontend React app hosted on a different subdomain."
  },
  {
    "id": 11,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Hard Placement",
    "question": "What is the primary difference between a <script async> and <script defer> tag in HTML?",
    "options": {
      "A": "Both download asynchronously, but 'async' scripts execute immediately once downloaded, while 'defer' scripts wait until the HTML parser finishes.",
      "B": "Both download asynchronously, but 'defer' executes immediately, while 'async' waits for the DOMContentLoaded event.",
      "C": "'async' blocks HTML parsing while downloading, whereas 'defer' does not.",
      "D": "There is no difference; they are aliases for the same browser behavior."
    },
    "correctAnswer": "A",
    "explanation": "An 'async' script executes as soon as it downloads (potentially interrupting parsing and not guaranteeing execution order). A 'defer' script waits until the HTML is fully parsed, executing in document order.",
    "realWorldApplication": "Using 'defer' for scripts relying on DOM elements, and 'async' for independent scripts like Google Analytics."
  },
  {
    "id": 12,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Moderate Placement",
    "question": "Which browser developer tool tab is specifically designed to let you view and edit DOM elements and CSS styles in real-time?",
    "options": {
      "A": "Console",
      "B": "Network",
      "C": "Elements (or Inspector)",
      "D": "Application"
    },
    "correctAnswer": "C",
    "explanation": "The Elements/Inspector tab provides a live view of the DOM tree and CSSOM, allowing developers to tweak styles and see instant visual changes without reloading.",
    "realWorldApplication": "Adjusting CSS padding values visually in DevTools to achieve pixel-perfect alignment before committing the code."
  },
  {
    "id": 13,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Moderate-Hard Placement",
    "question": "How do browsers handle a '301 Moved Permanently' response?",
    "options": {
      "A": "The browser displays a warning to the user before redirecting.",
      "B": "The browser automatically requests the new URL provided in the Location header and caches the redirection so future requests bypass the old URL.",
      "C": "The browser stops the request and prompts the user to manually enter the new URL.",
      "D": "The browser fetches the old URL again using a POST request."
    },
    "correctAnswer": "B",
    "explanation": "A 301 is a permanent redirect. Browsers heavily cache this, immediately navigating to the new 'Location' header and often bypassing the original URL on subsequent visits.",
    "realWorldApplication": "Migrating a website from HTTP to HTTPS, or changing domain names without losing SEO rankings."
  },
  {
    "id": 14,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Moderate Placement",
    "question": "To secure sensitive cookies (like session tokens) from being accessed by malicious JavaScript (XSS), which cookie attribute must a backend developer set?",
    "options": {
      "A": "Secure",
      "B": "HttpOnly",
      "C": "SameSite=Strict",
      "D": "Max-Age"
    },
    "correctAnswer": "B",
    "explanation": "The 'HttpOnly' flag instructs the browser that the cookie must not be accessible via client-side scripts (e.g., document.cookie), mitigating XSS cookie theft.",
    "realWorldApplication": "Setting JWT access tokens as HttpOnly cookies during a user login process."
  },
  {
    "id": 15,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Hard Placement",
    "question": "What is the purpose of the 'Content Security Policy' (CSP) header?",
    "options": {
      "A": "To encrypt the HTML content being transmitted.",
      "B": "To declare approved sources of content (scripts, images) that the browser may load, significantly mitigating XSS attacks.",
      "C": "To prevent the user from copying text from the website.",
      "D": "To force the browser to cache all static assets."
    },
    "correctAnswer": "B",
    "explanation": "CSP is an added layer of security that helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS), by explicitly restricting where resources can be loaded from.",
    "realWorldApplication": "Configuring a web server to block inline scripts and only allow JavaScript execution from the application's trusted domain."
  },
  {
    "id": 16,
    "topic": "Browser Fundamentals",
    "category": "technical_application",
    "difficulty": "Moderate Placement",
    "question": "In the Browser rendering pipeline, what process occurs immediately after the Render Tree is constructed?",
    "options": {
      "A": "Parsing HTML",
      "B": "Painting",
      "C": "Layout (Reflow)",
      "D": "Compositing"
    },
    "correctAnswer": "C",
    "explanation": "After the Render Tree is built, the browser performs Layout (also known as Reflow) to calculate the exact geometry (position and size) of each node on the screen.",
    "realWorldApplication": "Avoiding animating 'width' or 'margin' in CSS because they trigger expensive layout calculations. Animating 'transform' is preferred."
  },
  {
    "id": 17,
    "topic": "Browser Fundamentals",
    "category": "scenario_based",
    "difficulty": "Moderate Placement",
    "question": "A user complains that a website still shows an old banner image even though you updated it on the server an hour ago. Other users see the new image. What is the most likely cause?",
    "options": {
      "A": "The user's DNS server is broken.",
      "B": "The browser has cached the old image locally.",
      "C": "The user's IP address is blocked.",
      "D": "The server's SSL certificate expired."
    },
    "correctAnswer": "B",
    "explanation": "Browsers cache static assets to improve load times. If cache headers are not configured properly, the browser may reuse the local old image instead of fetching the new one.",
    "realWorldApplication": "Using 'cache busting' techniques like appending a file hash (e.g., banner.v2.jpg) to force browsers to download new assets."
  },
  {
    "id": 18,
    "topic": "Browser Fundamentals",
    "category": "scenario_based",
    "difficulty": "Moderate-Hard Placement",
    "question": "You open the Network tab in Chrome DevTools and see that an API request failed with a status code of '401 Unauthorized'. What should you check first?",
    "options": {
      "A": "Whether the server is down or crashed.",
      "B": "Whether the DNS resolution failed.",
      "C": "Whether the required authentication token or session cookie is being sent in the request headers.",
      "D": "Whether the frontend is violating CORS."
    },
    "correctAnswer": "C",
    "explanation": "A 401 error explicitly means the client must authenticate itself to get the requested response. Checking the request headers for an Authorization token is the correct first step.",
    "realWorldApplication": "Debugging a scenario where a user's session expired but the frontend didn't redirect them to the login page."
  },
  {
    "id": 19,
    "topic": "Browser Fundamentals",
    "category": "scenario_based",
    "difficulty": "Hard Placement",
    "question": "A developer writes a heavy synchronous loop in JavaScript (e.g., iterating 10 billion times). What happens to the browser tab?",
    "options": {
      "A": "The browser automatically moves the loop to a background thread.",
      "B": "The main thread blocks, causing the page UI to freeze and become unresponsive until the loop finishes.",
      "C": "The browser throws a 'Timeout' exception and stops the code.",
      "D": "The CSS animations continue smoothly, but button clicks fail."
    },
    "correctAnswer": "B",
    "explanation": "JavaScript runs on the browser's single main thread, which is shared with UI rendering. A long synchronous task blocks the event loop, freezing the entire tab.",
    "realWorldApplication": "Offloading heavy data processing to Web Workers so the UI remains smooth and responsive."
  },
  {
    "id": 20,
    "topic": "Browser Fundamentals",
    "category": "scenario_based",
    "difficulty": "Moderate Placement",
    "question": "A webpage contains a form. The developer attached an event listener to the submit button using 'event.preventDefault()'. What will happen when the user clicks submit?",
    "options": {
      "A": "The form will be submitted using an HTTP GET instead of POST.",
      "B": "The browser will block the button from being clicked.",
      "C": "The default browser behavior of submitting the form (and refreshing the page) is stopped.",
      "D": "The browser will clear all form fields automatically."
    },
    "correctAnswer": "C",
    "explanation": "preventDefault() intercepts and cancels the browser's native default action for an event, which is essential for building Single Page Applications (SPAs) that handle submission via AJAX.",
    "realWorldApplication": "Handling a login form in React where you want to fetch data via an API without reloading the webpage."
  },
  {
    "id": 21,
    "topic": "Browser Fundamentals",
    "category": "scenario_based",
    "difficulty": "Moderate-Hard Placement",
    "question": "You load an HTTPS website, but the browser displays a 'Not Secure' warning and a broken padlock. Inspecting the console shows 'Mixed Content' errors. What happened?",
    "options": {
      "A": "The server's SSL certificate has expired.",
      "B": "The secure HTTPS page is trying to load resources (like images or scripts) over an insecure HTTP connection.",
      "C": "The user is connected to a public Wi-Fi network.",
      "D": "The website uses outdated HTML tags."
    },
    "correctAnswer": "B",
    "explanation": "Mixed Content occurs when initial HTML is loaded over a secure HTTPS connection, but other resources are loaded over insecure HTTP, compromising the security of the whole page.",
    "realWorldApplication": "Fixing image URLs in a database from 'http://' to 'https://' after migrating a site to use SSL."
  },
  {
    "id": 22,
    "topic": "Browser Fundamentals",
    "category": "scenario_based",
    "difficulty": "Easy Placement",
    "question": "A user complains that a website looks tiny and unreadable on their mobile phone, though it works perfectly on desktop. What is the developer most likely missing?",
    "options": {
      "A": "The 'async' attribute on their CSS link.",
      "B": "A proper <meta name=\"viewport\"> tag in the HTML head.",
      "C": "HTTPS encryption.",
      "D": "Service workers for offline support."
    },
    "correctAnswer": "B",
    "explanation": "The viewport meta tag instructs mobile browsers on how to control the page's dimensions and scaling. Without it, mobile browsers render the page at desktop width and scale it down.",
    "realWorldApplication": "Adding `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` to ensure CSS media queries trigger correctly on smartphones."
  },
  {
    "id": 23,
    "topic": "Browser Fundamentals",
    "category": "problem_solving",
    "difficulty": "Moderate Placement",
    "question": "You type `console.log(window.localStorage)` in the browser console. Which of the following data types can LocalStorage natively store?",
    "options": {
      "A": "Only Strings",
      "B": "Strings, Objects, and Arrays",
      "C": "Only Numbers and Booleans",
      "D": "Any JavaScript object including Functions"
    },
    "correctAnswer": "A",
    "explanation": "Web Storage APIs (LocalStorage and SessionStorage) only support string keys and string values. Objects must be serialized via JSON.stringify() before storing.",
    "realWorldApplication": "Using `JSON.parse(localStorage.getItem('user'))` to convert a stored string back into a usable JavaScript object."
  },
  {
    "id": 24,
    "topic": "Browser Fundamentals",
    "category": "problem_solving",
    "difficulty": "Hard Placement",
    "question": "A preflight request (OPTIONS) is automatically sent by the browser before the actual API request. Why does the browser do this?",
    "options": {
      "A": "To check if the user is authenticated.",
      "B": "To compress the request body.",
      "C": "To check if the server understands the CORS protocol and permits the specific cross-origin method/headers.",
      "D": "To perform DNS resolution faster."
    },
    "correctAnswer": "C",
    "explanation": "For non-simple cross-origin requests (e.g., using custom headers or PUT/DELETE methods), the browser sends an OPTIONS 'preflight' to ensure the server is willing to accept the actual request.",
    "realWorldApplication": "Configuring backend middleware to respond with 200 OK to OPTIONS requests so that the frontend's main PUT request isn't blocked."
  },
  {
    "id": 25,
    "topic": "Browser Fundamentals",
    "category": "problem_solving",
    "difficulty": "Moderate-Hard Placement",
    "question": "If a developer uses `document.getElementById('btn').click()` in the console, but nothing happens, which of the following is the LEAST likely reason?",
    "options": {
      "A": "The element with ID 'btn' does not exist in the DOM.",
      "B": "There is no event listener attached to the 'click' event of that element.",
      "C": "The button is disabled via the 'disabled' HTML attribute.",
      "D": "The browser prevents console scripts from triggering clicks."
    },
    "correctAnswer": "D",
    "explanation": "Browsers allow developers to trigger clicks programmatically via the console. The failure is likely due to a missing ID, a missing listener, or a disabled state.",
    "realWorldApplication": "Automating end-to-end tests using tools like Selenium or Cypress, which heavily rely on triggering synthetic DOM events."
  },
  {
    "id": 26,
    "topic": "Browser Fundamentals",
    "category": "problem_solving",
    "difficulty": "Hard Placement",
    "question": "A page has a CSS file linked in the <head>. The server responds with the CSS file but sets the 'Content-Type' header to 'text/html'. How will modern browsers react?",
    "options": {
      "A": "The browser will parse the CSS perfectly because it relies on the .css file extension.",
      "B": "The browser will refuse to apply the CSS due to strict MIME-type checking.",
      "C": "The browser will apply the CSS but show a warning in the console.",
      "D": "The browser will download the file and execute it as JavaScript."
    },
    "correctAnswer": "B",
    "explanation": "Modern browsers enforce strict MIME sniffing (especially when 'X-Content-Type-Options: nosniff' is set). If a stylesheet is served as 'text/html', it is rejected.",
    "realWorldApplication": "Configuring correct MIME types in an Nginx or AWS S3 server so static assets are rendered correctly."
  },
  {
    "id": 27,
    "topic": "Browser Fundamentals",
    "category": "problem_solving",
    "difficulty": "Moderate Placement",
    "question": "In the Chrome DevTools Network tab, what does a 'Status: 304 Not Modified' mean?",
    "options": {
      "A": "The request failed due to a server error.",
      "B": "The browser's cached version of the file is still valid, so the server did not send the file contents again.",
      "C": "The user lacks permissions to view the file.",
      "D": "The requested API endpoint has been permanently moved."
    },
    "correctAnswer": "B",
    "explanation": "A 304 response means the client's cached copy (checked via ETag or Last-Modified headers) is up-to-date, saving bandwidth by avoiding a full re-download.",
    "realWorldApplication": "Optimizing server response times and reducing bandwidth costs by correctly utilizing cache validation headers."
  },
  {
    "id": 28,
    "topic": "Browser Fundamentals",
    "category": "tricky_exam_questions",
    "difficulty": "Hard Placement",
    "question": "A user opens an 'Incognito' or 'Private Browsing' window. Which of the following statements is actually TRUE?",
    "options": {
      "A": "The user's Internet Service Provider (ISP) cannot see the websites they visit.",
      "B": "The browser does not save history, cookies, or form data to the local device after the window is closed.",
      "C": "The user's IP address is hidden from the websites they visit.",
      "D": "Files downloaded during the session are automatically deleted when the window closes."
    },
    "correctAnswer": "B",
    "explanation": "Incognito mode ONLY prevents local retention of browsing data (history, cookies). It does NOT provide anonymity, hide IP addresses, bypass ISP monitoring, or delete downloaded files.",
    "realWorldApplication": "Understanding privacy boundaries when testing authenticated web sessions on shared developer machines."
  },
  {
    "id": 29,
    "topic": "Browser Fundamentals",
    "category": "tricky_exam_questions",
    "difficulty": "Moderate-Hard Placement",
    "question": "A website sets a cookie with the domain '.example.com'. Which of the following is true regarding where the browser will send this cookie?",
    "options": {
      "A": "It will only be sent to exactly 'example.com'.",
      "B": "It will be sent to 'example.com' and all of its subdomains (like 'api.example.com').",
      "C": "It will only be sent to subdomains, but not the root 'example.com'.",
      "D": "The browser will reject the cookie because domain names cannot start with a dot."
    },
    "correctAnswer": "B",
    "explanation": "Setting a cookie domain with a leading dot (e.g., .example.com) allows the cookie to be shared across the root domain and all its subdomains. Modern browsers also default to this behavior for 'example.com'.",
    "realWorldApplication": "Implementing Single Sign-On (SSO) authentication across 'app.company.com' and 'dashboard.company.com'."
  },
  {
    "id": 30,
    "topic": "Browser Fundamentals",
    "category": "tricky_exam_questions",
    "difficulty": "Hard Placement",
    "question": "You use `window.location.replace('https://new-url.com')` in JavaScript instead of `window.location.href = 'https://new-url.com'`. What is the crucial difference?",
    "options": {
      "A": "replace() bypasses the browser cache.",
      "B": "replace() does not add the original page to the browser's session history, so the user cannot click the 'Back' button to return to it.",
      "C": "replace() forces the new URL to open in a new tab.",
      "D": "There is absolutely no difference; they are synonymous."
    },
    "correctAnswer": "B",
    "explanation": "Assigning to href creates a new entry in the browser's history stack. replace() overwrites the current history entry, preventing 'Back button' loops.",
    "realWorldApplication": "Redirecting users away from a one-time payment processing page so they don't accidentally navigate back and resubmit the payment."
  }
];
