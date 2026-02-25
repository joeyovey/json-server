const container = document.querySelector('.blogs')
const searchForm = document.querySelector('.search')

const renderPosts = async (term) =>{
    let url = 'http://localhost:3000/posts?_sort=likes'

    if(term){
        url += `&q=${term}`
    }

    const res = await fetch(url)
    const posts = await res.json()

    // console.log(posts)

    let template = ''
    posts.forEach(element => {
        template += `
            <div  class="post">
                <h2>${element.title}</h2>
                <p><small>${element.likes}  likes </small></p>
                <p>${element.body.slice(0, 100)}</p>
                <a href="/details.html?id=${element.id}">Read more...</a>
                <a href="/edit.html?id=${element.id}">Edit</a>
            </div>
        `
    });

    container.innerHTML = template
}

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts())