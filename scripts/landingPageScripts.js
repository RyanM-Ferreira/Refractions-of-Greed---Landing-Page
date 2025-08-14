document.querySelectorAll('#mySidenav [data-target], #mainButtons [data-target]').forEach(option => {
    option.addEventListener('click', e => {
        e.preventDefault();

        const optionID = option.getAttribute('data-target');
        const optionElement = document.getElementById(optionID);

        if (optionElement) {
            optionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});