# Red Social Comentarios jQuery

Una aplicación web sencilla que simula las funcionalidades básicas de una red social para publicar y mostrar comentarios, desarrollada con tecnologías web estándar. Este proyecto es ideal para comprender cómo interactuar con el DOM usando jQuery y aplicar estilos CSS para una interfaz atractiva.

---

## 🖍️ Propósito

El propósito de este proyecto es ofrecer una plataforma básica de interacción social, donde los usuarios puedan:

- Publicar comentarios de manera dinámica.
- Visualizar comentarios publicados en tiempo real sin recargar la página.

Además, el proyecto sirve como base para explorar las posibilidades de jQuery en el desarrollo web interactivo.

---

## Estructura del Proyecto

La estructura de los archivos está organizada de manera simple para facilitar la comprensión:

```
red-social-comentarios-jquery/
│
├── css/
│   └── style.css         # Hoja de estilos principal
│
├── js/
│   └── main.js            # Archivo principal de JavaScript (lógica de interacción)
│   └── post.js            # Módulo de las publicaciónes en JavaScript (lógica de interacción)
│   └── comment.js         # Módulo de los comentarios en JavaScript (lógica de interacción)
│
├── index.html            # Archivo HTML principal
│
└── README.md             # Documentación del proyecto
```

---

### Descripción de los Archivos

- **`index.html`**: Contiene la estructura básica de la página web, incluyendo los elementos donde se mostrarán y añadirán los comentarios.
- **`css/style.css`**: Define el diseño y la apariencia de la interfaz de usuario.
- **`js/`**: Gestiona la funcionalidad de los módulos de la aplicación, como la captura de eventos y la actualización dinámica del contenido usando jQuery.

---

# Descripción de Módulos

Este proyecto consta de tres módulos principales, cada uno con una funcionalidad específica que permite gestionar publicaciones y comentarios en una aplicación web interactiva. A continuación, se detalla el funcionamiento de cada módulo:

## comments.js
Este módulo gestiona los comentarios relacionados con las publicaciones. Sus principales funciones son:

- **addComment(postId):** Permite agregar un nuevo comentario a una publicación específica. Se valida que el campo de texto no esté vacío antes de añadir el comentario.
- **deleteComment(commentId):** Elimina un comentario específico basado en su ID y actualiza la lista de comentarios visibles.
- **editComment(commentId, newText):** Permite editar el contenido de un comentario específico, actualizando su texto.
- **renderComments(postId):** Renderiza los comentarios de una publicación específica, creando dinámicamente el HTML necesario para mostrarlos junto con botones para editar o eliminar.
- **renderAllComments():** Actualiza todos los comentarios de todas las publicaciones, útil cuando se realiza un cambio global en los comentarios.

## main.js
Este módulo se encarga de la lógica de eventos y el comportamiento interactivo principal de la aplicación:

- **Inicialización de eventos:** Configura eventos como:
  - Agregar una nueva publicación cuando se presiona el botón "Agregar Post".
  - Filtrar publicaciones basadas en palabras clave introducidas en un campo de texto.
- **renderPosts():** Se asegura de renderizar las publicaciones existentes al cargar la página.

## posts.js
Este módulo gestiona las publicaciones y la interacción entre posts y comentarios. Sus principales funciones son:

- **addPost(title, description, date):** Añade una nueva publicación con un título, descripción y la fecha actual. Cada publicación tiene un ID único.
- **deletePost(postId):** Elimina una publicación específica y sus comentarios asociados.
- **renderPosts(keyword):** Muestra las publicaciones, aplicando un filtro opcional por palabra clave. Además, permite que cada publicación tenga botones para eliminarla o agregar comentarios.
---

## ❓ Cómo Usar

Sigue los pasos a continuación para ejecutar la aplicación en tu máquina local:

### 1. Clonar el repositorio

Descarga el proyecto utilizando el comando:

```bash
git clone https://github.com/Granduh/Granduh-red-social-comentarios-jquery.git
```

### 2. Abrir el archivo principal

Abre `index.html` en cualquier navegador web moderno (por ejemplo, Google Chrome, Firefox, Edge).

---

## 💡 Funcionalidades

### Principales

1. **Publicación de comentarios**:
   - Los usuarios pueden ingresar texto en un campo y enviarlo para publicarlo como un comentario visible en la página.
2. **Visualización en tiempo real**:
   - Los comentarios aparecen inmediatamente en la lista sin necesidad de recargar la página.

### Técnicas

- Uso de **jQuery** para la manipulación del DOM.
- Eventos interactivos que mejoran la experiencia del usuario.
- Estilización de elementos dinámicos con CSS.

---

## 🪡 Tecnologías Utilizadas

| Tecnología     | Propósito                         |
|----------------|-----------------------------------|
| **HTML5**      | Estructuración de la página web. |
| **CSS**       | Diseño y estilos visuales.       |
| **JavaScript** | Lógica de la aplicación.         |
| **jQuery**     | Manipulación del DOM.            |

---

¡Gracias por visitar este proyecto! 🌟
