I - Setup
  1. npm i express.    
    - A web framework for node

  2. npm i mongoose      
    - A Object Document Mapper - ODM for MongoDB

  3. npm i cors      
    - CORS is a node.js package for providing a Connect/Express middleware

  4. npm i dotenv         
    - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

  5. npm i morgan         
    - HTTP request logger middleware for node.js

  6. npm i -D typescript       
    - TypeScript is JavaScript with syntax for types

  7. npm i -D ts-node-dev       
    - It restarts target node process when any of required files changes

  8. Create a "tsconfig.json" file and copy:     
  
    {
      "compilerOptions": {
        "module": "commonjs",
        "esModuleInterop": true,
        "target": "es6",
        "moduleResolution": "node",
        "sourceMap": true,
        "outDir": "dist",
        "rootDir": "src"
      },
      "lib": ["es2015"]
    }

  9. Updating the package.json File
