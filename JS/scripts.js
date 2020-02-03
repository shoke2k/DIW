//Cierra el menú al hacer click en un item
$('.nav a').on('click', function(){
    if (screen.width < 768){
        $('.navbar-toggler').click(); //bootstrap 4.x
    }
});
      