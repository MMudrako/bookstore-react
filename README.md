# 🛍️ bookstore-react

Modern rebuild of a college group bookstore project. This full-stack web app showcases clean React UI, RESTful backend APIs, and scalable monorepo setup.  
Built with:
- **React + Vite + Tailwind CSS** (Frontend)
- **MongoDB + Firebase Auth + Serverless Functions** (Backend APIs)

🛠️ Architecture Update
This project originally aimed to follow MERN stack setup with Express backend hosted on Render.

However, due to practical deployment limitations (e.g. Render free tier’s rotating IPs preventing consistent access to a cloud MongoDB cluster), I decided to transition to a serverless architecture using:

Vercel Functions for API routes (replacing Express)

Firebase Authentication for user sign-in/token verification

MongoDB Atlas for persistent data storage (remains unchanged)

This shift simplified deployment, improved security, and aligned the project with modern serverless development practices.

🔒 Authenticated users can post reviews using Firebase ID tokens passed to protected serverless endpoints.
⚠️ Current performance in production is slower than localhost — further optimization is planned in future iterations.
---


## 🎯 Goals

* Migrate legacy MEAN codebase to modern MERN
* Apply full-stack best practices using monorepo
* Emphasize maintainability, modular design, and developer tooling
* Showcase full dev pipeline from design to deployment

---

## 📁 Project Structure
Here’s how the project is organized. The first image shows the full-stack monorepo and backend folders. The second focuses on the `bookstore-front` (React frontend) directory.

### Main Branch 
bookstore-react/
├── bookstore-front/   # React + Vite + Tailwind (Frontend)
├── bookstore-back/    # Express + MongoDB (Backend)
├── README.md          # Monorepo overview (this file)

### Vercel Branch
bookstore-react/
├── public/ # Static assets, images, README visuals
├── api/ # Serverless API handlers (used by Vercel)
├── components/ # Reusable frontend components
├── pages/ # Page routes for the React app
├── utils/ # Helper functions (e.g. Firebase config)
├── db.js # MongoDB connection logic
├── vite.config.js # Vite setup (with local proxy)
├── README.md # You're reading it!

### ⚙️ Monorepo and Backend with Express
![Root and Backend Structure](./public/folder-structure-root.png)

### 🎨 Frontend (bookstore-front)
![Frontend Folder Structure](./public/folder-structure-frontend.png)

### Monorepo with Serverless API on Vercel
![Vercel Branch Folder Structure](.public/folderer-structure-vercel-branch.png)

---

## 🚧 Project Status

✅ Phase 1 finished: setup, layout, and Tailwind styling

✅ Phase 2 finished: backend routes and MongoDB integration

✅ Phase 3: Deployment to Vercel (complete separation of client & API)  

🔜 Phase 4: Cart syncing, admin dashboard, and user profile features

(Full progress tracked in Checklist)


---


### Folder Previews

#### Backend & Root
![Root and Backend Structure](./public/folder-structure-root.png)

#### Frontend Only
![Frontend Folder Structure](./public/folder-structure-frontend.png)

---

## 🚧 Project Status

✅ Phase 1: Project setup, layout, Tailwind styling  
✅ Phase 2: MongoDB integration, Firebase Auth, serverless API routes  
✅ Phase 3: Deployment to Vercel (complete separation of client & API)  

🔜 **Next Iteration**:
- Cart syncing for authenticated users
- Clear separation/reset of cart on logout
- Admin dashboard and user profile panel

---

## 🧪 Current App Behavior

- All visitors can browse books and add to cart 
- Only **signed-in users** can leave a review or rating
- Cart contents are stored **in localStorage only**, not yet linked to user profile
- Cart is **not synced with login/logout**, but this will change in the next release

---



## 🔧 Setup Instructions

### 1. Clone the Repo


git clone https://github.com/MMudrako/bookstore-react.git
cd bookstore-react


### 2. Start Frontend


cd bookstore-front
npm install
npm run dev


### 3. Start Backend 


cd ../bookstore-backend
npm install
npm run dev


---


## 🧪 Development Notes

ESLint, Prettier, and EditorConfig are all set up

Default formatting rules included for consistency

---


## 🧠 Reflections
This version demonstrates my ability to:

Independently rebuild a full-stack project using modern tools

Migrate UI logic and design to React + Tailwind with good structure and accessibility

Prioritize features to balance scope vs timeline

Plan for future scalability by choosing Firebase + tokens for flexible, secure auth



## 📄 License

MIT – see root `LICENSE` file.




