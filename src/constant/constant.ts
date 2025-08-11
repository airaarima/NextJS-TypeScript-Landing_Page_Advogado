import { link } from "fs"

export const navLinks = [
    {
        id: 1,
        url: "/",
        label: "Início",
    },
    {
        id: 2,
        url: "#about",
        label: "Sobre",
    },
    {
        id: 3,
        url: "#services",
        label: "Serviços",
    },
    {
        id: 4,
        url: "#contact",
        label: "Contato",
    },
]

export const skills = [
    {
        id: 1,
        image: "/about/atendimento.png",
        title: "Atendimento Personalizado",
        description: "Relacionamento direto e pessoal."
    },
    {
        id: 2,
        image: "/about/etica-profissional.png",
        title: "Ética Profissional",
        description: "Transparência em todos os processos."
    },
    {
        id: 3,
        image: "/about/agilidade.png",
        title: "Agilidade",
        description: "Respostas rápidas e eficientes."
    }
]

export const services = [
    {
        id: 1,
        title: "Direito Civil",
        description: "Contratos, responsabilidade civil, direitos reais e obrigações.",
        icon: "/services/direito-civil.png",
        services: ["Contratos em geral", "Indenizações"]
    },
    {
        id: 2,
        title: "Direito Trabalhista",
        description: "Defesa em processos trabalhistas e consultoria preventiva.",
        icon: "/services/direito-trabalhista.png",
        services: ["Processos trabalhistas", "Consultoria preventiva", "Rescisões"]
    }
]

export const contactInfo = [
    {
        id: 1,
        type: "phone",
        title: "Telefone e WhatsApp",
        subtitle: "(51) 99342‑6635",
        description: "Seg à Sex: 9h às 18h",
        textButton: "Atendimento imediato",
        link: "https://wa.me/5551993426635?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20conversarmos%20sobre%20meu%20caso%21"
    },
    {
        id: 2,
        type: "email",
        title: "E-mail",
        subtitle: "mitiele.adv@gmail.com",
        description: "Resposta em até 24h",
        textButton: "Consulta gratuita",
        link: ""
    }
]