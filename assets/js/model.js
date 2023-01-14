var closeBtn = document.getElementsByClassName("close")[0]
var killModal = document.querySelector("#booknow") ;
var modal = document.getElementById("myModal");
closeBtn.addEventListener("click", function () {
  modal.classList.replace("d-block", "d-none");
});
  killModal.addEventListener("click", function () {
    modal.classList.replace("d-block", "d-none");
  });
