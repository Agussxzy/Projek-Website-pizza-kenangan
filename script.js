function uimenu(){
  $.getJSON('pizza.json', function(data){
    let menu = data.menu;
    $.each(menu, function(i, menu){
      $('#all-menu').append(`<div class="col-md-4">
      <div class="card">
    <img src="img/pizza/${menu.gambar}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${menu.nama}</h5>
      <p class="card-text">${menu.deskripsi}</p>
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>
  </div>`);
    });
  });
}
uimenu();

$('.nav-link').on('click', function(){
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
  
  let kategori = $(this).html();
  $('#judul').html(kategori);
  
  $.getJSON('pizza.json', function(data){
    let menu = data.menu;
    let conten = ``;
    if(kategori == "All menu") {
        uimenu();
      }
    $.each(menu, function(i, listmenu){
      
      
      
      if(listmenu.kategori == kategori.toLowerCase()){
        conten += `<div class="col-md-4">
        <div class="card">
    <img src="img/pizza/${listmenu.gambar}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${listmenu.nama}</h5>
      <p class="card-text">${listmenu.deskripsi}</p>
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>
  </div>`;
      }
      
    });
      $('#all-menu').html(conten);
  });
  
  
});
