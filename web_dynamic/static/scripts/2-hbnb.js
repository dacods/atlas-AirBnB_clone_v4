$(document).ready(function () {
    const selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        const amenityId = $(this).attr('data-id');
        const amenityName = $(this).attr('data-name');

        if (this.checked) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        const selectedNames = Object.values(selectedAmenities);
        const selectedIds = Object.keys(selectedAmenities);

        const displayLimit = 3;
        let displayText = '';

        if (selectedNames.length > displayLimit) {
            displayText = selectedNames.slice(0, displayLimit).join(', ') + ', ...';
        } else if (selectedNames.length === 0) {
            displayText = '&nbsp;';
        } else {
            displayText = selectedNames.join(', ');
        }

        $('.amenities h4').html(displayText);
    })

    $.ajax({
        url: 'http://localhost:5001/api/v1/status/',
        type: 'GET',
        dataType: 'json',
        success: function(json) {
            $('#api_status').addClass('available');
        }
    })
})