$(document).ready(function() {
  function parallax(){
    var prlx_1yr_1 = document.getElement
    prlx_1yr_1.style.top = -(window.pageYOffset / 4)+'px';
  }
  window.addEventListener("scroll", parallax, false);


// on click send an ajax request that searches by the state clicked
    var state = "";

  jQuery('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: '',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 10,
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
      // we defined variable state above, here we are setting its value to the clicked region.
      // below is an ajax call - we want to pass the state variable to the states controller as params
      // and use it as the hashtag keyword to get tweets for the clicked state.
      $("#myModal").modal("show");
      state = region;
      console.log(state);

      // $.ajax({
      // $.post("/index")
      //   url: "http://localhost:3000/", whatever route on my server that sends a request to twitter I create for this purpose of onclick region will be used to send params over
      //   success: function(data){  start with route, parse params plug that into the tweet client search
      //   console.log(data);
      //   }
      // })
      //send ajax request to a controller that fetches tweets that the selected state. Save tweets to the database, associate states to tweets
      // console.log(region)
      //  var message = 'You clicked "'
      //      + region
      //      + '" which has the code: '
      //      + code.toUpperCase();

      //  alert(message);
    } //closes on region click function
  }); //closes jQuery call

    $('#ajax-get').click(function(){
       $.ajax({
         url: '/states',
         type: "POST",
         data: {twitterState: state},
         success: function() {
           window.location.reload(true);
         }
       });
       return false;
     });
});
