var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;
slider.oninput = function(){
    output.innerHTML = this.value;
}

  //baner
  function updateText() {
    const textElement = document.getElementById('title1');
    if (window.innerWidth < 600) {
    textElement.innerText = 'HandMade';
    } else {
    textElement.innerText = 'Tiệm đồ handmade - Cuộc sống muôn màu';
    }
}

window.addEventListener('resize', updateText);
window.addEventListener('load', updateText);

//menu
     $(document).ready(function(){
        $('#toggle').click(function(){
            $('nav').slideToggle();
         });
     })




