function fadeInPage() {
  document.body.classList.add("fade-in");
}

function fadeOutAndRedirect(url) {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    window.location.href = url;
  }, 1000);
}
