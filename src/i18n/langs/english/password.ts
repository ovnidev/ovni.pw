export const password = {

    empty: `No passwords found. Click on "<strong>New Password</strong>" to create new one!`,

    head: {
        button: {
            create: "New Password",
            update: "Modify Password",
            delete: "Delete Password"
        }
    },
    
    modal: {
        create: {
            title: "Create Password"
        },
        update: {
            title: "Modify Password"
        },
        delete: {
            title: "Delete Password"
        },
        otp: {
            title: "Generate One Time Password"
        }
    },
    
    form: {
        create: {
            name: {
                label: "Name",
                placeholder: "Display Name"
            },
            identifier: {
                label: "Identifier",
                placeholder: "Password identifier",
                helper: "This is used to generate the password."
            },
            alphabet: {
                label: "Alphabet",
                helper: "This is used to generate the password."
            },
            length: {
                label: "Length"
            },
            password: {
                label: "Password",
                placeholder: "Generated Password"
            },
            submit: "Create Password"
        },
        update: {
            name: {
                label: "Name",
                placeholder: "Display Name"
            },
            identifier: {
                label: "Identifier",
                placeholder: "Password Identifier",
                helper: "This is used to generate the password."
            },
            alphabet: {
                label: "Alphabet",
                helper: "This is used to generate the password."
            },
            length: {
                label: "Length"
            },
            password: {
                label: "Password",
                placeholder: "Generated Password"
            },
            submit: "Modify Password"
        },
        delete: {
            body: "Are you sure you want to delete <strong>{{name}}</strong>?",
            submit: "Delete!",
            cancel: "Cancel"
        }
    }
}