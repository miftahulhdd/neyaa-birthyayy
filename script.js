// Fungsi untuk menambahkan animasi fade-in ketika halaman dimuat
function fadeInPage() {
  document.body.classList.add("fade-in");
}

// Fungsi untuk menambahkan animasi fade-out dan mengarahkan ke halaman baru setelah selesai
function fadeOutAndRedirect(url) {
  document.body.classList.add("fade-out");
  setTimeout(function () {
    window.location.href = url;
  }, 1000); // Tunggu 1 detik untuk animasi fade-out selesai
}
