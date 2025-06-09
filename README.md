# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# RemWaste – Skip Hire Selection UI

This project is a responsive and visually engaging React-based frontend for RemWaste, enabling users to browse and select skip hire options through an intuitive step-by-step process.

## 🚀 Features

### ✅ Skip Selection Interface
- Fully responsive grid layout displaying available skip hire options.
- Dynamically loads data from a `skipService` to populate skip options.
- Displays skip image, size, hire period, and total price (including VAT).
- Each card uses a 3D hover effect with elegant styling.
- When a skip is selected, a **modal receipt** appears summarizing the order with full details and "Back" and "Continue" actions.

### 🌈 Animated Background
- Integrated a custom background gradient animation using dark and reddish-themed tones.
- Gradient is subtly animated using `background-gradient-animation.tsx` for a modern visual feel.

### 📊 Multi-Step Process Bar
- Displays six steps:  
  `Postcode → Waste Type → Select Skip → Permit Check → Choose Date → Payment`
- Visually indicates:
  - Current active step (light reddish theme).
  - Completed steps (clickable).
  - Upcoming steps (disabled).
- Logic restricts navigation: you can’t skip ahead to future steps.

## 🧱 Component Structure

- `CardsGrid.tsx`: Handles data fetching and renders skip cards with image, info, and selection modal.
- `ProcessBar.tsx`: Displays a horizontal process bar with conditional rendering based on current step.
- `3d-card.tsx`: Reusable card component with 3D hover effect.
- `background-gradient-animation.tsx`: Handles the animated background using configurable color stops and blending.

## 🖼️ Assets
- Images used for each skip size:
  - 4 to 40 yard skips: `.jpg` assets included in `/assets`.

## 🛠️ Tech Stack
- **React + TypeScript**
- **Tailwind CSS**
- **Framer Motion** (for animations)
- Custom UI design with dark and reddish color palette.

## 🔄 Future Enhancements
- Hook up the steps to actual navigation logic.
- Persist step state across page refresh.
- Backend integration for booking and payment processing.

## 📂 Folder Structure
src/
├── assets/ # Skip images
├── components/
│ ├── CardsGrid.tsx # Main skip card UI
│ ├── ProcessBar.tsx # Multi-step UI component
│ ├── ui/
│ │ ├── 3d-card.tsx # 3D hover effect component
│ │ └── background-gradient-animation.tsx
├── Services/
│ └── skipService.ts # Fetches skip options


## 🧑‍💻 Developed by

[Jouliano Adel George] – Full Stack Developer  
Contact: [Joulianoadel@gmail.com]  
Built as part of the RemWaste web task