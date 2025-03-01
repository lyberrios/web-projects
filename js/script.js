const ScrollRevealEffect = (() => {
    // Seleccionamos los elementos al cargar el módulo (no en el global directamente)
    let items = [];

    const init = () => {
        items = document.querySelectorAll('.staggered, .fade-up, .fade-left, .zoom-in');
        window.addEventListener('scroll', handleScroll);
        handleScroll();// Ejecuta por si algunos elementos son visibles al inicio
    };

    const handleScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if(itemTop < triggerBottom) {
                item.classList.add('visible');
            } else{
                item.classList.remove('visible');
            }
        });
    };
    // Exponer solo init (ocultar el resto)
    return { init };
})();
// Iniciar efecto cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', ScrollRevealEffect.init);