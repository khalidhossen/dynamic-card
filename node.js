const fetchData=async(config)=>{
    const res=await fetch(config);
    if(!res.ok){
        const element=`Error:${res.status}`;
        throw new Error(element);
    }
    const data=await res.json();
    return data;
}

const postsElement=document.querySelector(".posts");

const loadData=async()=>{
     const posts= await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>{
        const postElement=document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>`;
        postsElement.appendChild(postElement);
    });
};
loadData();






// {/* <div class="post">
// <h4 class="post-title">Post title 1</h4>
// <p class="post-body">Post description 1</p>
// </div> */}