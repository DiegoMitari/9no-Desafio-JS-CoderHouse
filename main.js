const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');


load();

//se escucha el eventoclick del boton con el id #bdark
bdark.addEventListener('click', e => {
    //alternamos la clase .darkmode
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode')); 
    e.preventDefault();
});



//utilizamos el localstorage
function load() {
    const darkmode = localStorage.getItem('darkmode');
    if(!darkmode)
        store('false');
    else if(darkmode == 'true')
        body.classList.add('darkmode');
}

function store(value) {
    localStorage.setItem('darkmode', value);
}