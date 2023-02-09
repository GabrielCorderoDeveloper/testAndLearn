const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const load = (entry) => { 
    const container = entry.target; //el div
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    imagen.src = url;
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(load);
});

export const registrarImagen = (imagen) => {
    observer.observe(imagen);
};