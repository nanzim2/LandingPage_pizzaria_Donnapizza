//seleciona todos os details
const todosDetails = document.querySelectorAll('details');

todosDetails.forEach(details => {
    details.addEventListener('toggle' , () => {
        if (details.open) {
            todosDetails.forEach(outroDetails => {
                if (outroDetails !== details) {
                    outroDetails.open = false;
                }
            });
        }
    });
});