let runner = document.querySelector('.runner');
let tablo = document.querySelector('.tablo');
let x = 0;
let timer;

// розміщення бігунка на екрані
const render = () => {
    runner.style.left = `${x+100}px`;
    tablo.innerHTML = x;
  };
render();

//  переміщення вправо
const runRight = () => {
    x += 1;
    if (x > 1199) {
      x = 1200;
      clearInterval(timer);
    }
    render();
};

//  переміщення вліво
const runLeft = () => {
    x -= 1;
    if (x < 1) {
      x = 0;
      clearInterval(timer);
    }
    render();
};

// обробка натискання миші 
const run = (ev) => {  
  // координати миші відносно вікна браузера
  let xr = ev.pageX;
  let yr = ev.pageY;
  // рух вправо
  if ( (yr > 250) && (yr < 510) && (xr > x+250) && (xr < x+400)){
    timer = setInterval(runRight,10);
  }  
  //  рух вліво 
  if ( (yr > 250) && (yr < 510) && (xr > x+100) && (xr < x+250)){
    timer = setInterval(runLeft,10);
  }  
};  

// обробка відпускання миші
const stop = () => {
  clearInterval(timer);
};

addEventListener('mousedown', run);
addEventListener('mouseup', stop);
