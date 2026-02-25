const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')
const deleteBtn = document.querySelector('.delete')

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);

    if (!res.ok) {
        container.innerHTML = "<h3>Post not found</h3>";
        return;
    }

    const post = await res.json();

    const card = `
        <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body}</p>
        </div>
    `;

    container.innerHTML = card;
}

deleteBtn.addEventListener('click', async () => {
    const res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
    })
    window.location.replace('/index.html')
})
window.addEventListener('DOMContentLoaded', () => renderDetails())  