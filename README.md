## FULLSTACK PROJECT 

## expressjs, reactjs


## CORS error 
#### Client side solution
##### CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers that controls access to resources from one origin (domain) to another.

##### When a web application makes a request to a different domain (origin) than the one it's hosted on, the browser enforces CORS to ensure that the receiving server allows the request. If the server does not explicitly allow requests from the origin of the requesting site, the browser will block the request, and you'll see a CORS error.


##### add to vite.config.js
```javascript 
        server:{
            proxy:{
            '/api':'http://localhost:3000'
            }
        }
```