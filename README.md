# rest-api
REST API, documentation with markdown, securing API with JWT

### List of user routes:  

| Route          | HTTP    | Description                                 |
|----------------|---------|---------------------------------------------|
| /api/signup    | POST    | sign up new users                           | 
| /api/signin    | POST    | sign in existing user                       |
| /api/users     | GET     | get all users (admin only)                  |
| /api/users:/id | GET     | get specific User (admin and auth user)     |
| /api/users     | POST    | add user (admin only)                       |
| /api/users/:id | DELETE  | delete user specific id (admin only)        |
| /api/users/:id | PUT     | edit user specific id (admin and auth user) |

### How to use this API
1. install dependencies
```sh
npm install
```
2. create database
3. edit config.json
4. edit env-temp file to your configuration
5. start
```sh
npm start
```
6. :rocket: