// document.addEventListener('DOMContentLoaded', (event) => {
//   const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
//   const currentTheme = localStorage.getItem('theme');

//   if (currentTheme) {
//     document.body.classList.add(currentTheme);

//     if (currentTheme === 'dark-mode') {
//       toggleSwitch.checked = true;
//     }
//   }

//   toggleSwitch.addEventListener('change', (e) => {
//     if (e.target.checked) {
//       document.body.classList.add('dark-mode');
//       localStorage.setItem('theme', 'dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//       localStorage.setItem('theme', 'light-mode');
//     }
//   });
// });
document.addEventListener('DOMContentLoaded', (event) => {
  const sunIcon = document.querySelector('.theme-icon.sun');
  const moonIcon = document.querySelector('.theme-icon.moon');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.body.classList.add(currentTheme);
  }

  sunIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');
  });

  moonIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  });
});


