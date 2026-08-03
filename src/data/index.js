import sharedContact from './shared.js';
import indexContext from './pages/index_page.js';
import nosotrosContext from './pages/nosotros_page.js';
import contactoContext from './pages/contacto_page.js';
import habitacionesContext from './pages/habitaciones_page.js';
import serviciosContext from './pages/servicios_page.js';
import faqContext from './pages/faq_page.js';
import testimoniosContext from './pages/testimonios_page.js';
import promocionesContext from './pages/promociones_page.js';
import reservacionesContext from './pages/reservaciones_page.js';
import galeriaContext from './pages/galeria_page.js';

export default (page) => {
    let pageContext = {};

    switch (page) {
        case '/index.html':
            pageContext = indexContext;
            break;
        case '/galeria.html':
            pageContext = galeriaContext;
            break;
        case '/nosotros.html':
            pageContext = nosotrosContext;
            break;
        case '/contacto.html':
            pageContext = contactoContext;
            break;
        case '/habitaciones.html':
            pageContext = habitacionesContext;
            break;
        case '/servicios.html':
            pageContext = serviciosContext;
            break;
        case '/faq.html':
            pageContext = faqContext;
            break;
        case '/testimonios.html':
            pageContext = testimoniosContext;
            break;
        case '/promociones.html':
            pageContext = promocionesContext;
            break;
        case '/reservaciones.html':
            pageContext = reservacionesContext;
            break;
        default:
            pageContext = {};
            break;
    }

    return {
        contacto: sharedContact,
        ...pageContext,
    };
};