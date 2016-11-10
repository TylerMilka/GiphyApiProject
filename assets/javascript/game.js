//retrieve giphy api 

//create an array of strings of favorite musicians that will be the theme of the site

//each string should be linked to a button displayed to html using javascript

//when an individual giphy is clicked, it should stop animating


//when the button is clicked, 10 giphy icons will display below 
//ratings should be diplayed below each gif

//lastly add a form to the data so that the user can search for a new giphy
//the theme searched should create a new button and have the same qualities
//as the rest of the gifs
    var topics = ['Red Hot Chili Peppers', 'Arctic  Monkeys', 'Tool', 'Sublime', 'Avenged Sevenfold', 'Rebulution', 'Pretty Lights' ]; //array with bands (strings)
    var currentBand = 0; //tracks the value of the array
    var formHtml = [];


function displayButtons(){

    $.each(topics, function(index, value) { //runs through the array

        formHtml.push('<button type="submit" value="' + topics[currentBand] + '" id="band' + 0 + '"><label for="band' + 0 + '">' +
            topics[currentBand] + '</label></div><br/>' + '</label></div><br/>');
        currentBand++;
    });

    $('#topics').html(formHtml.join("")) //prints butt0ns to DOM with labels

    

    $('button').on('click', function() { //activates button via on click function

        var p = $(this).data('currentBand'); // this = button    //var p  = button data-gif = "whatever name is included here"
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

                    var bandImage = $('<img>'); //linking personImage to an <img> tag that will appear in the dom
                    bandImage.attr('src', results[i].images.fixed_height.url); // g

                    gifDiv.append(p)
                    gifDiv.append(bandImage)

                    $('#displayGifs').prepend(gifDiv);
                }

            });

    });

}

$(document).ready(function(){

//form box that spawns new gifs
$('#addBand').on('click', function(){

    var band =$('#band-input').val().trim();

    topics.push(band);
    console.log(topics);
    displayButtons();


    return false;
});

});

window.onload = function(){

    displayButtons();

}
