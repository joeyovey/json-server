const renderPosts = async () =>{
    let url = 'http://localhost:3000/posts'

    const res = await fetch(url)
    const posts = await res.json()

    // console.log(posts)
}

window.addEventListener('DOMContentLoaded', () => renderPosts())