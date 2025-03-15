# Fetch Data from server using AJAX(Asynchronous JavaScript and XML) and the modern Fetch API.

1. XMLHttpRequest(old method -AJAX);

Before,fetch(), AJAX was done using XMLHttpRequest.

const xhr=new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1",true);

xhr.onload=function(){
if(xhr.status===200){
console.log("Response",JSON.parse(xhr.responseText));
}
else{
console.error("Request failed!")
}
}

xhr.onerror=function(){
console.error("Network error occured!");
}

xhr.send();

Drawbacks of XMLHttpRequest

Code is long and less readable.
No support for Promises (hard to handle async operations).

=====================================================================================================

2. Fetch API (Modern Approach).

fetch("http://jsonplaceholder.typicode.com/posts/1").then(response=>response.json()).then(
(data)=>{
console.log("fetched data",data);
}
).catch(error=>console.log("Error",error))

Why fetch()?
Uses Promises (easier to handle async operations).
More readable and shorter than XMLHttpRequest.

=====================================================================================================

3. Fetching Data with async/await.

async function fetchApi(){
try{
const response = await fetch("http://jsonplaceholder.typicode.com/posts/1");
const data= await JSON.parse(response);
console.log("Response",data);
}
catch(e){
console.log("Something went wrong!",e)
}
}

fetchApi();

=====================================================================================================

4. Sending Data (POST Request).

async function postData(){

try{
const newPost={
title:'New Post',
body:'This is new post',
userId:1,
};

const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
method:"POST",
headers: {
"Content-Type":"application/json",
},
body: JSON.stringify(newPost)
});

const data=await response.json();
console.log("Post created",data);

}
catch(e){
console.log("Error",e);
}

}

createPost();

=====================================================================================================

5. Handling Errors in Fetch

If the server returns an error, fetch() does not automatically reject the promise.
We must manually check the response status.

async function fetchWithErrorHandling() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }

}

fetchWithErrorHandling();
