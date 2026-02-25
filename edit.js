const form = document.querySelector('.edit-form');

const id = new URLSearchParams(window.location.search).get('id');


// ✅ load post data into form
const loadPost = async () => {
    const res = await fetch('http://localhost:3000/posts/' + id);
    const post = await res.json();

    form.title.value = post.title;
    form.body.value = post.body;
    form.likes.value = post.likes;
};


// ✅ update post
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const updatedPost = {
        title: form.title.value,
        body: form.body.value,
        likes: Number(form.likes.value)
    };

    await fetch('http://localhost:3000/posts/' + id, {
        method: 'PUT',   // replace entire post
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost)
    });

    window.location.replace('/details.html?id=' + id);
});

window.addEventListener('DOMContentLoaded', loadPost);