import contacto from "../shared.js";

export default {
    tarifas: [
        {
            card_title: "2 Horas",
            card_description: "Ideal para una estadía corta y rápida en el centro de Tegucigalpa.",
            card_img: "/img/bench.jpeg",
            card_label: "Corta estadía",
            card_price: "250.00",
            card_cta: "Reservar",
        },
        {
            card_title: "5 Horas",
            card_description: "Perfecta para descansar y recargar energías durante el día.",
            card_img: "/img/balcony.jpeg",
            card_label: "Media estadía",
            card_price: "550.00",
            card_cta: "Reservar",
        },
        {
            card_title: "5:00 p.m. a 9:00 a.m.",
            card_description: "Disfruta una noche completa con todas las comodidades del hotel.",
            card_img: "/img/room.jpeg",
            card_label: "Noche completa",
            card_price: "1,100.00",
            card_cta: "Reservar",
        },
        {
            card_title: "2 Días",
            card_description: "La mejor opción para una escapada en el centro.",
            card_img: "/img/aisle-plants.jpeg",
            card_label: "Fin de semana",
            card_price: "2,200.00",
            card_cta: "Reservar",
        },
    ],
    testimonios: [
        {
            testimonio: "Excelente lugar para descansar. Muy limpio y tranquilo.",
            autor: "Cliente verificado"
        },
        {
            testimonio: "La ubicación es perfecta porque todo queda cerca.",
            autor: "Cliente verificado"
        },
        {
            testimonio: "Conocí el hotel por TikTok y cumplió mis expectativas.",
            autor: "Cliente verificado"
        },
    ],
    contacto,
}
