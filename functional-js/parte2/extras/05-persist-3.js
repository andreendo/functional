const storage = require('node-persist');

async function main() {
    await storage.init();
    const users = await storage.getItem('users');
    console.log(users);
    users.push({ ID: 2, nome: 'carla' });
    users.push({ ID: 3, nome: 'maria' });
    await storage.updateItem('users', users);
}

main().catch(console.error);