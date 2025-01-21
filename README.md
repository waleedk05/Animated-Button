# Animated Button Component

This repository contains a reusable React button component with GSAP-powered animations. The button supports multiple use cases, including internal routing with React Router and external links. It is fully customizable with props and provides a sleek hover animation effect.

---

## Preview

![AnimatedButton](https://github.com/user-attachments/assets/90ebfb56-9f4c-48bc-b1e3-8f1164cdfa10)

---

## Features
- Smooth GSAP animations for hover effects.
- Supports routing with React Router (`to` prop).
- Handles external links with the `href` prop.
- Customizable with props for label, icon, styles, and more.
- Works as a regular button when no link is provided.
- Accessibility-friendly and responsive.

---

## Installation

To use the Animated Button component in your project, clone the repository and add the component to your project.

```bash
git clone https://github.com/waleedk05/Animated-Button.git
```

Or copy the `AnimatedButton` component into your project folder.

---

## Usage

Here is how you can use the Animated Button component in your React project:

### Example 1: Internal Routing
```jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const App = () => {
  return (
    <Router>
      <AnimatedButton to="/about" label="Go to About Page" />

      <Routes>
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
```

### Example 2: External Link
```jsx
<AnimatedButton
  href="https://example.com"
  label="Visit Example"
  target="_blank"
/>
```

### Example 3: Regular Button
```jsx
<AnimatedButton
  label="Click Me"
  onClick={() => alert("Button Clicked!")}
/>
```

---

## Props

| Prop      | Type     | Default     | Description                                                                 |
|-----------|----------|-------------|-----------------------------------------------------------------------------|
| `label`   | `string` | `""`        | Text to display inside the button.                                         |
| `to`      | `string` | `null`      | Path for internal navigation (React Router).                               |
| `href`    | `string` | `null`      | URL for external navigation.                                               |
| `onClick` | `func`   | `null`      | Callback function for button click.                                        |
| `icon`    | `string` | `null`      | Path to an icon image to display inside the button.                        |
| `target`  | `string` | `"_self"`  | Specifies where to open the linked document (e.g., `"_blank"`, `"_self"`). |
| `type`    | `string` | `"button"` | Specifies the button type (e.g., `"submit"`, `"button"`).                 |
| `disabled`| `bool`   | `false`     | Disables the button when set to true.                                      |
| `className`| `string`| `""`       | Additional CSS classes for the button.                                     |
| `style`   | `object` | `{}`        | Inline styles for the button.                                              |

---

## Styling

The component uses a CSS file (`AnimatedButton.css`) for styling. You can customize the styles as needed.
The colors can be changed using these variables in css file 
:root {
  --primary-color: #055c22;
  --secondary-color: #fff;
}



## Dependencies

This component uses:
- `react`
- `react-router-dom` (for internal routing support)
- `gsap` (for animations)

Make sure to install these dependencies in your project:

```bash
npm install react react-router-dom gsap
```

---

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute the component as per the license terms.

---

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

---

## Author

[Waleed Ahmed](https://github.com/waleedk05)

