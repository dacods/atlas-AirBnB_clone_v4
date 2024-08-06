$(document).ready(function () {
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({}),
        success: function(data) {
            $.each(data, function(index, place) {
                // Create an article element for each place
                var $article = $('<article></article>');
                
                // Add a title for the place
                var $title = $('<h2></h2>').text(place.name);
                $article.append($title);
                
                // Add a description for the place, excluding the owner part
                var description = place.description.replace(/Owner:.*/, '');
                var $description = $('<p></p>').html(description);
                $article.append($description);
                
                // Append the article to the section.places
                $('.places').append($article);
            });
        },
        error: function(xhr, status, error) {
            console.error('Failed to fetch places:', error);
        }
    });
});
