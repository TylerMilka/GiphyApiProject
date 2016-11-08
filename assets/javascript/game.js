//retrieve giphy api 

//create an array of strings of favorite musicians that will be the theme of the site

//each string should be linked to a button displayed to html using javascript

//when an individual giphy is clicked, it should stop animating


//when the button is clicked, 10 giphy icons will display below 
//ratings should be diplayed below each gif

//lastly add a form to the data so that the user can search for a new giphy
//the theme searched should create a new button and have the same qualities
//as the rest of the gifs
$(document).ready(function(){

var topics = ['Sublime', 'Red Hot Chili Peppers', 'Arctic  Monkeys', 'Tool']; //array with bands (strings)
	var formHtml = [];

	$.each(topics, function(index,value){ //runs through the array
		
		formHtml.push('<button type="submit" name="option" value="' + 0 + '" id="option' + 0 + '"><label for="option' + 0 + '">' +
      topics[0] + '</label><br/>' + '</label></div><br/>');
      });

      $('#topics').html(formHtml.join(""));

  });













	
   // $('button').on('click', function() { //activates button via on click function
       
   //      var p = $(this).data('gif');     // this = button    //var p  = button data-gif = "whatever name is included here"
   //      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10"; //links to API

   //      $.ajax({                    //object passed into AJAX
   //              url: queryURL,          //retreives data from the URL API data-base
   //              method: 'GET'
   //          })
   //          .done(function(response) {     //is is what is what is calledbacked/returned from the API it is accessing
   //              var results = response.data;        //

   //              for (var i = 0; i < results.length; i++) {   //runs through all the results of the API
   //                  var gifDiv = $('<div class="item">')

   //                  var rating = results[i].rating; 

   //                  var p = $('<p>').text("Rating: " + rating);

   //                  var personImage = $('<img>');                                 //linking personImage to an <img> tag that will appear in the dom
   //                  personImage.attr('src', results[i].images.fixed_height.url); // g

   //                  gifDiv.append(p)
   //                  gifDiv.append(personImage)

   //                  $('#displayGifs').prepend(gifDiv);
   //              }
   //          });
    

