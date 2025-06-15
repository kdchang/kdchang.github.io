document.addEventListener('DOMContentLoaded', () => {
  const langZhBtn = document.getElementById('lang-zh');
  const langEnBtn = document.getElementById('lang-en');
  const elementsToTranslate = document.querySelectorAll('[data-en], [data-zh]');

  let currentLang = localStorage.getItem('lang') || 'zh';
  setLanguage(currentLang);

  langZhBtn.addEventListener('click', () => {
    setLanguage('zh');
  });

  langEnBtn.addEventListener('click', () => {
    setLanguage('en');
  });

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    langZhBtn.classList.toggle('active', lang === 'zh');
    langEnBtn.classList.toggle('active', lang === 'en');

    elementsToTranslate.forEach((element) => {
      const zhText = element.getAttribute('data-zh');
      const enText = element.getAttribute('data-en');

      if (lang === 'zh' && zhText) {
        if (element.tagName === 'TITLE') {
          document.title = zhText;
        } else if (element.tagName === 'A' && element.hasAttribute('data-zh')) {
          element.textContent = zhText;
        } else {
          element.textContent = zhText;
        }
      } else if (lang === 'en' && enText) {
        if (element.tagName === 'TITLE') {
          document.title = enText;
        } else if (element.tagName === 'A' && element.hasAttribute('data-en')) {
          element.textContent = enText;
        } else {
          element.textContent = enText;
        }
      }
    });

    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  }

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});
