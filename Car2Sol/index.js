  const gtr = document.getElementById('gtr');
  const m4 = document.getElementById('m4');
  const hero = document.getElementsByClassName('hero')[0];
  const search = document.getElementsByClassName('search')[0];
  const gt3 = document.getElementById('gt3');

  document.addEventListener('scroll', () => {
    let value = window.scrollY;
    gtr.style.marginLeft = value * 0.65 + 'px';
    m4.style.marginRight = value * 0.65 + 'px';
    hero.style.bottom = value * 0.5 + 'px';
    gt3.style.scale = 1 + value * 0.0008;
  
  
    
    let opacity = (value - 180) / (document.body.scrollHeight - window.innerHeight);
    // Limit opacity to values between 0 and 1
    opacity = Math.min(Math.max(opacity, 0), 1);
    // Set the opacity of the search element
    search.style.opacity = opacity.toFixed(2); // Limiting decimal places to 2
  });





  const dynamicText = document.querySelector(".dynamicText span");
  const words = ["Buy", "Sell", "Trade"];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false
  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      dynamicText.classList.remove("stop-blinking");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1000);
    }
  }


  typeEffect();