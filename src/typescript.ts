type User = {
    name: string 
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

const userEnter = {
    name: 'Davi Luiz',
    email: "daviluiz@.com",
    address: {
        city: "San Francisco",
        state: "CA",
    }
}

const messageWelcome = showWelcomeMessage(userEnter);
