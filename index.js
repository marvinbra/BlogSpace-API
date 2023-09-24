const postBtn = document.getElementById("post-btn")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        for (let post of postsArr) {
            document.getElementById("blog-list").innerHTML += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
    })

postBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const title = document.getElementById("post-title").value
    const body = document.getElementById("post-body").value
    console.log({title: title, body: body})
})