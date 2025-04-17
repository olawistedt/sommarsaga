const problemsList = document.getElementById('problems');
const feedback = document.getElementById('feedback');
const storyNext = document.getElementById('story-next');
const continueBtn = document.getElementById('continue-btn');
const nextText = document.getElementById('next-text');
let korrektSumma = 0;

function generateProblems(antal, minTal, maxTal) {
  problemsList.innerHTML = '';
  korrektSumma = 0;

  for (let i = 0; i < antal; i++) {
    const tal1 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const tal2 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const summa = tal1 + tal2;
    korrektSumma += summa;

    const item = document.createElement('li');
    item.textContent = `${tal1} + ${tal2} = `;
    problemsList.appendChild(item);
  }
}

function checkOnEnter(event) {
  if (event.key === 'Enter') {
    checkSum();
  }
}

function checkSum() {
  const userSum = parseInt(document.getElementById('userSum').value);
  if (isNaN(userSum)) {
    feedback.textContent = 'Skriv in ett heltal.';
    feedback.className = 'incorrect';
    return;
  }

  if (userSum === korrektSumma) {
    feedback.className = '';
    feedback.innerHTML = `<span class="correct">Grinden öppnas med ett litet gnissel.</span>`;
    storyNext.innerHTML = '';
    continueBtn.style.display = 'block';
  } else {
    feedback.className = 'incorrect';
    feedback.textContent = 'Det mekaniska låset ger ifrån sig ett klick, men grinden öppnas inte. Försök igen.';
  }
}

function showNextText() {
  nextText.style.display = 'block';
  continueBtn.style.display = 'none';
  nextText.innerHTML = `
    <p>Gnisslet påminner dig om att du behöver smörja grinden. Du går glatt ut på vägen som leder in till byn.
    Idag är det tisdag och tisdag är dagen du måste handla, för tisdagar är den enda dagen affären är
    öppen. När du går på vägen börjar du höra ljudet av hovar som klampar mot vägen. Du tittar över
    axeln och ser att det är en trollkarl som är ute och åker i sin vagn i sakta mak. Och såklart är det
    Talgelf, din gamla kompis. Du blir glad av att se honom. Ni pratar lite om tomater men sen säger Talgelf
    att han har ett problem. Raketerna han har vill inte längre lysa trots att han använt samma kemiska
    formel som han gjort i alla år. Men Talgelf har blivit lite till åren och kanske är det så, medger han lite generat,
    att han kanske har gjort fel när han blandat ihop raketkrutet.</p>
  `;
}

generateProblems(2, 5, 19);

function showProblems() {
  document.getElementById('print-area').style.display = 'block';
}
