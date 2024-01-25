let heading = document.querySelector('h1');
let para = document.querySelector('p');
let button = document.querySelector('button');

let limit = 1;
const apiKey = 'iyVhKkOqHb9AVcSsM9bj5w==HmyhOJGuQKS4gJmT';

button.addEventListener('click', dadJoke);



// using XHR 

// function dadJoke() {
//     para.innerHTML = 'Upadating...';

//     const jokeGenerate = new XMLHttpRequest();
//     jokeGenerate.open('GET', 'https://api.api-ninjas.com/v1/dadjokes?limit=1');
//     jokeGenerate.setRequestHeader('X-API-KEY', apiKey);

//     jokeGenerate.onload = () => {
//         let jokeparse = JSON.parse(jokeGenerate.response);
//         setTimeout(() => {
//             para.innerHTML = jokeparse[0].joke;
//         }, 500)
//     }

//     jokeGenerate.send();
// }




// using fetch 

function dadJoke(){
    para.innerHTML = 'Updating . . .';

    const jokeGenerate = fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
        headers: {
            'X-API-KEY': apiKey
        }
    })

    jokeGenerate.then((data) => {
       return data.json();
    })
    .then((data) => {
        para.innerHTML = data[0].joke;
    })
  
}