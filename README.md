# lab-07
## Description
You know a lot of information from previous labs, so now you can shine and show yourself. 
You can use some data from [free API](https://github.com/public-apis/public-apis) - and use it to fill your DB.

The goal of this lab is to try-out things you will need for your project. Try to progress as much as possible so you have time to ask your teacher in case something doesn't work for you.

## Tasks
1. Create `npm project` using `npm init` in the folder `lab-07-xx`. More info [here](https://docs.npmjs.com/cli/v7/commands/npm-init).
1. Add `express`, `sequelize`, and other packages what you need. More info in presenation [5 Express](https://docs.google.com/presentation/d/1RZJXLhgdzBajMYx7RHfO8k6gByorKBxMe8V7G97OmG0/edit#slide=id.gf4b3f6586d_0_182) and [6 ORM](https://docs.google.com/presentation/d/1QOj9iJxpC3wRnAQWFBvzUzQFgI15Zv_cOcB5LKL2SLo/edit#slide=id.gf5b189d86d_0_108)
    -  `npm install express --save`
    -  `npm install sequelize --save` and `npm install --save sqlite3`
3. Create [migration](https://sequelize.org/master/manual/migrations.html) for database
    - Follow the guide ^^
    - After you init your project. Change the `config.json` to used sqlite with this config:
        ```
        {
          "development": {
            "dialect": "sqlite",
            "storage": "./db.sqlite"
          },
          "test": {
            "dialect": "sqlite",
            "storage": "./db.test.sqlite"
          },
          "production": {
            "dialect": "sqlite",
            "storage": "./db.sqlite"
          }
        }
        ```
    - Follow the guide with creating a first migration and run it as per tutorial
    - If you want, you can see your database using several DB management tools. VSC has plugins, WebStorm has plugins or you can use for example [this](https://sqlitebrowser.org/).    
5. ORM scheme (2 models connected via [association](https://sequelize.org/master/class/lib/associations/base.js~Association.html))
6. Create 4 endpoints
    1. get all information via one request (from both tables) 
    1. get information about one specific item from table
    1. post new item into table
    1. delete item from table
7. **Bonus:** Create tests for endpoints with packages `jest`, `supertest`

## Some tips
1. Migration should create DB from nothing. Learn how to do it.
1. Do tasks steps by step. Focus on one thing.
1. Use `documentation`, `google`, `stackoverflow`
1. Comment your code!
1. Format your code! Don't be a messy programmer.
