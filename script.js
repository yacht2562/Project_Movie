var inputText = document.getElementById('inputText')

// document.getElementById('seacrhButton').addEventListener('click', (event)=> {
 
// })

function addMovieData(movie){
    let idElem = document.getElementById('id')
    idElem.innerHTML = movie.mal_id
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
    card.setAttribute('class', 'card col-3')
    let image = document.createElement('img')
    image.setAttribute('class', 'card-img-top')
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
    link.setAttribute('class','btn btn-primary')
    card.appendChild(image,cardBody)
    cardBody.appendChild(cardTitle,cardText,score,link)
    cardTitle.innerHTML = movie.title
    image.setAttribute('src', movie.image_url)
    cardText.innerHTML = movie.synopsis
    score.innerHTML = movie.score
    link.setAttribute('href', movie.url)
    
    
    
  

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