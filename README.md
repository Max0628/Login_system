# Login_system

Project structure:
There are two pages,register new user, and login page
Use mysql ,prisma as database & ORM
Use JWT tools to set token generate by server to put it in client browser's cookie
Use Bcrypt tools to hash the password that stored in database
Use swagger as an API-Docs

clone the project to your local

```
git clone https://github.com/Max0628/Login_system.git
```

install package

```
npm install
```

link to your database on local

```
edit your .env to link your local database
```

generate prisma client

```
npx prisma generate
```

start server

```
cd Login_system/server/
npm start
```

check the API-docs

```
http://localhost:8080/api-docs/
```

# How to use this project?

go to register page,add a new account.

```
http://localhost:8080/page/register.html

```

go to login page,after login, check your dev tool that if cookie contain jwt.

```
http://localhost:8080/page/login.html
```
