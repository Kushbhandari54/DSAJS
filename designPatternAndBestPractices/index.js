// Module Pattern
// ===========================================================================================

// Definition: The Module Pattern is used to create encapsulated,
// reusable code with private and public methods.
// Use case: Prevents global namespace pollution and allows better organization of code.

// const Module = (function () {
//     let privateVar = "I am private";

//     function privateMethod() {
//         console.log(privateVar);
//     }

//     return {
//         publicMethod: function () {
//             console.log("Accessing private method:");
//             privateMethod();
//         },
//     };
// })();

// Module.publicMethod(); // Accessing private method: I am private

// ==========================================================================================

// Singleton Pattern

// The Singleton Pattern ensures that a class has only one instance and provides a global access point to it.
// It is commonly used in cases like:

// Database connections
// Caching mechanisms
// Configuration management
