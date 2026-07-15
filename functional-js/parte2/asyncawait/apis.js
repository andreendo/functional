import axios from 'axios';


(async () => {
    const res = await Promise.all([
        axios.get('https://bored-api.appbrewery.com/random'),
        axios.get('https://catfact.ninja/fact')
    ]);
    console.log('Random activity:', res[0].data.activity);
    console.log('Random cat fact:', res[1].data.fact);
})();

// refatorar para usar promise.all
