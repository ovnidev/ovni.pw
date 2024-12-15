export const home = {

    title: "Password Manager",
    subtitle: "The safest password manager",

    form: {
        input: {
            placeholder: "Master Password"
        },
        submit: "Access"
    },

    blocks: {
        password: {
            plural: "Passwords",
            singular: "Password"
        },
        folder: {
            plural: "Folders",
            singular: "Folder"
        },
        alphabet: {
            plural: "Alphabets",
            singular: "Alphabet"
        }
    },

    buttons: {
        info: "How this works?",
        use: "How to use it?",
        faq: "FAQ's",
    },

    modal: {
        info: {
            title: "How this works?",
            body: `
                <p>
                    This password manager and generator works by combining several elements and generating a unique hash. When you input a master password, an identifier, and an alphabet, the system generates a unique hash for that information, resulting in a completely unique password.
                </p>
                <p>
                    Thanks to a seed system, always having the same hash ensures you will always get a unique seed used to generate the final password.
                </p>
                <p>
                    This system allows for generating the same text string (password) every time with the same input data, eliminating the need to store either the master password or the generated passwords.
                </p>
            `
        },
        use: {
            title: "How to use it?",
            body: `
                <p>
                    First of all, you need a master password that nobody knows, that you haven't used on any website, and that you haven't stored anywhere. Keep this master password in your head.
                </p>
                <p>
                    Enter your Master Password and access. On the left from top to bottom, you'll see a folder; this is where you can create and "save" your passwords.
                </p>
                <p>
                    At the bottom, you'll see a folder with a + where you can create a new folder. In the key, you can generate a password without saving it. In A-Z, you can manage the alphabets used to generate your passwords. In the screw, you can change the website's options, and at the very bottom, you can switch between the day and night modes of the website design.
                </p>
                <p>
                    To generate a password, access or create a folder, and click on "New Password". A small form will appear where you can enter information to generate a secure password.
                </p>
                <p>
                    When you click on "Create Password", the information you used to generate that password will be saved, but the password itself will not be saved.
                </p>
                <p>
                    It's worth noting that this website works locally in your browser. Once our server displays the website to you, nothing you type or do on the website will be sent to our servers.
                </p>
            `
        },
        faq: {
            title: "Frequently Asked Questions",
            body: `
                <h2>
                    What makes this password manager so secure?
                </h2>
                <p>
                    This password manager is an open-source static website that operates solely within your browser, and the information you input is not sent to any server. Furthermore, this website does not store any passwords anywhere; it only retains the information necessary to generate your passwords. Even if someone obtains that information but doesn't know which master password you've used, they will never be able to guess your passwords.
                </p>
                <h2>
                    Can I export the data to another browser or smartphone?
                </h2>
                <p>
                    Yes, you can export and import the data that is saved in your browser.
                </p>
                <h2>
                    Is any data stored?
                </h2>
                <p>
                    Yes, data such as the folders created or the information necessary to generate passwords (identifier, length and alphabet). Alphabets are also stored, which you can modify, delete or create new ones. These are data that, without knowing the master password, are totally irrelevant.
                </p>
                <h2>
                    What happens if I don't remember my master password?
                </h2>
                <p>
                    So that the system can generate the passwords that you have used to register on websites or services, it is necessary that you always enter the same master password. If you do not remember your master password or enter another password, the passwords that will be displayed will be completely different from the ones you used.
                </p>
                <p>
                    Due to how this system operates, if you forget your master password, you won't be able to recover the passwords. That's why it's important to memorize a master password that is both simple and secure.
                </p>
                <h2>
                    Where is the data stored?
                </h2>
                <p>
                    All data is stored locally in your browser. This website does not send any information you write here to any server or database. We don't know who you are.
                </p>
                <h2>
                    Why is this free?
                </h2>
                <p>
                    Why not? 👽
                </p>
            `
        }
    }

}