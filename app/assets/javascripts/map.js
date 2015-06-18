$(document).ready(function() {
  function parallax(){
    var prlx_1yr_1 = document.getElement
  }
  window.addEventListener("scroll", parallax, false);



  jQuery('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: '#a5bfdd',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegion: null,
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {

      $("#myModal").modal("show");
      //  var message = 'You clicked "'
      //      + region
      //      + '" which has the code: '
      //      + code.toUpperCase();
       //
      //  alert(message);
    }
  	});
});
