// =============================
// POPUP PROMO LAKOFFIE
// Muncul sekali saat pertama buka
// =============================

document.addEventListener('DOMContentLoaded', function () {
  const promo = document.getElementById('promo');
  const closeBtn = document.getElementById('promo-close');

  // Cek apakah popup sudah pernah muncul
  if (!localStorage.getItem('lakoffiePromoShown')) {
    setTimeout(() => {
      promo.style.display = 'flex';
    }, 800); // delay halus
  }

  // Tutup popup
  closeBtn.addEventListener('click', function () {
    promo.style.display = 'none';
    localStorage.setItem('lakoffiePromoShown', 'true');
  });
});
