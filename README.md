# rest-api
REST API, documentation with markdown, securing API with JWT

## CRUD REST API
Using implementation API

## REST API
List of user routes:  

| Route          | HTTP    | Description                              |
|----------------|---------|------------------------------------------|
| /api/signup    | POST    | sign up new users                        | 
| /api/signin    | POST    | sign in existing user                    |
| /api/users     | GET     | get all users (admin only)               |
| /api/users:/id | GET     | get specific User (admin and auth user)  |
| /api/users     | POST    | add user (admin only)                    |
| /api/users/:id | DELETE  | delete user specific id (admin only)     |
| /api/users/:id | PUT     | edit user specific id                    |

