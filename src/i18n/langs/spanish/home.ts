export const home = {

    title: "Gestor de Contraseñas",
    subtitle: "El gestor de contraseñas más seguro",

    form: {
        input: {
            placeholder: "Contraseña Maestra"
        },
        submit: "Acceder"
    },

    blocks: {
        password: {
            plural: "Contraseñas",
            singular: "Contraseña"
        },
        folder: {
            plural: "Carpetas",
            singular: "Carpeta"
        },
        alphabet: {
            plural: "Alfabetos",
            singular: "Alfabeto"
        }
    },

    buttons: {
        info: "¿Cómo funciona?",
        use: "¿Cómo se usa?",
        faq: "FAQs",
    },

    modal: {
        info: {
            title: "¿Cómo funciona?",
            body: `
                <p>
                    Este gestor y generador de contraseñas funciona gracias a la combinación de varios elementos y la generación de un hash único. Cuando introduces una contraseña maestra, un identificador, y un alfabeto, el sistema genera un hash único para esa información, lo cual genera una contraseña totalmente única.
                </p>
                <p>
                    Gracias a un sistema de seeds, al tener siempre un mismo hash, siempre obtendrás una seed única que será utilizada para generar la contraseña final.
                </p>
                <p>
                    Este sistema da la posibilidad de que metiendo los mismos datos, siempre va a generar la misma cadena de texto (contraseña), por lo tanto es un sistema con el que no necesitarás guardar ni la contraseña maestra ni las contraseñas generadas.
                </p>
            `
        },
        use: {
            title: "¿Cómo se usa?",
            body: `
                <p>
                    Lo primero de todo, necesitas una contraseña maestra que nadie sepa, que no hayas usado en ninguna web y que no hayas guardado en ningún sitio. Mantén esta contraseña maestra en tu cabeza.
                </p>
                <p>
                    Introduce esa contraseña maestra y accede. A la izquierda de arriba a abajo verás una carpeta, aquí es donde podrás crear y "guardar" tus contraseñas.
                </p>
                <p>
                    En la parte inferior verás una carpeta con un + donde podrás crear una nueva carpeta. En la llave podrás generar una contraseña sin guardarla. En A-Z puedes gestionar los alfabetos usados para generar tus contraseñas. En la tuerca puedes cambiar las opciones de la web, y debajo del todo puedes cambiar entre el modo día y noche del diseño de la web.
                </p>
                <p>
                    Para generar una contraseña accede o crea una carpeta, y pulsa sobre "Nueva contraseña". Te aparecerá un pequeño formulario donde introducir información con la que podrás generar una contraseña segura.
                </p>
                <p>
                    Al pulsar sobre "Crear contraseña" se guardará la información que has usado para generar esa contraseña, pero no se guardará la contraseña como tal.
                </p>
                <p>
                    Cabe destacar que esta web funciona de manera local en tu navegador. Una vez nuestro servidor te muestra la web, nada de lo que escribas y hagas en la web será enviado a nuestros servidores.
                </p>
            `
        },
        faq: {
            title: "Preguntas Frecuentes",
            body: `
                <h2>
                    ¿Qué hace que este gestor de contraseñas sea tan seguro?
                </h2>
                <p>
                    Este gestor de contraseñas es una web estática de código abierto que trabaja únicamente en tu navegador y la información que escribes no se envía a ningún servidor. Además de esto, esta web no almacena ninguna contraseña en ningún sitio, únicamente almacena la información necesaria para generar tus contraseñas. Si alguien obtiene esa información pero no sabe qué contraseña maestra has usado, jamás podrá adivinar tus contraseñas.
                </p>
                <h2>
                    ¿Puedo exportar los datos a otro navegador o smartphone?
                </h2>
                <p>
                    Sí, puedes exportar e importar los datos que están guardados en tu navegador.
                </p>
                <h2>
                    ¿Se almacenan algunos datos?
                </h2>
                <p>
                    Sí, se almacenan datos como las carpetas creadas o la información necesaria para generar contraseñas (identificador, longitud y alfabeto). También se almacenan alfabetos, que puedes modificar, eliminar o crear nuevos. Estos son datos que, sin conocer la contraseña maestra, son totalmente irrelevantes.
                </p>
                <h2>
                    ¿Qué sucede si no recuerdo mi contraseña maestra?
                </h2>
                <p>
                    Para que el sistema pueda generar las contraseñas que has utilizado para registrarte en sitios web o servicios, es necesario que siempre introduzcas la misma contraseña maestra. Si no recuerdas tu contraseña maestra o introduces otra contraseña, las contraseñas que se mostrarán serán completamente diferentes a las que utilizaste.
                </p>
                <p>
                    Por cómo funciona este sistema, si no recuerdas tu contraseña maestra, no podrás recuperar las contraseñas. Por ello es importante que memorices una contraseña maestra sencilla pero segura.
                </p>
                <h2>
                    ¿Dónde se almacenan los datos?
                </h2>
                <p>
                    Todos los datos se almacenan localmente en tu navegador. Este sitio web no envía ninguna información que escribas aquí a ningún servidor o base de datos. No sabemos quién eres.
                </p>
                <h2>
                    ¿Por qué es gratis esto?
                </h2>
                <p>
                    ¿Por qué no? 👽
                </p>
                
            `
        }
    }

}