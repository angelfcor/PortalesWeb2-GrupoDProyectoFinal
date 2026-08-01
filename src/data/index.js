import indexContext from './pages/index_page';
import nosotrosContext from './pages/nosotros_page';
import contactoContext from './pages/contacto_page';
/*
import habitacionesContext from './pages/habitaciones_page';
import serviciosContext from './pages/servicios_page';
import testimoniosContext from './pages/testimonios_page';
import reservacionesContext from './pages/reservaciones_page';
*/
export default (page) => {
    switch(page) {
        case '/index.html':
            return indexContext;
        case '/nosotros.html':
            return nosotrosContext;
        case '/contacto.html':
            return contactoContext;
            /*
        case '/habitaciones.html':
            return habitacionesContext;
        case '/servicios.html':
            return serviciosContext;
        case '/galeria.html':
            return {};
        case '/reservaciones.html':
            return reservacionesContext;
        case '/promociones.html':
            return {};
        case '/faq.html':
            return {};
        case '/testimonios.html':
            return testimoniosContext;
            */
        default:
            return {};
    }
};
