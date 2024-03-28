# Curriculum Vitae

Welcome to my CV! This repository contains my curriculum vitae, initially crafted in HTML and CSS for precise layout control. Over time, it has undergone several transformations to improve maintainability and functionality.

## Background

Originally, my CV was built using HTML and CSS to achieve pixel-perfect layouts. However, as I needed to translate it into English and maintain two separate HTML files, I encountered too much duplicated work with maintining two HTML files due to classes from Bootstrap.

During this period, there were debates about adopting frameworks like React versus vanilla JavaScript. In response, I attempted to create my own framework leveraging TypeScript to manipulate the real DOM efficiently.

However, after nearly two years, I realized the maintenance burden of this custom framework was significant. Consequently, I decided to migrate the project to React using webpack, completing the transition in just four days.

## Technologies Used

- React: The CV is now built using React, which offers improved maintainability and flexibility.
- Webpack: Webpack is used for bundling and managing project dependencies.
- SCSS Modules: SCSS modules provide a structured approach to styling components.
- Bootstrap: Bootstrap remains integral to styling the application, ensuring consistency and responsiveness.
- Clean Architecture: I adhere to clean architecture principles to guide code organization and design patterns.
- React Context API: I developed a custom language system using React Context API to manage language preferences within the application.

## Future Plans

I am considering adopting i18next for language management to explore its capabilities and potentially streamline language handling within the CV.