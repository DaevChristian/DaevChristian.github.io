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