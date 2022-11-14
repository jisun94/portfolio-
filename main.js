const sections = document.querySelectorAll('section');

// About

const handleAbout = (e) => {
  const aboutRect = sections[1].getBoundingClientRect();
  const aboutText = document.querySelector('.about-text');
  const aboutImg = document.querySelector('.about-img');

  if (aboutRect.y < 400) {
    sections[1].classList.add('showBg');
    aboutImg.classList.add('showImg');
    aboutText.classList.add('showText');
  } else {
    sections[1].classList.remove('showBg');
  }
};

// Project
const handleproject = (e) => {
  const projectRect = sections[2].getBoundingClientRect();
  const projectText = document.querySelector('.project-text');
  if (projectRect.y < 500) {
    projectText.classList.add('showText');
  }

  const contents = document.querySelectorAll('.project-contents');

  contents.forEach((it) => {
    const lect = it.getBoundingClientRect();
    if (lect.y <= 600) {
      it.classList.add('showContent');
    }

    it.addEventListener('mouseover', () => {
      sections[2].classList.add('handleBg');
    });

    it.addEventListener('mouseleave', () => {
      sections[2].classList.remove('handleBg');
    });
  });
};

// up

const handleUpButton = (e) => {
  const upButton = document.querySelector('.up');
  let y = window.scrollY;
  if (y > 1000) {
    upButton.classList.add('showButton');
  } else {
    upButton.classList.remove('showButton');
  }
};

// Contact

const handleContact = (e) => {
  const contactRect = sections[3].getBoundingClientRect();
  if (contactRect.y < 600) {
    sections[3].classList.add('showContact');
  } else {
    sections[3].classList.remove('showContact');
  }
};

// header

// const handleHeader = (e) => {
//   const header = document.querySelector('.gnb');

//   if (
//     sections[1].getBoundingClientRect().top <= 0 &&
//     e.deltaY < 0 &&
//     sections[1].getBoundingClientRect().bottom > 1
//   ) {
//     header.classList.add('show-header');
//     header.classList.add('is-active');
//   } else if (
//     sections[1].getBoundingClientRect().top <= 0 &&
//     e.deltaY < 0 &&
//     sections[1].getBoundingClientRect().bottom < 0
//   ) {
//     header.classList.add('show-header');
//     header.classList.remove('is-active');
//   } else {
//     header.classList.remove('show-header');
//     header.classList.remove('is-active');
//   }
// };

// Menu
const handleMenu = () => {
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (e) => {
    e.preventDefault();
    const menu = document.querySelector('.menu-wrapper');
    menu.classList.toggle('showMenu');
    menuButton.classList.toggle('showCloseButton');

    const menuList = document.querySelector('.menu-list');
    menuList.addEventListener('click', () => {
      menu.classList.remove('showMenu');
      menuButton.classList.remove('showCloseButton');
    });
  });
};

// Cursor

const cursor = () => {
  const cursor = document.querySelector('.cursor');
  const a = document.querySelectorAll('a');

  document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
  });

  document.addEventListener('mouseup', () => {
    cursor.classList.remove('click');
  });

  a.forEach((item) => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
};

handleMenu();
cursor();

document.addEventListener('scroll', (e) => {
  handleAbout(e);
  handleproject(e);
  handleContact(e);
  handleUpButton(e);
});

// document.addEventListener('wheel', (e) => {
//   handleHeader(e);
// });

// window.onresize = () => {
//   location.reload();
// };
