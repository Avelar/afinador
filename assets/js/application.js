function audioPlay(audio, key, indicator){
  audio.loop = true;
  if (audio.paused) {
    audio.play();
    key.classList.add('playing');
    indicator.classList.add('on');
  } else {
    audio.pause();
    key.classList.remove('playing');
    indicator.classList.remove('on');
  }
}

window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const indicator = document.querySelector('.indicator-on-off');
  if (!audio) return;
  audioPlay(audio, key, indicator);
});

const button = document.querySelector('button');
button.onclick = function(){
  const audio = document.querySelector('audio');
  const key = document.querySelector('.key');
  const indicator = document.querySelector('.indicator-on-off');
  if (!audio) return;
  audioPlay(audio, key, indicator);
  // On click focus out, to fix button <-> keyCode interaction
}

const infoBoxOpen = document.querySelector('.info-box-open');
      infoBoxOpen.addEventListener('click', () => {
        const closeInfoBox = document.querySelector('.info-box');
        closeInfoBox.style.display = "inline-block";
      });

const infoBoxClose = document.querySelector('.info-box-close');
      infoBoxClose.addEventListener('click', closeInfoBox);

function closeInfoBox() {
  const closeInfoBox = document.querySelector('.info-box');
  closeInfoBox.style.display = "none";
}

// Verificar se é browser ou mobile
// se for browser então mostrar mensagem para usar barra de espaçoptimize
