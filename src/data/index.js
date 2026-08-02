import indexContext from './pages/index_page.js';
import nosotrosContext from './pages/nosotros_page.js';
import contactoContext from './pages/contacto_page.js';
import habitacionesContext from './pages/habitaciones_page.js';
import serviciosContext from './pages/servicios_page.js';
import faqContext from './pages/faq_page.js';
import testimoniosContext from './pages/testimonios_page.js';
import promocionesContext from './pages/promociones_page.js';
import reservacionesContext from './pages/reservaciones_page.js';

export default (page) => {
    console.log(`Cargando contexto de: ${page}`);
    switch (page) {
        case '/index.html':
            return indexContext;
        case '/nosotros.html':
            return nosotrosContext;
        case '/contacto.html':
            return contactoContext;
        case '/habitaciones.html':
            return habitacionesContext;
        case '/servicios.html':
            return serviciosContext;
        case '/faq.html':
            return faqContext;
        case '/testimonios.html':
            return testimoniosContext;
        case '/promociones.html':
            return promocionesContext;
        case '/reservaciones.html':
            return reservacionesContext;
        case '/galeria.html':
            return {};
        default:
            return {};
    }
};