const cups = document.querySelectorAll('.cup-small');
const totalLiters = document.getElementById('liters');
let Percentage = document.getElementById('percentage');
let remaining = document.getElementById('remained');

let index = 0;

function fillSmallcups(index) {
  if (index === 7 && cups[index].classList.contains("full")) {
    index--;
  } else if (cups[index].classList.contains('full') && !cups[index].classList.contains('full')) {
    index--;
  }

  cups.forEach((cup, currentIndex) => {
    if (currentIndex <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  })

  updateBigCup();
}
//Updating bigcup
function updateBigCup() {
  const filledCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = cups.length;

  if (filledCups === 0) {
    Percentage.style.visibility = 'hidden';
    Percentage.style.height = 0;
  } else {
    let fillHeight = filledCups / totalCups * 330;
   let cupfilledpercent =(filledCups / totalCups) * 100;
    Percentage.style.opacity = 1;
    Percentage.style.visibility = 'visible';
    Percentage.style.height = `${fillHeight}px`;
    Percentage.innerText = `${cupfilledpercent}%`;
  }

  if (filledCups === totalCups) {
    remaining.style.visibility = 'hidden';
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = 'visible';
    let remainingLiters = 2 - (25 * filledCups / 100);
    totalLiters.innerText = `${remainingLiters}L`;
  }
}


cups.forEach((cup, index) => {
  cup.addEventListener('click', () => fillSmallcups(index));
});

updateBigCup();
