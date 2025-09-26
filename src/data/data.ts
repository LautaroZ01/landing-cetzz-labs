interface ISocial{
    name: string
    url: string
}

interface IContact extends ISocial{
    info: string
}

export const socials: ISocial[] = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/cetzzlabs"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/@cetzzlabs"
    },
    {
        name: "Tiktok",
        url: "https://www.tiktok.com/@cetzzlabs"
    }
]

export const contacts: IContact[] = [
    {
        name: "Email",
        info: "cetzzlabs@gmail.com",
        url: "mailto:cetzzlabs@gmail.com"
    },
    {
        name: "Phone",
        info: "+54 9 387 563 6478",
        url: "tel:+5493875636478"
    },
    {
        name: "Address",
        info: "Salta Capital, Salta, Argentina",
        url: "https://www.google.com/maps/place/Salta+Capital,+Salta,+Argentina"
    }
]

export const whatsApp: IContact = {
    name: "WhatsApp",
    info: "+54 9 387 563 6478",
    url: "https://wa.me/5493875636478?text=Hola!%20Estoy%20interesado%20en%20sus%20servicios%20web.%20Quiero%20más%20información."
}