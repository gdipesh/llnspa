// function openModal() {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";
//   }
  
//   // Get the modal button
//   var modalBtn = document.getElementById("myBtn");
  
//   // When the user clicks the button, open the modal
//   modalBtn.addEventListener("click", openModal);
  
// Get the close button
var closeBtn = document.getElementsByClassName("btn-close")[0];
var killModal = document.querySelector("#killModal");
var modal = document.getElementById("myModal");
// When the user clicks the close button, close the modal
closeBtn.addEventListener("click", function() {
  modal.classList.replace("d-block", "d-none")
});
killModal.addEventListener("click", function() {

  modal.classList.replace("d-block", "d-none");
});
