import download from 'download';


(async () => {
    const start = new Date();

    await Promise.all([
        download('https://github.com/andreendo/eta/blob/master/rawdata/randomModelsResults-raw.txt', 'res'), 
        download('https://github.com/andreendo/noderacer/blob/master/package.json', 'res'), 
        download('https://github.com/andreendo/eta/blob/master/rawdata/realModelsResults-raw.txt', 'res'), 
        download('https://f-droid.org/repo/index.xml', 'res')
    ]);
    const execTime = new Date() - start;
    console.log(`Exec time: ${execTime} ms`);
})();

// refatorar para async-await