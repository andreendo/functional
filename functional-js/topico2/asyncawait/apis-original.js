const axios = require('axios').default;

const p1 = axios.get('https://www.boredapi.com/api/activity');
p1.then(res => {
    console.log('Random activity:', res.data.activity);
});

// const p2 = axios.get('https://cat-fact.herokuapp.com/facts/random');
const p2 = axios.get('https://catfact.ninja/fact');
p2.then(res => {
    console.log('Random cat fact:', res.data.fact);
});

// refatorar para usar promise.all and then async await
