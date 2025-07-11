function search() {
    const searchInput = document.querySelector('#input-bar');
    window.open("https://www.google.com/search?q="+searchInput.value.trim(), "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('#input-bar');

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            event.preventDefault();
            search();
        }
    });

})