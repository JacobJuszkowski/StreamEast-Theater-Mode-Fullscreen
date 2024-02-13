// JavaScript code to delete an HTML element
(function() {
    // Select the element you want to delete
    var elementsToDelete = ['live-chat-iframe', 'theater-mode-btn']

    for (let i = 0; i < elementsToDelete.length; i++){
        var elementToDelete = document.getElementById(elementsToDelete[i]);
        // Check if the element is found
        if (elementToDelete) {
            // Remove the selected element from the DOM
            elementToDelete.remove();
        } else {
            console.error(elementsToDelete[i] + 'not found');
        }
    }

    var videoPlayer = document.querySelector('div[data-player][tabindex="9999"]');
    if(videoPlayer) {
        videoPlayer.style.width = '100vw';
    } else {
        console.error('Video player not found')
    }
})();