const progress = document.querySelector('.music__player__interface__progress__progressbar');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #222222 0%, #222222 ${value}%, whitesmoke ${value}%, whitesmoke 100%)`
})
 