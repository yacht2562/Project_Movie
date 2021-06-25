var inputText = document.getElementById('inputText')
var card = document.getElementById('card')
var Getid =0 

document.getElementById('seacrhButton').addEventListener('click', (evnet) => {
    let id = document.getElementById('inputText').value
    
    hideall()
    if(id == ''){
        alert("Please insert movie")
    }else{       
    fetch(`https://api.jikan.moe/v3/search/anime?q=${id}`)
    .then((response) => {
        return response.json();   
    })
       .then(data => {
           addMovieList(data)
           inputText.value =''
            showAll()
        })
    }
})




function hideall(){
    let element = document.getElementById('content')
    element.remove()
    element = document.createElement('div')
    element.setAttribute('class','row')
    element.setAttribute('id','content')
    let body = document.getElementById('body')
    body.appendChild(element)
    document.getElementById("Search").style.display= "none"

}

function showAll(){
    let element = document.getElementById("Search")
    element.style.display = 'flex'
}




function addMovieToCard(movie) {
    let content = document.createElement('div')
    content.setAttribute('class','row')
    content.setAttribute('id','content')
    let card = document.createElement('div')
    card.setAttribute('class', 'card col-3 m-3 pe-auto')
    card.setAttribute('id', 'card')
    card.setAttribute('ondblclick', 'addMovietoList()')
    card.style.width = "18rem"
    let image = document.createElement('img')
    image.setAttribute('class', 'card-img-top mt-2')
    image.setAttribute('id', 'img')
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    cardBody.setAttribute('id', 'card_body')
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
    let answer = confirm('Do you want add this to myList')
    if(answer == true){
    let movieData = {
    "id" : "632110333",
    "movie":{
    "url" : document.getElementById('url').getAttribute('href'),
    "title" : document.getElementById('name').innerHTML,
    "synopsis": document.getElementById('text').innerHTML,
    "image_url" : document.getElementById('img').getAttribute('src'),
    "score" : document.getElementById('score').innerHTML,
        }
    }
    addMovietoDB(movieData)
    }
}
function changePage(){
    let list =document.getElementById('mylist')
    let home = document.getElementById('home')
    if(home.getAttribute('class')=='nav-link active'){
        home.setAttribute('class','nav-link ')
        list.setAttribute('class', 'nav-link')

    }else{
        list.setAttribute('class','nav-link ')
        home.setAttribute('class', 'nav-link active')
    }
    
}

document.getElementById('home').addEventListener('click',(event)=>{
        hideall()
        changePage()
        showAll()
})

function addMovietoDB(movie) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movies`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    }).then((response) => {
        return response.json()
    }).then(data => {
        console.log('success')
        hideall()
        showMylist()
        
    })
    
}

document.getElementById('mylist').addEventListener('click', (event) =>{
    hideall()
    showMylist()
})


function showMylist(){
    fetch(`https://se104-project-backend.du.r.appspot.com/movies/632110333`)
    .then((response) => {
        return response.json()
    }).then(data => {
        changePage()
      for (movie of data){
        addMovieMylists(movie)
          
          
          
      }
    })
}
function getApi(url){
    fetch(`https://se104-project-backend.du.r.appspot.com/movies/632110333`)
    .then((response)=>{
        return response.json()
    }).then(data =>{
            Getid = getMovieid(data)
            for(let i=0;i<Getid.length;i++ ){
                 if(url == Getid[i].url){
                    fetch(`https://se104-project-backend.du.r.appspot.com/movie?id=632110333&&movieId=${Getid[i].id}`,{
                        method: 'DELETE'
                    })
                    .then((response) => {
                        return response.json()
                    }).then(data => {
                            hideall()
                            showMylist()
                            alert('Delete Complete')

                            
                        })
                 }

                

            }
           
            
    })
}

function getMovieid(movie){
    let detail = Object.values(movie)
    return detail
   
    
    
}
function DeleteMovie(index){
    let answer = confirm('Do you want to Delete it')
    if(answer == true){
            getApi(index)

    
    }
}

function addMovieMylists(movie){
    let content = document.createElement('div')
    content.setAttribute('class','row')
    content.setAttribute('id','content')
    let card = document.createElement('div')
    card.setAttribute('class', 'card col-3 m-3 pe-auto')
    card.setAttribute('id', 'card')
    card.setAttribute('ondblclick', 'addMovietoList()')
    card.style.width = "18rem"
    let image = document.createElement('img')
    image.setAttribute('class', 'card-img-top mt-2')
    image.setAttribute('id', 'img')
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', 'card-body')
    cardBody.setAttribute('id', 'card_body')
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
    let delete_btn =document.createElement('button')
    delete_btn.setAttribute('class','btn btn-danger m-3')
    delete_btn.setAttribute('id','del')
    delete_btn.setAttribute('onclick','DeleteMovie()')
   
    let section  =document.getElementById('content')
    section.appendChild(card)
    card.appendChild(image)
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(score)
    cardBody.appendChild(link)
    cardBody.appendChild(delete_btn)
    cardTitle.innerHTML = movie.title
    image.setAttribute('src', movie.image_url)
    cardText.innerHTML = movie.synopsis
    score.innerHTML = "<b>Score:</b> " + movie.score
    link.setAttribute('href', movie.url)
    link.setAttribute('target', '_blank')
    link.innerHTML = "Go"
    delete_btn.innerHTML = "Delete"
    delete_btn.addEventListener('click', (event) =>{
        DeleteMovie(link.getAttribute('href'))
    })
    }

  




