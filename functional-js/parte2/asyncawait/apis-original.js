import axios from 'axios';


const p1 = axios.get('https://bored-api.appbrewery.com/random');
p1.then(res => {
    console.log('***********');
    console.log('Random activity:', res.data.activity);
});

const p2 = axios.get('https://catfact.ninja/fact');
p2.then(res => {
    console.log('***********');
    console.log('Random cat fact:', res.data.fact);
});

// refatorar para usar promise.all and then async await
