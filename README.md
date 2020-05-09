# Project Evaluate a news article with Natural Language Processing

Build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

### The goal of this project is to  practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls


## Setup

`cd` into project and run:
- `npm install`
- we need an API key & APP id, go To [here](https://developer.aylien.com/signup) Signing up will get you an API key and APP id
- Fill the `.env` file with your API keys like this:
```
  API_ID=**************************
  API_KEY=**************************

```


## Run Project
* Dev mode
  * ``` npm run build-dev ``` start webpack dev server at port 8081
  * ``` npm run start ```  start a server at port 8080 , to use our api

* Prod mode
  * ``` npm run build-prod ```  to generates the dist files 
  * ``` npm run start ```  start a server at port 8080

## Offline Functionality
The project have service workers set up in webpack.

