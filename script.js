document.addEventListener('DOMContentLoaded', function () {
  const homeLink = document.getElementById('home');
  const teachersLink = document.getElementById('teachers');
  const contactLink = document.getElementById('contact');

  const homeSection = document.getElementById('home_sec');
  const teachersSection = document.getElementById('teachers_sec');
  const contactSection = document.getElementById('contact_sec');

  function removeActiveClass() {
    homeLink.classList.remove('active');
    contactLink.classList.remove('active');
    teachersLink.classList.remove('active');
  }

  function setActiveLink(link) {
    removeActiveClass();
    link.classList.add('active');
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewport(homeSection)) {
      setActiveLink(homeLink);
    } else if (isElementInViewport(teachersSection)) {
      setActiveLink(teachersLink);
    } else if (isElementInViewport(contactSection)) {
      setActiveLink(contactLink);
    }
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);

  homeLink.addEventListener('click', function () {
    setActiveLink(homeLink);
  });

  contactLink.addEventListener('click', function () {
    setActiveLink(contactLink);
  });

  teachersLink.addEventListener('click', function () {
    setActiveLink(teachersLink);
  });
});

