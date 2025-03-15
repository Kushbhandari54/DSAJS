1. Local Storage

Store data with no expiration.

// storing data
localStorage.setItem("userName","kush");

// retrieving data
localStorage.getItem("userName");

// removing data
localStorage.removeItem("userName");

// clearing all stored data
localStorage.clear();

Use Case: Remembering user preferences (e.g., theme, login state).

2. Session Storage

Data persist only while the tab is open.

sessionStorage.setItem("sessionId","234");
sessionStorage.getItem("sessionId");
sessionStorage.removeItem("sessionId");
sessionStorage.clear();

3. Cookies
   Store small data with expiration time
   // Setting a cookie
   document.cookie="";
   // Reading cookie
   document.cookie

// deleting a cookie
document.cookie="";

Use Case: Authentication, tracking users across pages.
