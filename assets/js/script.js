document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const hideNavbar = document.getElementById('hide');

    burger.addEventListener('change', function() {
        if (this.checked) {
            hideNavbar.classList.add('show');
        } else {
            hideNavbar.classList.remove('show');
        }
    });
});