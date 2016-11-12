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

var topics = ['Red Hot Chili Peppers', 'Arctic  Monkeys', 'Tool', 'Sublime', 'Avenged Sevenfold', 'Rebelution', 'Pretty Lights']; //array with bands (strings)



function displayButtons() {

   $('#buttonsView').empty();

    for (var i = 0; i < topics.length; i++){

        var a = $('<button>');
        a.attr('data-name', topics[i]);
        a.text(topics[i]);
        $('#buttonsView').append(a);    

    
$('button').on('click', function() { //activates button via on click function

        var p = $(this).data('name'); // this = button    //var p  = button data-gif = "whatever name is included here"
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10"; //links to API

        $.ajax({ //object passed into AJAX
                url: queryURL, //retreives data from the URL API data-base
                method: 'GET'
            })
            .done(function(response) { //is is what is what is calledbacked/returned from the API it is accessing
                var results = response.data; //

                for (var i = 0; i < results.length; i++) { //runs through all the results of the API
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var bandImage = $('<img>'); //linking bandImage to an <img> tag that will appear in the dom
                    bandImage.attr('src', results[i].images.fixed_height.url); // g

                    gifDiv.append(p)
                    gifDiv.append(bandImage)

                    $('#displayGifs').prepend(gifDiv);

                }

            });

    });

}
}

function clearValue(){

}

    //////////activates button when clicked
                                                

////////////////////////stopping animation


$('#displayGifs').on('click', function() {

    var $this = $(this),
        $index = $this.index(),

        $img = $this.children('img'),
        $imgSrc = $img.attr('src'),
        $imgAlt = $img.attr('data-name'),
        $imgExt = $imgAlt.split('.');

    if ($imgExt[1] === 'gif') {
        $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
    } else {
        $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
    }

    // Add play class to help with the styling.
    $this.toggleClass('play');

});



$("#displayGifs").click(function() {
    if ($(this).find("img").attr("data-state") == "static") {
        $(this).find("img").attr("src", "animatedgif.gif");
    } else {
        $(this).find("img").attr("src", "staticgif.jpg");
    }
});


$(document).ready(function() {


function validateForm() {
    var x = document.forms["bandForm"]["band-input"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}

    //form box that spawns new gifs
    $('#addBand').on('click', function() {

        var band = $('#band-input').val().trim();

        topics.push(band);
        console.log(topics);
        displayButtons();
         $("#bandForm")[0].reset()


        return false;
    });

});

///pause gifs

    displayButtons();




})
