# Building resume with ReactJS and Webpack

Create a new folder

    mkdir webpack_resume 
    cd webpack_resume

Create src folder 
    
    mkdir src    
    
Init the yarn
    
    yarn init
    
Init the Git

    git init

Add gitignore and add the following lines

    echo '.idea*' >> .gitignore
    echo 'node_modules' >> .gitignore

Add webpack-dev.config.js

Add the following libraries

    yarn add react react-dom webpack webpack-cli
    yarn install
    yarn add webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react  html-webpack-plugin html-loader
    yarn add react-bootstrap bootstrap css-loader scss-loader
    yarn install
    
    
Adding Ant design

    yarn add antd
    yarn add @babel/plugin-proposal-class-properties
    
