//Cierra el menú al hacer click en un item si el ancho de la ventana es inferior a 768 pixeles
$('.nav a').on('click', function(){
    if (window.innerWidth < 768){
        $('.navbar-toggler').click(); //bootstrap 4.x
    }
});
      