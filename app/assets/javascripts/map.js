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
      // we defined variable state above, here we are setting its value to the clicked region.
      // below is an ajax call - we want to pass the state variable to the states controller as params
      // and use it as the hashtag keyword to get tweets for each state.
      var tweetInfo = '<h1>cool tweet</h1>'
      var modalInfo = '<div class="model-body>'+tweetInfo+'</div>"';
      // <div class="modal-body">

        // <h1><%= @statuses[0] %></h1>
        // <% @statuses.each do |status| %>
        //   <br><b><li> <%= status %></li></b><br>
        // <% end %>
<!--
        // <a class="twitter-share-button"
        // href="https://twitter.com/intent/tweet"><br>
        // TWEET </a> -->
        //
        // <div class = "row">
        //     <%= link_to image_tag('Twitter.png', class: "footer_icon"), "https://twitter.com/intent/tweet" %>
        // </div>


        // <div class = 'button'><!-- <div class="modal-footer"> -->
        // <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      // </div>
      var state = region;
      console.log(state);
      if (localStorage[state]){
        $('.status-one').text(JSON.parse(localStorage[state])[0]);
        $('.status-two').text(JSON.parse(localStorage[state])[1]);
        $('.status-three').text(JSON.parse(localStorage[state])[2]);
        $("#myModal").modal("show");
      } else {
        $.ajax({
          url: "/",
          type: "get",
          data: {state: state},
          dataType: "json",
          // whatever route on my server that sends a request to twitter I create for this purpose of onclick region will be used to send params over
          success: function(data){
            console.log(data)
            localStorage.setItem(state, JSON.stringify(data))

            $('.status-one').text(data[0]);
            $('.status-two').text(data[1]);
            $('.status-three').text(data[2]);

            $("#myModal").modal("show");
            // start with route, parse params plug that into the tweet client search
          }
        })
      }
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
