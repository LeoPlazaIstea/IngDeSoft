let rotation = 0;
let caraCount = 0;
let secaCount = 0;

function throwCoin() {
  const coin = document.querySelector('.coin')
  const isHeads = (Math.random() * 10) < 5
  console.log(isHeads)
  const caraDisplay = document.getElementById('caraCount')
  const secaDisplay = document.getElementById('secaCount')

  rotation += 1080;
  const finalRotation = isHeads ? rotation : rotation + 180
  coin.style.transform = `rotateX(${finalRotation}deg)`

  setTimeout(() => {
    if (isHeads) {
      caraCount++;
      caraDisplay.textContent = caraCount
    } else {
      secaCount++;
      secaDisplay.textContent = secaCount
    }
  }, 1200);
}

