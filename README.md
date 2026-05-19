# 🎓 University Resource & Exam Management System

A full-stack web application for managing university examinations, quiz categories, questions, and student results — built with **Angular** on the frontend and **Spring Boot** on the backend, secured with **JWT authentication**.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [System Architecture](#️-system-architecture)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Screenshots](#️-screenshots)
- [System Flow](#-system-flow)
- [Future Improvements](#-future-improvements)

---

## 🔍 Overview

This system provides a centralized portal for universities to manage their exam infrastructure. Admins can create quiz categories, build quizzes with MCQ-style questions, publish them for students, and track performance — all through a clean, role-based interface.

---

## ✨ Features

### 👨‍💼 Admin
- Secure login with JWT-based role-based access control
- Create, update, and delete **quiz categories**
- Create, update, delete, and activate/deactivate **quizzes**
- Add and manage **MCQ questions** (with 4 options and answer key)
- View all quizzes and their associated questions

### 👨‍🎓 Student
- Register and log in securely
- Browse active quizzes by category
- Read pre-quiz instructions
- Attempt timed quizzes with MCQs
- View results after submission

### 🔐 Security
- Spring Security + JWT (stateless sessions)
- BCrypt password encoding
- Route guards (`AdminGuard`, `NormalGuard`) on the Angular frontend
- Public routes: `/generate-token`, `/user/` (registration)

---

## 🛠️ Tech Stack

| Layer       | Technology                              |
|-------------|------------------------------------------|
| Frontend    | Angular 11, TypeScript, Angular Material |
| Backend     | Java, Spring Boot 2.3.3, Spring Security |
| Auth        | JWT (jjwt 0.9.0), BCrypt                |
| ORM         | Spring Data JPA, Hibernate              |
| Database    | MySQL 8                                 |
| Build Tool  | Maven (Spring Boot Maven Plugin)        |
| Dev Tools   | IntelliJ IDEA, VS Code, Git             |

---

## 🏗️ System Architecture| Database   | MySQL                  |
| Tools      | Git, GitHub            |

---

## 🖼️ Screenshots

### 🔐 Login Page
![Login Page 1](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/e6ad4fc8-2ebb-4a8c-b391-8dcffefd4acd%20(1).png)  
> Login screen with validation and clean layout.

![Login Page 2](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/d5ca8dfd-0cbd-4cf4-a39b-1bc59575784f.png)  
> Alternate login view with password check.

---

### 🧾 Admin Dashboard
![Dashboard](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/cb28ca03-c077-4b9c-9f99-d8b040400f39.png)  
> Overview of quizzes and actions like edit, delete, or view results.

![Dashboard 2](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/8d3c2297-e6d1-4e5c-ae3f-bd279f299b5a%20(1).png)  
> Admin can view and manage individual quiz entries.

---

### 📖 Quiz Instructions
![Instructions](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/b16e2a74-98a8-4037-80b3-80e6b1ebf594%20(1).png)  
> Student-friendly pre-quiz instructions.

---

### 🧭 Sidebar Navigation
![Sidebar Navigation](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/5cf8b677-7a2a-4f15-b41b-3fe48edcb9c2.png)  
> Navigation optimized for admin control.

---
# 1️⃣ Clone the repository
git clone https://github.com/SRUJANKS99/University-Resource-and-Exam-Management-System.git

# 2️⃣ Navigate into the project directory
cd University-Resource-and-Exam-Management-System

# 3️⃣ Run the Spring Boot backend
./mvnw spring-boot:run

# ✅ Ensure MySQL is running and database is configured

----

## 🔄 System Flow
```mermaid
graph TD
    A[Login Page] --> B{User Role}
    B -->|Admin| C[Dashboard]
    C --> C1[Add Quiz]
    C --> C2[Add Category]
    C --> C3[View Student Results]
    C --> C4[Provide Feedback]

    B -->|Student| D[Instructions Page]
    D --> E[Start Quiz]
    E --> F[Submit Quiz]
    F --> G[Results Generated]



