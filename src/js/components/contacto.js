const VALIDATORS = {
    nombre: (value) => {
        if (!value.trim()) return 'El nombre es obligatorio.';
        if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
        return '';
    },
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return 'El correo es obligatorio.';
        if (!emailRegex.test(value)) return 'Ingresa un correo electrónico válido.';
        return '';
    },
    telefono: (value) => {
        if (!value.trim()) return '';
        const phoneRegex = /^[0-9+\-\s]{8,15}$/;
        if (!phoneRegex.test(value)) return 'Ingresa un teléfono válido (8-15 dígitos).';
        return '';
    },
    mensaje: (value) => {
        if (!value.trim()) return 'El mensaje es obligatorio.';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.';
        return '';
    },
};

function submitContactForm(formData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNetworkOk = true; // placeholder hasta tener backend/endpoint real
            if (isNetworkOk) {
                resolve({ ok: true });
            } else {
                reject(new Error('Fallo de red simulado'));
            }
        }, 600);
    });
}

export function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return; // esta página no tiene formulario, no hacer nada

    const statusEl = document.getElementById('form-status');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        statusEl.textContent = '';

        const formData = new FormData(form);
        let hasErrors = false;

        for (const field of Object.keys(VALIDATORS)) {
            const value = formData.get(field) ?? '';
            const errorMessage = VALIDATORS[field](String(value));
            const errorEl = document.getElementById(`error-${field}`);
            const inputEl = form.elements.namedItem(field);

            if (errorEl) errorEl.textContent = errorMessage;
            if (inputEl) inputEl.setAttribute('aria-invalid', String(Boolean(errorMessage)));

            if (errorMessage) hasErrors = true;
        }

        if (hasErrors) {
            statusEl.textContent = 'Por favor corrige los errores antes de enviar.';
            return;
        }

        try {
            await submitContactForm(formData);
            statusEl.textContent = '¡Gracias! Tu mensaje fue enviado correctamente.';
            form.reset();
        } catch (error) {
            statusEl.textContent = 'Ocurrió un error al enviar tu mensaje. Intenta de nuevo más tarde.';
            console.error('Error al enviar formulario de contacto:', error);
        }
    });
}
