


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": ""
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// prelevo il container 
const containerElement = document.getElementById("container");



posts.forEach(function(currentPost, index) {

    // prelevo le iniziali 
    const initials = currentPost.author.name.split(" ").map((word) => word[0]).join("");
    
    const oldDate = new Date(currentPost.created);
    const newDate = oldDate.toLocaleDateString("it-IT")
    
    
    // inserisco l'elemento 
    containerElement.innerHTML += `
    <div class="post">


            <div class="post__header">
                <div class="post-meta"> 
                
                
                    <div class="post-meta__icon"}>
                    ${currentPost.author.image ? `
                        <img class="profile-pic" src="${currentPost.author.image}" alt="${currentPost.author.name}">
                    `:`
                        <span class="profile-pic-default">${initials}</span>
                    `}                
                    </div>
                    
                    <div class="post-meta__data">
                        <div class="post-meta__author">${currentPost.author.name}</div>
                        <div class="post-meta__time">${newDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${currentPost.content}</div>
            <div class="post__image">
                <img src=${currentPost.media} alt="${index + 1}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${index + 1}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${index + 1}" class="js-likes-counter">${currentPost.likes}</b> persone
                    </div>
                </div> 
            </div>   
            
            
        </div>
    `
})


// dichiaro l'array 
let likedPosts = [];
console.log(likedPosts);

// aggiungo un event listener per tutti i btn
const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach(function(likeBtn, index){
    likeBtn.addEventListener("click", function(like){

        // previene il btn da ogni azione 
        like.preventDefault();
        // aggiungo o rimuovo la classe --liked
        likeBtn.classList.toggle("like-button--liked");

        // prelevo il contatore dei like 
        const likeCounter = document.getElementById(`like-counter-${index + 1}`)


        // decrementa il contatore dei likes se il post è già stato likato
        if (!likeBtn.classList.contains("like-button--liked")) {
            const currentLikes = parseInt(likeCounter.textContent);
            likeCounter.textContent = currentLikes - 1;
        } else {
            // incrementa il contatore dei likes se il post non è ancora stato likato
            const currentLikes = parseInt(likeCounter.textContent);
            likeCounter.textContent = currentLikes + 1;
        }
    
        // prelevo l'id del post 
        const postId = likeBtn.getAttribute("data-postid");
        likedPosts.push(postId); 


    })
})
