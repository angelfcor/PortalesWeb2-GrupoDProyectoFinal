import indexContext from './pages/index_page';

import habitacionesContext from './pages/habitaciones_page';
/*import serviciosContext from './pages/servicios_page';*/
import testimoniosContext from './pages/testimonios_page';
/*import reservacionesContext from './pages/reservaciones_page';
*/
export default (page) => {
    switch(page) {
        case '/index.html':
            return indexContext;
            /*
        case '/nosotros.html':
            return {};
        */case '/habitaciones.html':
            return habitacionesContext;/*
        case '/servicios.html':
            return serviciosContext;
        case '/galeria.html':
            return {};
        case '/reservaciones.html':
            return reservacionesContext;
        case '/promociones.html':
            return {};
        case '/contacto.html':
            return {};
        case '/faq.html':
            return {};
        */case '/testimonios.html':
            return testimoniosContext;
        default:
            return {};
    }
};