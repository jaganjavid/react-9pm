const posts = [
    {title: "Post One"},
    {title: "Post Two"},
]

// SYNC

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post)
//     },3000)
// };

// function getPosts(){
//     setTimeout(function(){
//         let output = "";

//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`;
//         })

//         document.body.innerHTML = output;
//     }, 1000)
// }

// createPost({title:"post three"});
// getPosts();

// ASYNC


function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },3000)
};

function getPosts(){
    setTimeout(function(){
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })

        document.body.innerHTML = output;
    }, 1000)
}

createPost({title:"post three"}, getPosts);

