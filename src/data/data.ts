interface ISocial{
    name: string
    url: string
}

interface IContact extends ISocial{
    info: string
}

/* ── Fuente única del número de contacto ─────────────────────────────
   Cambiá SOLO estos valores para actualizar el número en toda la web. */
const PHONE_DIGITS = "5493875450419" // solo dígitos, con código de país, sin "+"
const PHONE_DISPLAY = "+54 9 3875 45-0419" // formato legible para mostrar en pantalla
const WHATSAPP_DEFAULT_TEXT = "Hola! Estoy interesado en sus servicios web. Quiero más información."

/** Construye una URL de WhatsApp (wa.me) con un mensaje opcional. */
export const getWhatsappUrl = (text: string = WHATSAPP_DEFAULT_TEXT) =>
    `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(text)}`

export const phone = {
    digits: PHONE_DIGITS,            // para enlaces wa.me / API de WhatsApp
    display: PHONE_DISPLAY,          // para mostrar en la UI
    tel: `tel:+${PHONE_DIGITS}`,     // para enlaces de llamada
    whatsappUrl: getWhatsappUrl()    // enlace de WhatsApp con el mensaje por defecto
}

export const socials: ISocial[] = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/cetzzlabs"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61579657569697"
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
        info: phone.display,
        url: phone.tel
    },
    {
        name: "Address",
        info: "Salta Capital, Salta, Argentina",
        url: "https://www.google.com/maps/place/Salta+Capital,+Salta,+Argentina"
    }
]

export const whatsApp: IContact = {
    name: "WhatsApp",
    info: phone.display,
    url: phone.whatsappUrl
}
