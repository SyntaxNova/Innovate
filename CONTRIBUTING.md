# Contributing to InnovateINDIA

Thank you for your interest in contributing to **InnovateINDIA – Community Innovation Platform** 🚀.
We welcome contributions of all kinds — bug fixes, features, documentation, or design improvements.

---

## 🛠️ Environment Setup

Follow these steps to set up the project locally:

1. **Fork the Repository**

   * Click on the `Fork` button at the top-right of this repository.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/<your-username>/InnovateINDIA.git
   cd InnovateINDIA
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start Development Server**

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` in your browser.

---

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Page components (Home, Fields, Submission, Community Feed)
├── data/             # Mock data and category definitions
├── App.jsx           # Main app with routing
└── main.jsx          # Entry point
```

---

## 🌿 Branching Strategy

* Use **feature branches** for new features:
  `feature/<feature-name>`
* Use **fix branches** for bug fixes:
  `fix/<issue-description>`
* Keep `main` branch clean and production-ready.

---

## ✅ Pull Request Guidelines

1. Ensure your branch is up to date with `main`:

   ```bash
   git pull origin main
   ```
2. Run ESLint before pushing:

   ```bash
   npm run lint
   ```
3. Write clear commit messages:

   * `feat: add search filter for community feed`
   * `fix: resolve responsive layout issue`
4. Open a Pull Request (PR) with a detailed description.

---

## 🎨 Code Style

* **React Functional Components** with Hooks only
* Use **Tailwind CSS classes** for styling (avoid inline styles)
* Keep components **small and reusable**
* Use **semantic HTML** where possible
* Maintain **consistent formatting** (ESLint will help)

---

## 💡 Suggestions

If you have ideas to improve the project:

* Open an **Issue** describing your proposal
* Or start a discussion under **Discussions** tab

---

## 👨‍💻 Project Contributors

* **Atharva Pachpute**
* **Dhiraj Jawale**
* **Dinesh Bhopale**

---

**Built with ❤️ for the Indian innovation community**
