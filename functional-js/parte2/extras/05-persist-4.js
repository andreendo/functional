const storage = require('node-persist');

async function main() {
    await storage.init();
    storage.forEach(async (datum) => {
        console.log(datum.key, datum.value);
    });
}

main().catch(console.error);