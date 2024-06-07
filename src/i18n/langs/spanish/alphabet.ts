export const alphabet = {

    empty: `No se han encontrado alfabetos. Haz click en "<strong>Nuevo alfabeto</strong>" para crear uno!`,

    head: {

        title: "Alfabeto",
        subtitle: "Los alfabetos se usan para generar las contraseñas.",

        button: {
            create: "Nuevo alfabeto"
        },

    },

    button: {
        update: {
            name: "Actualizar alfabeto"
        },
        delete: {
            name: "Eliminar alfabeto"
        }
    },

    form: {
        create: {
            name: {
                label: "Nombre",
                placeholder: "Nombre para mostrar"
            },
            identifier: {
                label: "Identificador",
                placeholder: "ej. alfabeto-1",
                helper: "Esto se utiliza para generar la contraseña."
            },
            characters: {
                label: "Alfabeto",
                placeholder: "Caracteres (ej. abcdef...)",
                helper: "Esto se utiliza para generar la contraseña."
            },
            description: {
                label: "Descripción",
                placeholder: "Descripción"
            },
            submit: "Crear alfabeto"
        },
        update: {
            name: {
                label: "Nombre",
                placeholder: "Nombre para mostrar"
            },
            identifier: {
                label: "Identificador",
                placeholder: "ej. alfabeto-1",
                helper: "Esto se utiliza para generar la contraseña."
            },
            characters: {
                label: "Alfabeto",
                placeholder: "Caracteres (ej. abcdef...)",
                helper: "Esto se utiliza para generar la contraseña."
            },
            description: {
                label: "Descripción",
                placeholder: "Descripción"
            },
            submit: "Modificar alfabeto"
        },
    },

    modal: {

        info: {
            title: "¿Cómo funciona?",
            body: `
                <p>
                    Estos alfabetos se utilizan al crear contraseñas. Desde aquí, puedes eliminar, modificar o crear nuevos alfabetos que se adapten a tus necesidades.
                </p>
                <p>
                    Debes tener cuidado al modificar un alfabeto, porque si has generado una contraseña con un alfabeto y luego lo modificas, la contraseña también se modificará.
                </p>
                <p>
                    Las contraseñas se generan creando un hash que incluye el identificador del alfabeto, además de usar los caracteres del alfabeto en la longitud y el orden en que están. Por lo tanto, modificar un alfabeto cambiaría completamente las contraseñas generadas.
                </p>
            `
        },

        create: {
            title: "Crear alfabeto"
        },

        update: {
            title: "Modificar alfabeto"
        },

        delete: {
            title: "Eliminar alfabeto",
            body: `¿Estás seguro? Las contraseñas que utilizan el alfabeto "<strong>{{name}}</strong>" <strong>quedarán inutilizables</strong> y no podrán ser mostradas.`,
            submit: "Sí, eliminar alfabeto!",
            cancel: "Cancelar"
        }        

    }

}