const container = document.querySelector('.blogs')

const renderPosts = async () =>{
    let url = 'http://localhost:3000/posts'

    const res = await fetch(url)
    const posts = await res.json()

    // console.log(posts)

    let templeate = ''
    posts.forEach(element => {
        templeate += `
            <div  class="post">
                <h2>${element.title}</h2>
                <p><small>${element.likes}  likes </small></p>
                <p>${element.body.slice(0, 100)}</p>
                <a href="/details.html">Read more...</a>
            </div>
        `
    });

    container.innerHTML = templeate
}

window.addEventListener('DOMContentLoaded', () => renderPosts())