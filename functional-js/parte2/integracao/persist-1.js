const storage = require('node-persist');

async function main() {
    await storage.init();
    await storage.setItem('someNumber', 42);
    await storage.setItem('users', [{ ID: 1, name: 'Joao' }]);
    console.log('dados salvos');
}

main().catch(console.error);