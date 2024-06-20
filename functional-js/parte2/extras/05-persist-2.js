const storage = require('node-persist');

async function main() {
    await storage.init();
    const some = await storage.getItem('someNumber');
    console.log(some);
    const users = await storage.getItem('users');
    console.log(users);
}

main().catch(console.error);