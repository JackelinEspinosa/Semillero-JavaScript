var modal = document.getElementById("modal");

var button = document.getElementsByTagName('button')[0];
var modalImage = document.getElementById("modal-image");
var close = document.getElementsByClassName("close")[0];

button.addEventListener('click', function() {
  modal.style.display = "block";
  modalImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyOWrUOkXE0t16w1QZGS3Vvr_TANybKwWWeXQYgfuBKzbtTtD1PWlXpet0xgrv8Ddmcsc&usqp=CAU';
})

close.addEventListener('click', function() {
  modal.style.display = "none";
})