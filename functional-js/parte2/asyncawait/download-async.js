const download = require('download');

(async () => {
    const start = new Date();

    const p1 = download('https://github.com/andreendo/eta/blob/master/rawdata/randomModelsResults-raw.txt', 'res');
    const p2 = download('https://github.com/andreendo/noderacer/blob/master/package.json', 'res');
    const p3 = download('https://github.com/andreendo/eta/blob/master/rawdata/realModelsResults-raw.txt', 'res');
    const p4 = download('https://f-droid.org/repo/index.xml', 'res');

    await Promise.all([p1, p2, p3, p4]);
    const execTime = new Date() - start;
    console.log(`Exec time: ${execTime} ms`);
})();

// refatorar para async-await