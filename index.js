let cardArray = [
    {
        'name':'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name':'HTML',
        'img': 'http://thapatechnical.online/logos/html5.png',
    },
    {
        'name':'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name':'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name':'NODE',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name':'PYTHON',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];

const parentDiv = document.querySelector('#card-section')

const gameCard = cardArray.concat(cardArray)

let suffledChild = Array.from(gameCard).sort(()=> 0.5 - Math.random())

let clickCount = 0;
let firstCard = ""
let secondCard = ""

const card_matches = ()=>{
    let card_selected = document.querySelectorAll('.card_selected')
    card_selected.forEach((curElem)=>{
        curElem.classList.add('card_match')
    })
}

const resetGame = ()=>{
    firstCard=""
    secondCard=""
    clickCount =0

    let card_selected = document.querySelectorAll('.card_selected')
    card_selected.forEach((curElem)=>{
        curElem.classList.remove('card_selected')
    })
}

parentDiv.addEventListener('click',(e)=>{
    let curCard = e.target;
    if (curCard.id === "card-section"){
        return false;
    }
    clickCount++;
    if(clickCount<3){
       if(clickCount===1){
        firstCard = curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected')
       }else{
        secondCard = curCard.parentNode.dataset.name;
        curCard.parentNode.classList.add('card_selected')
       }

       if(firstCard !== "" && secondCard !==""){
        if(firstCard === secondCard){
            // curCard.classList.add('card_match')
            setTimeout(()=>{
                card_matches()
                resetGame()
            },1500)
            
        }else{
            setTimeout(()=>{
                resetGame()
            },1500)
        }
       }
    }
    
})

for(let i=0;i<suffledChild.length;i++){
    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = suffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${suffledChild[i].img})`;

    const frontDiv = document.createElement('div')
    frontDiv.classList.add('front-card')

    const backDiv  = document.createElement('div')
    backDiv.classList.add('back-card')

    backDiv.style.backgroundImage = `url(${suffledChild[i].img})`

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(frontDiv)
    childDiv.appendChild(backDiv)
}