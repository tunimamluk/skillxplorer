function showSquare(taskName) {
    var modal = document.getElementById("modal");
    var modalText = document.getElementById("modal-text");
    modalText.textContent = taskName;
    modal.style.display = "block";
}

function closeSquare() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}