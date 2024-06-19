const axios = require('axios').default;

(async () => {
    const res = await Promise.all([
        axios.get('https://www.boredapi.com/api/activity'),
        axios.get('https://cat-fact.herokuapp.com/facts/random')
    ]);
    console.log('Random activity:', res[0].data.activity);
    console.log('Random cat fact:', res[1].data.text);
})();

// refatorar para usar promise.all
