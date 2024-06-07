export const settings = {

    title: "Ajustes",

    sidebar: {
        general: "General",
        export: "Exportar / Importar",
        danger: "Zona de Peligro"
    },

    general: {
        
        title: "General",

        length: {
            name: "Longitud de contraseñas",
            description: "Longitud por defecto al generar nuevas contraseñas"
        },
        show: {
            name: "Mostrar contraseñas",
            description: "Mostrar las contraseñas por defecto"
        },
        alphabet: {
            name: "Alfabeto",
            description: "Alfabeto por defecto al generar nuevas contraseñas"
        },
        sorting: {
            folder: {
                name: "Ordenar carpetas",
                description: "Ordena las carpetas arrastrándolas"   
            },
            password: {
                name: "Ordenar contraseñas",
                description: "Ordena las contraseñas arrastrándolas"
            }
        }
        
    },

    export: {

        title: "Exportar / Importar",

        export: {
            name: "Exportar",
            description: "Exportar todos los datos almacenados",
            submit: "Exportar datos",
            alert: {
                success: "Los datos se han exportado correctamente!"
            }
        },

        import: {
            name: "Importar",
            description: "Selecciona el archivo '.ovni' que quieras importar",
            submit: "Importar_datos",
            alert: {
                success: "Los datos se han importado correctamente!",
                error: "Datos no importados! La contraseña maestra es incorrecta o los datos están corruptos."
            }
        }

    },

    danger: {

        title: "Zona de Peligro",

        reset: {

            name: "Restablecer",
            description: "Restablece todos los datos a sus valores por defecto",
            submit: "Restablecer datos",

            modal: {
                title: "Restablecer datos",
                body: "¿Estas seguro de que quieres restablecer todos los datos a sus valores por defecto?",
                submit: "Restablecer!",
                cancel: "Cancelar"
            },

            alert: {
                success: "Los datos se han restablecido correctamente!"
            }

        }

    }

}