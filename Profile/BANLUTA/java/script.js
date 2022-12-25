function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openFolder(evt, folderName) {
  var i, foldercontent, folder;
  foldercontent = document.getElementsByClassName("foldercontent")
  for (i = 0; i < foldercontent.length; i++) {
    foldercontent[i].style.display = "none";
  }
  folder = document.getElementsByClassName("folder");
  for (i = 0; i < folder.length; i++) {
    folder[i].className = folder[i].className.replace(" active", "");
  }
  document.getElementById(folderName).style.display = "flex";
  evt.currentTarget.className += " active";
}

function openList() {
  var x = document.getElementById("responsivelist");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}