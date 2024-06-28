# Why Node JS
- Server side rendring
- Allow to run js out side the browser
- Enabling server-side scripting and building scalable network applications.
- Event-Driven Architecture: Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and suitable for real-time applications that handle a large number of simultaneous connections with high throughput.
- Single-Threaded: Node.js operates on a single-threaded event loop, which can handle multiple connections simultaneously. This approach is different from traditional multi-threaded servers, where each connection spawns a new thread.
- npm (Node Package Manager): Node.js comes with npm, the default package manager for managing libraries and dependencies. It has a vast ecosystem of packages and modules that can be easily installed and used in Node.js applications.
- Cross-Platform: Node.js can run on various operating systems, including Windows, macOS, and Linux, making it versatile for different development environments.
- JavaScript Everywhere: With Node.js, developers can use JavaScript for both frontend and backend development, enabling a more unified and consistent development experience across the stack.
- Microservices and APIs: Node.js is commonly used for building microservices and RESTful APIs due to its lightweight nature and the ability to handle asynchronous operations efficiently.

# What is ExpressJs
- it's frame work of node js
- make bulding Api very eassyaer
- middleware feature
- middleware passing data from top to bottom

# body parser
- Handle Incomung request
- Any type of data  comming from req.body converted to javaScript data like Object and Array
- app.use(bodyPares.json())

# Controller
- controllers will be files that hold the actual logic that should execute when a certain route is reached

# UUID
- npm pakage install for unique id
# Q- Diffrance between patch and put
> Patch
- PATCH when you want to make partial updates to a resource.
- PATCH: Used when you have only the changes or a partial update to apply to the resource.

> Put
- PUT: Used when you have the complete new state of the resource and you want to update it entirely.
- PUT when you want to replace a resource entirely