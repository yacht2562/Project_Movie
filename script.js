var inputText = document.getElementById('inputText')


document.getElementById('seacrhButton').addEventListener('click', (evnet) => {
    let id = document.getElementById('inputText').value
    if(id == ''){
        alert("Please insert movie")
    }else{       
    fetch('https://api.jikan.moe/v3/search/anime?q=${id}')
    .then((response) => {
        return response.json();   
    })
       .then(data => {
            hideall()
            addMovieList(data)

        })
    }
})




function hideall(){
    let element = document.getElementById('content')
    element.innerHTML = ''

}

function showAll(){
    let element = document.getElementById('content')
    element.style.display = 'block'
}
function addMovieData(movie) {
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

function onLoad() {
    fetch('https://api.jikan.moe/v3/search/anime?q=reborn')
        .then((response) => {
            return response.json()
        }).then(data => {
            addMovieList(data)
        })
}

function addMovieToCard(movie) {
    let card = document.createElement('div')
    card.setAttribute('class', 'card col-3 m-3 pe-auto')
    card.setAttribute('ondbclick', 'addMovietoDB()')
    card.style.width = "18rem"
    let image = document.createElement('img')
    image.setAttribute('class', 'card-img-top mt-2')
    image.setAttribute('ondbclick', 'addMovietoDB()')
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    let cardTitle = document.createElement('h5')
    cardTitle.setAttribute('class', 'card-title')
    cardTitle.setAttribute('id', 'name')
    let cardText = document.createElement('p')
    cardText.setAttribute('class', 'card-text')
    cardText.setAttribute('id', 'text')
    let score = document.createElement('p')
    score.setAttribute('id', 'score')
    let link = document.createElement('a')
    link.setAttribute('id', 'url')
    link.setAttribute('class', 'btn btn-primary col-4')
    let section  =document.getElementById('content')
    section.appendChild(card)
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(score)
    cardBody.appendChild(link)
    cardTitle.innerHTML = movie.title
    image.setAttribute('src', movie.image_url)
    cardText.innerHTML = movie.synopsis
    score.innerHTML = "<b>Score:</b> " + movie.score
    link.setAttribute('href', movie.url)
    link.setAttribute('target', '_blank')
    link.innerHTML = "Go"

}


function addMovieList(datas) {
    let f = Object.values(datas)
    let movieList = Object.values(f[3])
    let movieListdata = Object.values(movieList)
    let movielistdatas = Object.values(movieListdata)
    for (movie of movielistdatas) {
        addMovieToCard(movie)
    }
}

function addMovietoList() {
    let movie = {}
    movie.name = document.getElementById('cardTitle').innerHTML
    movie.score = document.getElementById('score').innerHTML
    movie.link = document.getAttribute('herf')
    movie.name = document.getElementById('movie.title')
    movie.Text = document.getElementById('cardText').innerHTML
    addMovietoDB(movie)
}

document.querySelector(".card").addEventListener("dblclick", event => {
    let answer = confirm('Do you want add this movie')
    if(answer == ture){
        addMovietoList();
    
    
    }
  });

function addMovietoDB(movie) {
    fetch('https://se104-project-backend.du.r.appspot.com/movies',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json.stringfy(movie)
    }).then((response) => {
        return response.json()
    }).then(data => {
        addMovietoList()
        
    })
    
}


function showMylist(){
    fetch('https://se104-project-backend.du.r.appspot.com/movies/632110333')
    .then((response) => {
        return response.json()
    }).then(data => {
      for (movie of data){
          addMovieToCard(movie)
      }
    })
}

