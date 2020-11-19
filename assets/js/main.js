// **** Navbar Toggle Control ****

document.querySelector('.menu').addEventListener
('click', ()=>{
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    });
});

// **** Carousel Controllers ****

// ** Activate Carousel (powered by Bootstrap) **
$("#myCarousel").carousel();

// ** Enable Carousel Indicators **
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// ** Enable Carousel Controls **
$(".carousel-control-prev").click(function(){
  $("#myCarousel").carousel("prev");
});