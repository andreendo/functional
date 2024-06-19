// greeting('Welcome', 'Estevan');
// greeting('Welcome', 'Maria');
// greeting('Welcome', 'Andre');

const curryGreeting = greeting => {
    return name => {
        console.log(greeting + ' ' + name);
    }
}

const welcomeGreet = curryGreeting('Welcome');
welcomeGreet('Estevan');
welcomeGreet('Maria');
welcomeGreet('Andre');