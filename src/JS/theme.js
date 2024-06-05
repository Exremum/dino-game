document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    themeButton.src = document.body.classList.contains('dark-theme') ? 'src/images/themes/light.svg' : 'src/images/themes/dark.svg';
  
    themeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      document.body.classList.toggle('light-theme');
      themeButton.src = document.body.classList.contains('dark-theme') ? 'src/images/themes/light.svg' : 'src/images/themes/dark.svg';
    });
  });
  