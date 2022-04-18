### reactjs

##### commands

  ```yarn create react-app appName``` - creating app with yarn

  ```cd appName/``` - after creation, go to app directory.

  ```yarn start``` - Starts the development server.

  ```yarn build``` - Bundles the app into static files for production.

  ```yarn test``` - Starts the test runner.

  ```yarn eject``` - Removes this tool and copies build dependencies.

  ```npx create-react-app my-app --template [template-name]``` - Create app from template

  ```npx create-react-app my-app --use-npm``` - to start app with npm instead of yarn

##### directory structure

```
appName
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

##### files

```public/index.html``` - is the page template

```src/index.js``` is the JavaScript entry point

``` package.json ``` - add here packages and setting for your react app

``` node_modules/ ``` - 

``` webpack.config.js ``` -

``` src/js/client.js ``` -

``` src/index.html ``` -

##### installing dependencies

  ```yarn add react-router-dom``` - installing dependecies

##### importing components

example of importing component for ```file.js``` 

```
import React, { Component } from 'react';

class Button extends Component {
    render(){
        // some code ...
    }
}
```

##### environment variable

define ```.env``` file (```NODE_ENV``` will be set automatically):

```
REACT_APP_NOT_SECRET_CODE=abcdef npm start
REACT_APP_VERSION=$npm_package_version
DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
REACT_APP_BAR=$DOMAIN/bar
```

can use several env files for other use: ```.env.local``` (local overrides), ```.env.production``` (environment specific)


##### backend integration

proxying API requests:

add to ```package.json``` the following field:
```
"proxy": "http://localhost:4000",
```

