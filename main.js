let sunday = 0
let monday = 1
let tuesday = 2
let wednesday = 3
let thursday = 4
let friday = 5
let saturday = 6

let today = new Date().getDay() // hardcode this for testing
let hoursLogged = 38                                // TODO: Replace with a fetch to a database
let username = prompt("Enter your username here:")  // TODO: Replace with a fetch
let fridayIsHoliday = true                          // TODO: Replace with a fetch
let nearOvertimeLimit = 35

let greeting = `
    <h2>
        Good morning, ${username}! As always, thank you for your service to Archnemesis, Inc. Your contributions are valuable.
    </h2>
`

if(today === monday) {
    greeting += `
        <h4>
            It's Monday! Be sure to check your email. 📧 Our CEO 👩🏽‍💼 has a message for you, on the topic of her favorite cryptocurrency.
        </h4>
    `
} else if (today === tuesday) {
    greeting += `
        <h4>
            It's TACO TUESDAY. 🌮 Please, as usual, line up in orderly fashion with your Super Soakers ready by Noon in order to receive your free Gluten-Free Tacos.
        </h4>
    `
} else if (today === wednesday) {
    greeting += `
        <h4>
            It is Weeping Wednesday. 😭😢😭 A crying pod will be available for each of you at the scheduled time. Please see your email for further details. GET YOUR WEEP ON!
        </h4>
    `
} else if (today === thursday) {
    greeting += `
        <h4>
            It is Theramin Thursday! You will find your cheap ass theramin under your desk in your cubicle. We have ear plugs in. Go to town. Have fun!
        </h4>
    `

    if (fridayIsHoliday) {
        greeting += `
            <h4>
                Don't forget: Tomorrow is a holiday! It is a long weekend. Enjoy your paid holiday (the government makes us pay you for it).
            </h4>
        ` 
    }
} else if (today === friday) {
    greeting += `
        <h4>
            Freak Out Friday! It is that time of the week where all of our procrastination catches up with us. The desperation is setting in! It is time to get actual work done, but you're going to do it very fast, because IT IS FRIDAY!
        </h4>
    `

    if (fridayIsHoliday) {
        greeting += `
            <h4>
                Hey! It's a holiday today. Are you sure you are supposed to be working? Please check with your manager.
            </h4>
        ` 
    }
} else {
    greeting += `
        <h4>
            It is a weekend. I'm sorry that you are here. But alas, I am only a computer. Ha ha. You dork! You have to work on a weekend!
        </h4>
    `
}


// Step 4. Near overtime warning
if (hoursLogged > nearOvertimeLimit) {                // String interpolation
    greeting += `
        <h3>
            Beware! You have now logged ${ hoursLogged } hours. You are quickly approaching overtime!
        </h3>
    `
}


document.write(greeting)

// TODO: Change the code later to make our app more friendly for various languages:
// new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date())