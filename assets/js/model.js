var closeBtn = document.getElementsByClassName("close")[0],
killModal = document.querySelector("#booknow"),
modal = document.getElementById("myModal");
closeBtn.addEventListener("click", function () {
  modal.classList.replace("d-block", "d-none");
}),
  killModal.addEventListener("click", function () {
    modal.classList.replace("d-block", "d-none");
  });
