$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts',  // No "limit" parameter
        headers: { 'X-Api-Key': 'vJcCyVVC7/2rjCbyBws3IQ==Z9NnkRHVyQ0t9jzc' },  // Replace with your actual API key
        contentType: 'application/json',
        success: function(result) {
            // Display the fact in the div
            if (result.length > 0) {
                $('#factDisplay').text(result[0].fact);  // Display the first fact
            } else {
                $('#factDisplay').text('No facts available.');
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
            $('#factDisplay').text('Failed to fetch fact.');
        }
    });
  });
  