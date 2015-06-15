$(document).ready(function() {

  var clickedCountries = []

  var changeCountryColor = function(code){
    var toChange = {};
    toChange[code] = '#0000ff';

    jQuery('#vmap').vectorMap('set', 'colors', toChange);

  };

  jQuery('#vmap').vectorMap({
		    map: 'usa_en',
        hoverColor: 'blue',
        selectedColor: 'black',
		    enableZoom: true,
		    showTooltip: true,
		    selectedRegion: 'MO'
		});

});
