var inputText = document.getElementById('inputText')

// document.getElementById('seacrhButton').addEventListener('click', (event)=> {
 
// })
let container = document.createElement('div')
    container.setAttribute('class','container')
    let section = document.createElement('div')
    section.setAttribute('class', 'row ')
    document.body.appendChild(container)
    container.appendChild(section)


    function addMovieData(movie){
    let nameElem = document.getElementById('name')
    nameElem.innerHTML = movie.title
    let textElem = document.getElementById('text')
    textElem.innerHTML = movie.synopsis
    let scoreElem = document.getElementById('score')
    scoreElem.innerHTML = movie.score
    let urlElem = document.getElementById('url')
    urlElem.setAttribute = ("href", movie.url)
    let pictureElem = document.getElementById('image')
    pictureElem.setAttribute("src", movie.image_url) 
    
}

function onLoad(){
    fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
    .then((response) => {
        return response.json()
    }).then(data => {
       addMovieList(data)
    })
}

function addMovieToCard(movie){
    
    
    let card = document.createElement('div')
    card.setAttribute('class', 'card col-3 m-3')
    card.style.width = "18rem"
    let image = document.createElement('img')
    image.setAttribute('class', 'card-img-top mt-2')
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class','card-body')
    let cardTitle = document.createElement('h5')
    cardTitle.setAttribute('class','card-title')
    cardTitle.setAttribute('id','name')
    let cardText = document.createElement('p')
    cardText.setAttribute('class','card-text')
    cardText.setAttribute('id','text')
    let score = document.createElement('p')
    score.setAttribute('id','score')
    let link  = document.createElement('a')
    link.setAttribute('id','url')
    link.setAttribute('class','btn btn-primary col-4')
    let add =document.createElement('button')
    add.setAttribute('id', 'addMovie')
    add.setAttribute('class', 'btn btn-danger m-2')
    add.innerHTML = "Add to mylist"
    section.appendChild(card)
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
   cardBody.appendChild(score)
    cardBody.appendChild(link)
    cardBody.appendChild(add)
    cardTitle.innerHTML = movie.title
    image.setAttribute('src', movie.image_url)
    cardText.innerHTML = movie.synopsis
    score.innerHTML = "<b>Score:</b> "+movie.score
    link.setAttribute('href', movie.url)
    link.innerHTML = "Go"
}


function addMovieList(datas){
    let f = Object.values(datas)
    let movieList = Object.values(f[3])
    let movieListdata = Object.values(movieList)
    let movielistdatas = Object.values(movieListdata)
     
    
    for (movie of movielistdatas){
         addMovieToCard(movie)
        
     }
}


function addMovietoDB (movie){
    fetch('https://se104-project-backend.du.r.appspot.com/movies')
}

