// scripts.js
$(document).ready(() => {
    // Event listener para agregar un post
    $('#addPostButton').on('click', () => {
        const title = $('#postTitle').val();
        const description = $('#postDescription').val();
        const date = new Date().toLocaleDateString();  // Fecha actual

        // Validar que los campos no estén vacíos
        if (title && description) {
            addPost(title, description, date);  // Llamar a la función para agregar un post
            $('#postTitle').val('');  // Limpiar el campo de título
            $('#postDescription').val('');  // Limpiar el campo de descripción
        } else {
            alert('Por favor, complete todos los campos');
        }
    });

    // Event listener para filtrar posts por palabra clave
    $('#filterKeyword').on('input', () => {
        const keyword = $('#filterKeyword').val();
        renderPosts(keyword);  // Llamar a la función para renderizar posts filtrados
    });

    // Renderizar los posts al cargar la página
    renderPosts();
});