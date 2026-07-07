# 🛒 Full-Stack E-Commerce Backend

A scalable RESTful backend API for an e-commerce application built with **Node.js**, **Express**, **TypeScript**, **PostgreSQL**, and **Drizzle ORM**.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| TypeScript | Type-safe JavaScript |
| Node.js | Runtime environment |
| Express.js | Web framework |
| PostgreSQL | Relational database |
| Drizzle ORM | Database ORM |
| Zod | Data validation |
| drizzle-zod | Generate Zod schemas from Drizzle models |
| zod-express-middleware | Request validation middleware |

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (LTS version)
- npm
- NVM (recommended for managing Node.js versions)
- PostgreSQL
- A Genezio account for deployment

**Useful Links**

- Node.js: https://nodejs.org
- NVM: https://github.com/nvm-sh/nvm
- PostgreSQL: https://www.postgresql.org
- Genezio: https://genezio.com/

---

## 📁 Project Setup

### 1. Create the project

```bash
mkdir fullstack-ecomm
cd fullstack-ecomm
mkdir api
cd api
```

### 2. Initialize the project

```bash
npm init -y
```

### 3. Open the project

Open the project in your preferred code editor (VS Code recommended).

---

## ⚙️ Express & TypeScript Setup

- Install Express
- Install TypeScript
- Configure `tsconfig.json`
- Create the first Express server
- Build a "Hello World" endpoint
- Configure scripts
- Add JSON and URL-encoded middleware

---

## 🌿 Git Setup

Initialize Git for version control.

```bash
git init
```

Create your GitHub repository and connect it to your local project.

---

## 🛣️ API Routes

Organize your application by creating:

- Routes
- Controllers
- Services (optional)
- Middlewares

Example:

```
src/
├── controllers/
├── routes/
├── middlewares/
├── models/
└── server.ts
```

---

## 🗄️ Database

### PostgreSQL

- Create a PostgreSQL database
- Configure environment variables
- Connect using Drizzle ORM

### Drizzle ORM

- Install Drizzle ORM
- Create database schema
- Generate migrations
- Run migrations

---

## 📦 Products Module

Implement full CRUD operations.

### Create

- Create a product

### Read

- Get all products
- Get a single product

### Update

- Update product information

### Delete

- Delete a product

---

## ✅ Data Validation

Validate incoming requests using:

- Zod
- drizzle-zod
- zod-express-middleware

Project files:

```
src/middlewares/validationMiddleware.ts
src/types/express/index.d.ts
```

---

## 🛒 Orders Module

Implement CRUD operations for:

- Orders
- Order Items

---

## 🔐 Authentication

Implement user authentication.

Features include:

- User registration
- User login
- Password hashing
- JWT authentication
- Protected routes

---

## 🚀 Deployment

Deploy the application using **Genezio**.

Steps include:

- Configure Genezio
- Add environment variables
- Deploy the backend
- Verify API endpoints

---

# 📂 Project Roadmap

- [x] Project Setup
- [x] Express Setup
- [x] TypeScript Setup
- [x] Git Initialization
- [ ] PostgreSQL Configuration
- [ ] Drizzle ORM Setup
- [ ] Database Migrations
- [ ] Products CRUD
- [ ] Request Validation
- [ ] Orders CRUD
- [ ] Authentication
- [ ] Deployment

---

## 📄 License

This project is intended for learning and educational purposes.

---

## 👨‍💻 Author

**Cyprian Abala**

Backend Software Engineer

- GitHub: https://github.com/ArkwingsCyprianAbala
- LinkedIn: https://www.linkedin.com/in/arkwings-abala-a45709242/