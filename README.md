# React + Vite

📘 RETO: useState en React

    Puedes copiarlo tal cual y ajustarlo si deseas.

🏆 LOGRO

    Uso del hook useState en React JS

📌 Descripción del reto

    Este proyecto tiene como objetivo aplicar el hook useState para manejar estados en una aplicación React, permitiendo la creación y eliminación dinámica de comentarios ingresados por el usuario.

🎯 Objetivos del reto

    Maquetar una landing page basada en un diseño proporcionado
    Implementar estados usando el hook useState
    Gestionar comentarios ingresados por el usuario
    Permitir eliminar comentarios dinámicamente
    Desplegar la aplicación en GitHub Pages

🛠️ Tecnologías utilizadas

    React JS
    Vite
    JavaScript (ES6+)
    HTML5
    CSS3
    GitHub Pages

📁 Estructura final del proyecto

    src/
    ├── assets/
    │   └── imágenes del proyecto
    │
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── OurStory.jsx
    │   ├── AlwaysFresh.jsx
    │   ├── Menu.jsx
    │   ├── Tasty.jsx
    │   ├── Delight.jsx
    │   │
    │   └── Reviews/
    │       ├── Footer.jsx
    │       ├── ReviewForm.jsx
    │       ├── ReviewList.jsx
    │       └── ReviewCard.jsx
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css

⚛️ Uso del hook useState

    El estado principal de los comentarios se maneja en el componente Footer.jsx, cumpliendo el principio de:

        “El estado vive en el componente padre”

    Desde allí:

        ReviewForm agrega comentarios
        ReviewList los lista
        ReviewCard los muestra individualmente
        Cada comentario puede eliminarse mediante un botón

✨ Funcionalidades principales

    Ingreso de comentarios mediante un input
    Renderizado dinámico de comentarios
    Eliminación individual de comentarios
    Componentes reutilizables
    Diseño responsive

🚀 Instalación y ejecución local

    npm install
    npm run dev

🌐 Despliegue

    El proyecto está desplegado en GitHub Pages.

        npm run build
        npm run deploy

🎓 Contexto académico

    Proyecto desarrollado como parte del curso de Desarrollo Frontend, enfocado en el aprendizaje práctico de React, hooks y buenas prácticas de componentizac      ión.

✍️ Autor

    Richard Asto
