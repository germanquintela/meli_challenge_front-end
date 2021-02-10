# 👉 Mercado libre Challenge

### 📂 Technology and Folder Structure


#### 🐕 APP
This project is written using [Nextjs](https://nextjs.org/), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Style Components](https://styled-components.com/)

######Folder structure:

* /pages: The pages for the project. Use one per url to keep the code tidy.
* /components: The components. You should organize them by logical groups and the folder structure just one level deep.
	* /Product: Components referred to product details and product cards.
	* /Skeletons: Loading components.
	* /Shared: Generic components used throughout the application.
	* /* : Other components without a group.
* /public: All public files, like favicon.ico, fonts or static images.
* /contexts: For React Context files. Contex API.
* /services: Files for api calls.
* /types: Global types for the project.
* /utils: Simple and generci functions like string formating.
* /hooks: Hooks used among the app like fething data. Keep the hooks generic as posible.
* /constants: Style theme consumed everywhere in the app.

###### 🛒 API
This project is written using [Node](https://nodejs.org/en/), [Express](https://expressjs.com/), [Typescript](https://www.typescriptlang.org/)

######Folder structure:

* /config: Express config file
* /controllers: Service manager files. 
* /routes: Routes handlers.
* /contexts: For React Context files. Contex API.
* /types: Global types for the project.
* /utils: Simple and generci functions like string formating.
* /helpers: Map functions and other api response data formating. 


----
----

### 🏁 Getting Started

### 👉 Env config

##### 🐕 APP
- Create a .env file in /app
- Set the api url like this example:
```
API_URL=http://localhost:5000
```
*Example above is for development propuses*

---

##### 🛒 API
- Create a .env file in /api
- Set the api url like this example:
```
SERVER_HOSTNAME=localhost
SERVER_PORT=5000
API_URL=https://api.mercadolibre.com
AUTHOR_NAME=German
AUTHOR_LASTNAME=Quintela
```
*Example above is for development propuses*

### 👉 Instaling project
Make sure you are in the root of the project before running it, with the following command:

##### 🐕 APP
```
yarn
```

##### 🛒 API
```
yarn
```

### 👉 Initialize project
Make sure you are in the root of the project before running it, with the following command:

##### 🐕 APP
```
yarn dev
```

##### 🛒 API
```
yarn start
```


> In package.json file you can seach for more scripts like linter commands
----
----

[Crafted with 🖤 by German Quintela](https://www.linkedin.com/in/germanquintela/)
