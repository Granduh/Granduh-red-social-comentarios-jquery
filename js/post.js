// posts.js
let posts = [];  // Array para almacenar los posts

// Función para agregar un post
const addPost = (title, description, date) => {
    const newPost = { title, description, date, id: posts.length };
    posts.push(newPost);
    renderPosts();  // Vuelve a renderizar los posts
};

// Función para eliminar un post
const deletePost = (postId) => {
    posts = posts.filter(post => post.id !== postId);
    renderPosts();  // Vuelve a renderizar los posts
};

// Función para renderizar los posts
const renderPosts = (keyword = '') => {
    $('#postsContainer').empty();  // Limpiar el contenedor de posts

    // Filtrar los posts por la palabra clave
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()));

    // Si no hay posts, mostrar un mensaje
    if (filteredPosts.length === 0) {
        $('#postsContainer').html('<p">No hay publicaciones disponibles</p>');
    }

    // Renderizar los posts
    filteredPosts.forEach(post => {
        const postHtml = `
            <div class="post" data-id="${post.id}">
                <h3>${post.title} <small>(${post.date})</small></h3>
                <p>${post.description}</p>
                <button class="deletePostButton" data-id="${post.id}">Eliminar Post</button>
                <div class="comments" id="comments-${post.id}">
                    <!-- Los comentarios de este post se cargarán aquí -->
                </div>
                <input type="text" id="commentInput-${post.id}" placeholder="Agregar un comentario" />
                <button class="addCommentButton" data-id="${post.id}">Agregar Comentario</button>
            </div>
        `;
        $('#postsContainer').append(postHtml);  // Usando append para agregar el post

        renderComments(post.id);  // Cargar comentarios para cada post
    });

    // Usamos una función tradicional para los eventos de eliminar post
    $('.deletePostButton').on('click', function () {
        const postId = $(this).data('id');  // `this` se refiere al botón de eliminar post
        deletePost(postId);
    });

    // Usamos una función tradicional para los eventos de agregar comentario
    $('.addCommentButton').on('click', function () {
        const postId = $(this).data('id');  // `this` se refiere al botón de agregar comentario
        addComment(postId);
    });
};