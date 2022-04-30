const sideBarToggleButton = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

sideBarToggleButton.addEventListener('click', () => {
  sideBar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  sideBar.classList.toggle('show-sidebar');
});
