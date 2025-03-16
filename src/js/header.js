document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.dropdown-btn');
  const menu = document.querySelector('.dropdown-content');

  btn.addEventListener('click', function () {
    if (window.innerWidth < 1200) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  });

  document.addEventListener('click', function (event) {
    if (
      window.innerWidth < 1200 &&
      !btn.contains(event.target) &&
      !menu.contains(event.target)
    ) {
      menu.style.display = 'none';
    }
  });
});
