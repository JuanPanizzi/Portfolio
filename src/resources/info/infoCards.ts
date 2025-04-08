import chat from '../imageProjects/chat1.jpeg'
import feriado from '../imageProjects/feriad.jpg'
// import noFumar from '../imageProjects/Fumar.png'
import awp from '../imageProjects/awp-capture.png'
import hp from '../imageProjects/HpCaracteres.gif'
import memotest from '../imageProjects/memo-test.png'
import dev from '../imageProjects/dev-game.png'
import buscador from '../imageProjects/buscador.jpg'
import api from '../imageProjects/Api.png'
import estudio from '../imageProjects/estudio.jpg'
import beConnection from '../imageProjects/be-connections.jpg'

export const infoCards = [ 
    
    {
            title: "Be Connections",
            image: beConnection,
            technologies: ["Typescript", "React", "Tailwind" ],
            description: "Página web para comunidad de Nordelta para visualizar sus servicios y actividades.",
            urlDeploy: "https://be-connection-git-main-juanpanizzis-projects.vercel.app/",
            urlGithub: "https://github.com/JuanPanizzi/Be-connection"
        },
    {
        title: "Chat de Whatsapp",
        image: chat,
        description: "Chat de mensajes para comunicarse en tiempo real estilizado como el chat de whatsapp.",
        technologies: ["NestJs", "Websockets", "NodeJs", "Typescript", " React"," Tailwind"],
        urlDeploy: "https://chat-de-mensajes-client.onrender.com/",
        urlGithub: "https://github.com/JuanPanizzi/Chat-de-mensajes"
    },
    // {
    //     title: "Dejar de Fumar",
    //     image: noFumar,
    //     technologies: ["NestJs","NodeJs", "MongoDB", "Passport", "Jwt", "Typescript", "React", "Tailwind" ],
    //     description: "App con utilidades para ayudar a la gente a dejar de fumar. Integrado con registro, autenticación e inicio de sesión",
    //     urlDeploy: "https://no-fumar-app.onrender.com/",
    //     urlGithub: "https://github.com/JuanPanizzi/No-Fumar"
    // },
    {
        title: "API Rest",
        image: api,
        technologies: ["NestJs","NodeJs", "MongoDB", "Passport", "Jwt", "Typescript" ],
        description: "API REST con diferentes endpoints que permiten la creación, obtención, actualización y eliminación de usuarios y posteos. ",
        urlDeploy: "",
        urlGithub: "https://github.com/JuanPanizzi/API-REST"
    },
    {
        title: "Página Web",
        image: estudio,
        technologies: ["React", "Typescript", "Tailwind" ],
        description: "Página Web para estudio jurídico. ",
        urlDeploy: "https://debella.vercel.app/",
        urlGithub: "https://github.com/JuanPanizzi/Estudio-jur-dico.git"
    },
    {
        title: "App de Feriados",
        image: feriado,
        technologies: ["React", "JavaScript", "SASS", "CSS"],
        description: "App para ver los próximos feriados de Argentina, y también los que pasaron.",
        urlDeploy: "https://app-feriados.vercel.app/",
        urlGithub: "https://github.com/JuanPanizzi/app-feriados"
    },
    {
        title: "App Mercado (AWP)",
        image: awp,
        technologies: ["Service Workers", "React", "ChakraUI" , "Css"],
        description: "Aplicación Web Progresiva instalable para controlar los gastos del supermercado ",
        urlDeploy: "https://controlador-gastos-supermercado.vercel.app/",
        urlGithub: "https://github.com/JuanPanizzi/Control-Gastos-Supermercado"
    },
    {
        title: "Memo Test",
        image: memotest,
        technologies: ["React", "Bootstrap"],
        description: "Juego para practicar la memoria con temática de dibujitos animados de los años noventa.",
        urlDeploy: "https://memo-test-khaki.vercel.app/",
        urlGithub: "https://github.com/JuanPanizzi/memo-test.git"
    },
    {
        title: "Caracteres por Minuto",
        image: hp,
        technologies: ["React","JavaScript", "Bootstrap"],
        description: "Juego para practicar habilidades de Tipeo con temática de Harry Potter.",
        urlDeploy: "https://ejercitador-de-tipeo-app.vercel.app/",
        urlGithub: "https://github.com/JuanPanizzi/Ejercitador-de-tipeo-app "
    },
    {
        title: "Dev Game",
        image: dev,
        technologies: ["React", "JavaScript", "Css"],
        description: "Juego para sortear obstáculos basados en errores de diseño UI y UX y divertirse un ratito.",
        urlDeploy: "https://dev-game.vercel.app/",
        urlGithub: "https://github.com/JuanPanizzi/dev-game"
    },
    {
        title: "Buscador de Películas",
        image: buscador,
        technologies: ["React", "JavaScript", "Css"],
        description: "Aplicación web para buscar tus películas, series y programas favoritos.",
        urlDeploy: "https://buscador-peliculas-ruby.vercel.app/",
        urlGithub: "https://github.com/JuanPanizzi/buscador-peliculas"
    }
]