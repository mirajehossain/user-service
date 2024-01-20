# User Service

The User API service provides CRUD (Create, Read, Update, Delete) operations for managing user data. It exposes a set of RESTful APIs to interact with user-related information.

## APIs

### 1. Create User

- **Endpoint:** `POST http://localhost:3000/api/v1.0.0/users`
- **Payload:**
  ```json
  {
    "name": "Miraje",
    "email": "miraajehossain@gmail.com"
  }

### 2. Get Users
- **Endpoint:** `GET http://localhost:3000/api/v1.0.0/users`
- **Query Parameters:** page (optional): Page number for pagination.



### 3. Update User

- **Endpoint:** `PATCH http://localhost:3000/api/v1.0.0/users/{userId}`
- **Payload:**
  ```json
  {
    "name": "Miraje Hossain"
  }


### 4. Delete User
- **Endpoint:** `GET http://localhost:3000/api/v1.0.0/users/{userId}`


## Running the Project
```bash
    cd modules/user #navigate to user module
    cp example.env .env # copy env
    docker compose up --build -d # run docker compose for build and start the service
```

# User Worker
The User Worker is responsible for handling background tasks related to user data. To run the User Worker, follow these steps:

```bash
cd modules/worker
cp example.env .env # copy env
docker build --no-cache -t user-worker:latest .
docker run user-worker:latest
```