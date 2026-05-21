# 🇸🇻 Explora El Salvador - Sitio Web Turístico

Una plataforma web moderna, interactiva y completamente responsiva diseñada para promocionar los destinos turísticos más emblemáticos de El Salvador.

Este proyecto ha sido desarrollado aplicando prácticas modernas de maquetación web, combinando arquitecturas de diseño flexibles y cuadrículas avanzadas.

---

## 🚀 Características y Layout

El sitio está estructurado en secciones clave utilizando las mejores metodologías de CSS:

- **Navbar / Header:** Desarrollado con **Flexbox** (`justify-content: space-between`) para mantener el logo y los enlaces alineados.
- **Hero Banner:** Diseñado con **Flexbox** para centrar vertical y horizontalmente el mensaje de bienvenida y el llamado a la acción.
- **Galería de Destinos:** Implementado con **CSS Grid** dinámico empleando `repeat(auto-fit, minmax(280px, 1fr))` para una adaptabilidad perfecta sin romper las tarjetas.
- **Sección Informativa:** Columnas flexibles construidas con **Flexbox** y la propiedad `flex-wrap` para evitar desbordamientos.
- **Footer:** Espacio limpio y centrado usando **Flexbox**.

---

## 📱 Diseño Responsivo (Breakpoints)

El sitio se adapta automáticamente a tres entornos de visualización obligatorios:
- **Móvil (`max-width: 600px`):** El Navbar pasa a formato de columna y la galería de Grid se fuerza a **1 columna**.
- **Tablet (`max-width: 900px`):** La galería se organiza automáticamente en **2 columnas**.
- **Escritorio (`min-width: 901px`):** Despliegue completo con la galería distribuida en **3 o más columnas** según la pantalla.

---

## ✨ Elementos Interactivos y Efectos

- **Efectos Visuales (CSS):** Las tarjetas de destino cuentan con transiciones suaves en su propiedad `transform (scale/translateY)` y `box-shadow` al pasar el cursor (*hover*).
- **Ventana Modal Dinámica (JavaScript):** Al hacer clic en cualquier tarjeta, un script captura los atributos personalizados `data-destino` y `data-info` del HTML, inyecta los datos dinámicamente y despliega una ventana modal con la información detallada sin recargar la página.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** (Semántico)
- **CSS3** (Flexbox, CSS Grid, Media Queries, Transiciones)
- **JavaScript** (ES6+, Manipulación del DOM, Event Listeners)

---

## 💻 Instalación y Uso Local

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/TU-USUARIO/viaja-el-salvador.git](https://github.com/TU-USUARIO/viaja-el-salvador.git)
