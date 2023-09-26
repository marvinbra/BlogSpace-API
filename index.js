const postBtn = document.getElementById("post-btn")
const blogList = document.getElementById("blog-list")

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        for (let post of postsArr) {
            blogList += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
    })

postBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify({
            data
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
                blogList.innerHTML += `
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                    <hr />
                `
        })
})