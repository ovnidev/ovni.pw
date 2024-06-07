export const password = {

    empty: `No se han encontrado contraseñas. Haz click en "<strong>Nueva contraseña</strong>" para crear una!`,

    no_alphabet: "Esta contraseña ha sido generada con un alfabeto que ya no existe. Elimínala y genera una nueva.",

    head: {
        button: {
            create: "Nueva contraseña",
            update: "Modificar contraseña",
            delete: "Eliminar contraseña"
        }
    },

    modal: {

        create: {
            title: "Crear contraseña"
        },
        update: {
            title: "Modificar contraseña"
        },
        delete: {
            title: "Eliminar contraseña"
        },
        otp: {
            title: "Generar contraseña de un solo uso (OTP)"
        },

        no_alphabets: "Crea al menos un alfabeto para poder generar una contraseña."
    },

    form: {
        create: {
            name: {
                label: "Nombre",
                placeholder: "Nombre para mostrar",
            },
            identifier: {
                label: "Identificador",
                placeholder: "Identificador de contraseña",
                helper: "Esto se usa para generar la contraseña."
            },
            alphabet: {
                label: "Alfabeto",
                helper: "Esto se usa para generar la contraseña."
            },
            length: {
                label: "Longitud"
            },
            password: {
                label: "Contraseña",
                placeholder: "Contraseña generada"
            },
            submit: "Crear contraseña"
        },
        update: {
            name: {
                label: "Nombre",
                placeholder: "Nombre para mostrar",
            },
            identifier: {
                label: "Identificador",
                placeholder: "Identificador de contraseña",
                helper: "Esto se usa para generar la contraseña."
            },
            alphabet: {
                label: "Alfabeto",
                helper: "Esto se usa para generar la contraseña."
            },
            length: {
                label: "Longitud"
            },
            password: {
                label: "Contraseña",
                placeholder: "Contraseña generada"
            },
            submit: "Modificar contraseña"
        },
        delete: {
            body: "¿Estás seguro que quieres eliminar <strong>{{name}}</strong>?",
            submit: "Eliminar!",
            cancel: "Cancelar"
        }
    }

}