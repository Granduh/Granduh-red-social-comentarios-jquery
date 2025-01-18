// comments.js
let comments = [];  // Array para almacenar los comentarios

// Función para agregar un comentario
const addComment = (postId) => {
    const commentText = $(`#commentInput-${postId}`).val();
    if (commentText) {
        const newComment = { postId, text: commentText, id: comments.length };
        comments.push(newComment);
        renderComments(postId);  // Vuelve a renderizar los comentarios para este post
    } else {
        alert('Por favor, ingrese un comentario');
    }
};

// Función para eliminar un comentario
const deleteComment = (commentId) => {
    comments = comments.filter(comment => comment.id !== commentId);
    renderAllComments();  // Vuelve a renderizar todos los comentarios
};

// Función para editar un comentario
const editComment = (commentId, newText) => {
    const comment = comments.find(comment => comment.id === commentId);
    if (comment) {
        comment.text = newText;
        renderAllComments();  // Vuelve a renderizar todos los comentarios
    }
};

// Función para renderizar los comentarios de un post
const renderComments = (postId) => {
    const postComments = comments.filter(comment => comment.postId === postId);
    const commentsHtml = postComments.map(comment => `
        <div class="comment" data-id="${comment.id}">
            <p>${comment.text}</p>
            <button class="deleteCommentButton" data-id="${comment.id}">Eliminar Comentario</button>
            <button class="editCommentButton" data-id="${comment.id}">Editar Comentario</button>
        </div>
    `).join('');
    
    $(`#comments-${postId}`).html(commentsHtml);  // Mostrar comentarios para el post

    // Usamos una función tradicional para los eventos de eliminación de comentario
    $('.deleteCommentButton').on('click', function () {
        const commentId = $(this).data('id');  // `this` se refiere al botón de eliminar comentario
        deleteComment(commentId);
    });

    // Usamos una función tradicional para los eventos de edición de comentario
    $('.editCommentButton').on('click', function () {
        const commentId = $(this).data('id');  // `this` se refiere al botón de editar comentario
        const newText = prompt('Editar comentario:', comments.find(comment => comment.id === commentId).text);
        if (newText) {
            editComment(commentId, newText);
        }
    });
};

// Función para renderizar todos los comentarios (cuando se elimina un comentario)
const renderAllComments = () => {
    posts.forEach(post => renderComments(post.id));
};