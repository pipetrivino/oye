window.onload =

//ocultar articulos de la pagina
document.querySelectorAll('.secciones article').forEach(element =>  element.classList.add('oculto'));

//activar primer item de menu
document.querySelector('.navbar-nav li:first-child').classList.add('menuActivo');

//mostrar primer articulo de la pagina
document.querySelector('.secciones article:first-child').classList.remove('oculto');

;

document.querySelector('.menu1').addEventListener('click', (e)=>{
    
    e.preventDefault();

    //desactivar item activo menu
    document.querySelector('.menuActivo').classList.remove('menuActivo')
    
    //activar item activo menu
    e.target.classList.add('menuActivo');
    
    //ocultar articulos de la pagina
    document.querySelectorAll('section article').forEach(element =>  element.classList.add('oculto'));

    //mostrar Articulo seleccionado
    document.querySelector('.secciones article[id="'+e.target.id+'"]').classList.remove('oculto');

    //cambiar titulo de pestaña
    document.title = 'OYE - '+ e.target.id;
  
})

document.querySelector('.menu2').addEventListener('click', (e)=>{
    
    e.preventDefault();

    //desactivar item activo menu
    document.querySelector('.menuActivo').classList.remove('menuActivo')
    
    //activar item activo menu
    e.target.classList.add('menuActivo');
    
    //ocultar articulos de la pagina
    document.querySelectorAll('section article').forEach(element =>  element.classList.add('oculto'));

    //mostrar Articulo seleccionado
    document.querySelector('.secciones article[id="'+e.target.id+'"]').classList.remove('oculto');
    
    //cambiar titulo de pestaña
    document.title = 'OYE - '+ e.target.id;

})


