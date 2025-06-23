# 🎓 University Resource & Exam Management System

A centralized **web-based portal** for managing university academic resources, examination schedules, student results, and department documents.

---

## ✨ Features

- 📅 Real-time exam schedule creation & publishing  
- 📄 Live results for students & faculty  
- 🔐 Secure admin login with role-based access  
- 🗂️ Centralized student & quiz record management  
- 📊 Quiz attempt tracking and performance view  
- 🖥️ Fully responsive, clean UI  
- 🔍 Easy search and filter for quizzes and results  

---

## 🛠️ Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | HTML, CSS, JavaScript  |
| Backend    | Java, Spring Boot      |
| Database   | MySQL                  |
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

### 📊 Quiz Attempts & Results
![Attempts](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/7afbaf37-9988-4b16-b6f2-0059f79bbb2e.png)  
> Attempts and scores tracked by quiz.

---

### 🧭 Sidebar Navigation
![Sidebar 1](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/77d3a21f-fcc2-460a-99c6-af5aaa35480b7.png)  
> Sidebar for managing quizzes, categories, users, and logout.

![Sidebar 2](https://raw.githubusercontent.com/SRUJANKS99/University-Resource-and-Exam-Management-System/main/5cf8b677-7a2a-4f15-b41b-3fe48edcb9c2.png)  
> Navigation optimized for admin control.

---

## 🔄 System Flow

```mermaid
graph TD
A[Login Page] --> B{User Role}
B -- Admin --> C[Dashboard]
B -- Student --> D[Instructions Page]
D --> E[Start Quiz]
E --> F[Submit Quiz]
F --> G[Results Generated]
