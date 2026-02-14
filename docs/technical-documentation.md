# Technical Documentation

## Overview

This project is a responsive portfolio website built using HTML, CSS, and JavaScript.  
It demonstrates basic front-end development skills including layout design, responsiveness, and simple interactivity.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox + Media Queries)
- JavaScript (Vanilla JS)

No frameworks or external libraries were used.

---

## Folder Structure

```
assignment-1/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── README.md
```



---

## HTML Structure

The website includes:

- Header with navigation links
- About section
- Projects section (2 projects)
- Contact form
- Additional sections (Hobbies and Learning Goals)
- Footer with dynamic year

Each section uses an ID for navigation and JavaScript interaction.

---

## CSS Implementation

- Flexbox is used for layout (header and project cards).
- Media queries are used for responsiveness at 768px.
- Images are made responsive using `width: 100%`.
- Dark mode styling is applied using a `.dark` class on the body.

The layout adjusts properly for desktop and mobile screens.

---

## JavaScript Functionality

The JavaScript file includes:

1. Dynamic year in the footer.
2. Time-based greeting message.
3. Basic contact form validation.
4. Dark mode toggle with saved preference using `localStorage`.

All scripts run after `DOMContentLoaded` to ensure elements are loaded.

---

## Limitations

- The contact form does not connect to a backend.
- Validation is basic and client-side only.
- No advanced animations or external libraries are used.

---

## Conclusion

This project demonstrates understanding of core web development concepts including semantic HTML, responsive design, and basic JavaScript interactivity.


