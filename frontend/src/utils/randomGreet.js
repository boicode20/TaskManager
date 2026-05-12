const greetings = [
    (name) => `Welcome back, ${name}`,
    (name) => `Good to see you again, ${name}!`,
    (name) => `Hello, ${name} ready to get things done?`,
    (name) => `Hey ${name}, let’s make today productive`,
    (name) => `Welcome, ${name}! Let’s manage your tasks`,
    (name) => `Hi ${name}, here’s your workspace`,
    (name) => `Great to have you back, ${name}!`,
    (name) => `What’s on your list today, ${name}?`,
    (name) => `Ready to conquer your tasks, ${name}?`,
    (name) => `Let’s get started, ${name}!`
];

export const randomGreet = (name) => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex](name);
};