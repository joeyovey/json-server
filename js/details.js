const id = new URLSearchParams(window.location.search).get('id')
const container = document.querySelector('.details')
const deleteBtn = document.querySelector('.delete')

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id)
    const posts = await res.json()
    // console.log(post)

    card = `
        <div class="post">
            <h2>${posts.title}</h2>
            <p><small>${posts.likes} likes</small></p>
            <p>${posts.body}</p>
        </div>
    `
    container.innerHTML = card
}

deleteBtn.addEventListener('click', async () => {
    const res = await fetch('http://localhost:3000/posts' + id, {
        method: 'DELETE'
    })
    window.location.replace('/index.html')
})
window.addEventListener('DOMContentLoaded', () => renderDetails())