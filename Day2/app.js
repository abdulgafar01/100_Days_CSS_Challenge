document.querySelector('.container').addEventListener('click', (e) => {
    const menuIcon = e.target;
    // menuIcon.classList.toggle('active');
    menuIcon.querySelectorAll('div').forEach(div => div.classList.remove('no-animation'));
  });