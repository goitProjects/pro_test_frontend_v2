const qaTheoryEs = [
    {
        question: '¿De qué es responsable el \'CI\' en las pruebas?',
        questionId: 1,
        answers: [
            'Conectar la interfaz',
            'Nada',
            'Integración continua',
            'Centilitros'
        ],
        rightAnswer: 'Integración continua'
    },
    {
        question: 'Etapas de las pruebas. Seleccione la secuencia correcta.',
        questionId: 2,
        answers: [
            'Gestión de requisitos - Análisis del producto - Desarrollo de la estrategia de pruebas y planificación de los procedimientos de control de calidad - Creación de la documentación de pruebas - Pruebas de prototipos - Pruebas principales - Estabilización - Funcionamiento',
            'Análisis del producto - Trabajo con requisitos - Desarrollo de una estrategia de pruebas y planificación de procedimientos de control de calidad - Creación de documentación de pruebas - Pruebas de prototipos - Pruebas principales - Estabilización - Funcionamiento',
            'Gestión de requisitos - Análisis del producto - Desarrollo de la estrategia de pruebas y planificación de los procedimientos de control de calidad - Pruebas de prototipos - Creación de la documentación de pruebas - Pruebas principales - Estabilización - Funcionamiento',
            'Gestión de requisitos - Análisis del producto - Desarrollo de la estrategia de pruebas y planificación de los procedimientos de control de calidad - Creación de la documentación de pruebas - Pruebas de prototipos - Estabilización - Pruebas principales - Funcionamiento'
        ],
        rightAnswer: 'Análisis del producto - Trabajo con requisitos - Desarrollo de una estrategia de pruebas y planificación de procedimientos de control de calidad - Creación de documentación de pruebas - Pruebas de prototipos - Pruebas principales - Estabilización - Funcionamiento'
    },
    {
        question: '¿Cuáles son las principales ventajas de las pruebas automatizadas?',
        questionId: 3,
        answers: [
            'Rápida ejecución',
            'Reducción de los costes de mantenimiento del software',
            'Ahorra tiempo al tester.',
            'Posibilidad de ejecución fuera del horario laboral.',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Todas las opciones son correctas'
    },
    {
        question: '¿Cuáles son los principales tipos de localizadores en Selenium?',
        questionId: 4,
        answers: [
            'ID, ClassName',
            'Name, TagName',
            'LinkText, PartialLinkText',
            'Xpath, CSS Selector, DOM',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Todas las opciones son correctas'
    },
    {
        question: 'Seleccione un ejemplo de Absolute XPath correcto.',
        questionId: 5,
        answers: [
            'html/body/div/[3]/div/div/[1]/div/div/div[1]/div/input',
            'html/body/div(3)/div/div(1)/div/div/div)1)/div/input',
            'html\bodydiv[3]divdiv[1]divdivdiv[1]divinput/',
            'html//body/div[3]/div/div[1]/div/div/div[1]/div/input',
            'html/body/div[3]/div/div[1]/div/div/div[1]/div/input'
        ],
        rightAnswer: 'html/body/div[3]/div/div[1]/div/div/div[1]/div/input'
    },
    {
        question: 'La forma más común de ver elementos en el navegador Google Chrome en Windows es pulsando la tecla',
        questionId: 6,
        answers: [
            'F5',
            'F7',
            'F2',
            'F9',
            'F12'
        ],
        rightAnswer: 'F12'
    },
    {
        question: 'La forma más común de ver elementos en Google Chrome en Mac es utilizar la combinación de teclas',
        questionId: 7,
        answers: [
            'Cmd+Opt+O',
            'Cmd+Opt+R',
            'Cmd+Opt+J',
            'Cmd+Opt+N',
            'Cmd+Opt+W'
        ],
        rightAnswer: 'Cmd+Opt+J'
    },
    {
        question: 'navigate().back(). Este comando de navegación en Selenium:',
        questionId: 8,
        answers: [
            'Devuelve al usuario a la página anterior del historial del navegador.',
            'Permite al usuario ir a la página siguiente según el historial del navegador.',
            'Se utiliza para actualizar la página del navegador',
            'Permite al usuario abrir una nueva ventana en el navegador e ir a la URL especificada.',
            'No existe tal comando.'
        ],
        rightAnswer: 'Devuelve al usuario a la página anterior del historial del navegador.'
    },
    {
        question: 'navigate().forward(). Este comando de navegación en Selenium:',
        questionId: 9,
        answers: [
            'Devuelve al usuario a la página anterior del historial del navegador.',
            'Permite al usuario ir a la página siguiente según el historial del navegador.',
            'Se utiliza para actualizar la página del navegador',
            'Permite al usuario abrir una nueva ventana en el navegador e ir a la URL especificada.',
            'No existe tal comando.'
        ],
        rightAnswer: 'Permite al usuario ir a la página siguiente según el historial del navegador.'
    },
    {
        question: 'navigate().refresh(). Este comando de navegación en Selenium:',
        questionId: 10,
        answers: [
            'Devuelve al usuario a la página anterior del historial del navegador.',
            'Permite al usuario ir a la página siguiente según el historial del navegador.',
            'Se utiliza para actualizar la página del navegador',
            'Permite al usuario abrir una nueva ventana en el navegador e ir a la URL especificada.',
            'No existe tal comando.'
        ],
        rightAnswer: 'Se utiliza para actualizar la página del navegador'
    },
    {
        question: 'navigate().to(). Este comando de navegación en Selenium:',
        questionId: 11,
        answers: [
            'Devuelve al usuario a la página anterior del historial del navegador.',
            'Permite al usuario ir a la página siguiente según el historial del navegador.',
            'Se utiliza para actualizar la página del navegador',
            'Permite al usuario abrir una nueva ventana en el navegador e ir a la URL especificada.',
            'No existe tal comando.'
        ],
        rightAnswer: 'Permite al usuario abrir una nueva ventana en el navegador e ir a la URL especificada.'
    },
    {
        question: '¿Cuál de los siguientes es un atributo de un informe de error (Bug Report)?',
        questionId: 12,
        answers: [
            'Summary',
            'Attachments',
            'Status',
            'Severity',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Continuous Integration'
    },
    {
        question: 'Pruebas relacionadas con la seguridad de la aplicación y destinadas a evitar problemas que puedan afectar a la integridad y estabilidad de la aplicación:',
        questionId: 13,
        answers: [
            'Penetration testing',
            'Fuzzy testing',
            'Ramp testing',
            'Vulnerability testing',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Vulnerability testing'
    },
    {
        question: '_____  es un defecto existente que aún no ha provocado un fallo porque todavía no se han dado las condiciones que lo causan.',
        questionId: 14,
        answers: [
            'Un defecto oculto y camuflado',
            'Un defecto oculto',
            'Defecto camuflado',
            'Un defecto',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Un defecto oculto'
    },
    {
        question: 'Las pruebas que van más allá del rendimiento normal son',
        questionId: 15,
        answers: [
            'Stress testing',
            'Performance testing',
            'Functional testing',
            'Centiliter',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Stress testing'
    },
    {
        question: 'Un probador realiza una prueba para evaluar si el sistema responde a la solicitud de un usuario de rellenar un campo específico mediante una lista desplegable que contiene una lista de valores. El probador realiza:',
        questionId: 16,
        answers: [
            'Stress testing',
            'Regression testing',
            'White box testing',
            'Black box testing',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Black box testing'
    },
    {
        question: 'La verificación del campo onBlur se realiza',
        questionId: 17,
        answers: [
            'Cuando pasamos el cursor por encima del botón.',
            'Cuando empezamos a introducir datos.',
            'Cuando pulsamos el botón de enviar.',
            'Después de introducir datos.',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Cuando pulsamos el botón de enviar.'
    },
    {
        question: '¿Qué hay de malo con las pruebas Smoke y Sanity?',
        questionId: 18,
        answers: [
            'Si se realizan ambas, primero se realiza la prueba Sanity y después la Smoke.',
            'Las pruebas Sanity también se denominan Pruebas de Aceptación.',
            'Las pruebas de Smoke y Sanity pueden realizarse automáticamente.',
            'Las pruebas Smoke que se realizan para un conjunto definido, también se conocen como pruebas de ensamblaje.',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Si se realizan ambas, primero se realiza la prueba Sanity y después la Smoke.'
    },
    {
        question: 'El principio de prueba de la "paradoja de los pesticidas" establece:',
        questionId: 19,
        answers: [
            'La búsqueda y eliminación de defectos no sirve de nada si el sistema es inestable.',
            'Las pruebas se realizan de forma diferente en otros contextos.',
            'Los casos de prueba deben revisarse y validarse periódicamente.',
            'Los módulos de agrupación contienen el mayor número de defectos.',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Los casos de prueba deben revisarse y validarse periódicamente.'
    },
    {
        question: '¿Qué tipo de prueba permite al tester evaluar el comportamiento del software cuando se producen excepcionalidades?',
        questionId: 20,
        answers: [
            'Fallo Injection test',
            'Passive testing',
            'Fuzzy testing',
            'Centiliter',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Fallo Injection test'
    },
    {
        question: 'Las pruebas de caja blanca no están relacionadas con',
        questionId: 21,
        answers: [
            'La toma de decisiones',
            'Las causas y consecuencias de la cobertura',
            'Varias condiciones de cobertura.',
            'La notificación de cobertura.',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Las causas y consecuencias de la cobertura'
    },
    {
        question: '¿Cuál de las siguientes no es una prueba basada en especificaciones?',
        questionId: 22,
        answers: [
            'Cambio de estado.',
            'Tabla de toma de decisiones.',
            'Análisis de los valores límite.',
            'Flujo de datos.',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Flujo de datos.'
    },
    {
        question: '¿Cuál es el orden de prioridad de las pruebas?',
        questionId: 23,
        answers: [
            'Sistema >> Recepción >> Integración',
            'Sistema >> Integración >> Pruebas de aceptación',
            'Módulo >> Integración >> Pruebas del sistema',
            'Módulo >> Sistema >> Pruebas de aceptación',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Módulo >> Integración >> Pruebas del sistema'
    },
    {
        question: 'La aplicación no ofrece la configuración esperada por el cliente, es un ejemplo',
        questionId: 24,
        answers: [
            'High severity and high priority',
            'High severity and low priority',
            'Low Severity and Low Priority',
            'Low Severity and High Priority',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'High severity and low priority'
    },
    {
        question: '¿Cuál es el balance de esfuerzos necesario para corregir un defecto en las fases de requisitos, diseño, codificación e implementación?',
        questionId: 25,
        answers: [
            '1: 8: 12: 100',
            '1: 4: 7: 10',
            '1: 10: 100: 1000',
            '1: 6: 10: 1000',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: '1: 6: 10: 1000'
    },
    {
        question: '¿Cuál es el porcentaje de los costes de desarrollo de software?',
        questionId: 26,
        answers: [
            '10-20',
            '40-50',
            '5-10',
            '70-80',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: '40-50'
    },
    {
        question: '¿Cuál de los siguientes no es un modelo iterativo?',
        questionId: 27,
        answers: [
            'Incremental',
            'Spiral Model',
            'V model',
            'RAD',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'V model'
    },
    {
        question: 'El uso de la verificación y la validación',
        questionId: 28,
        answers: [
            ' Solo recursos externos ',
            'Solo recursos internos',
            'Recursos externos e internos, respectivamente.',
            'Recursos internos y externos, respectivamente.',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Recursos internos y externos, respectivamente.'
    },
    {
        question: 'Tras abrir un enlace al sitio web, el usuario recibe el mensaje "Esta sección de nuestro sitio web se está actualizando". ¿A qué se debe este error?',
        questionId: 29,
        answers: [
            'Error de URL',
            'Error funcional',
            'Error estructural',
            'Premisa estructural.',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Todas las opciones son incorrectas'
    },
    {
        question: '¿Existe una metodología de pruebas que incluya pruebas con diferentes rangos de datos de entrada válidos e inválidos, funcionalidad de un módulo o componente específico?',
        questionId: 30,
        answers: [
            'Baseline testing',
            'Gorilla Testing',
            'Monkey testing',
            'Agile testing',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Gorilla Testing'
    },
    {
        question: 'Las pruebas focalizadas pertenecen a __________',
        questionId: 31,
        answers: [
            'Usability testing',
            'Component testing',
            'Acceptance testing',
            'Performance testing',
            'Todas las opciones son correctas',
            'Todas las opciones son incorrectas'
        ],
        rightAnswer: 'Usability testing'
    }
];
export default qaTheoryEs;