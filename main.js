
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('toggle');
});





 const textArray = ["I'M A DEVELOPER"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100;
  const delayBetweenWords = 1500;

  const typewriter = document.getElementById("typewriter");

  function type() {
    const currentText = textArray[index];
    
    if (isDeleting) {
      charIndex--;
      typewriter.textContent = currentText.substring(0, charIndex);
    } else {
      charIndex++;
      typewriter.textContent = currentText.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
      setTimeout(type, 200);
    } else {
      setTimeout(type, isDeleting ? 50 : speed);
    }
  }

  type();









function showTab(tabId) {
  var contents = document.querySelectorAll('.about-content');
  contents.forEach(content => content.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
  showTab('self');
});



window.onscroll = function() {
  var backToTop = document.querySelector(".back-to-top");
  if (document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};






