export const settings = {

    title: "Settings",

    sidebar: {
        general: "General",
        export: "Export / Import",
        danger: "Danger Zone"
    },

    general: {
        
        title: "General",

        length: {
            name: "Password Length",
            description: "Default length when generating new passwords"
        },
        show: {
            name: "Show Passwords",
            description: "Show passwords by default"
        },
        alphabet: {
            name: "Alphabet",
            description: "Default alphabet when generating new passwords"
        },
        sorting: {
            folder: {
                name: "Sort Folders",
                description: "Sort folders by dragging"
            },
            password: {
                name: "Sort Passwords",
                description: "Sort passwords by dragging"
            }
        }
        
    },

    export: {

        title: "Export / Import",

        export: {
            name: "Export",
            description: "Export all stored data",
            submit: "Export Data",
            alert: {
                success: "Data has been successfully exported!"
            }
        },

        import: {
            name: "Import",
            description: "Select the '.ovni' file you want to import",
            submit: "Import Data",
            alert: {
                success: "Data has been successfully imported!",
                error: "Data not imported! The master password is incorrect or the data is corrupted."
            }
        }

    },

    danger: {

        title: "Danger Zone",

        reset: {

            name: "Reset",
            description: "Reset all data to default values",
            submit: "Reset Data",

            modal: {
                title: "Reset Data",
                body: "Are you sure you want to reset all data to default values?",
                submit: "Reset!",
                cancel: "Cancel"
            },

            alert: {
                success: "Data has been successfully reset!"
            }

        }

    }
}