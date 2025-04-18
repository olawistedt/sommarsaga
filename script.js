const problem1List = document.getElementById('problem1-list');
const problem2List = document.getElementById('problem2-list');
const feedback = document.getElementById('feedback');
const newProblemFeedback = document.getElementById('problem2-feedback');
const userSum = document.getElementById('userSum');
let korrektSumma = 0;
let problem2Sum = 0;

function generateProblem1(antal, minTal, maxTal) {
  problem1List.innerHTML = '';
  korrektSumma = 0;

  for (let i = 0; i < antal; i++) {
    const tal1 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const tal2 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const summa = tal1 + tal2;
    korrektSumma += summa;

    const item = document.createElement('li');
    item.textContent = `${tal1} + ${tal2} = `;
    problem1List.appendChild(item);
  }
}

function generateProblem2(antal, minTal, maxTal) {
  problem2List.innerHTML = '';
  problem2Sum = 0;

  for (let i = 0; i < antal; i++) {
    const tal1 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const tal2 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const tal3 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    summa = tal1 + tal2 + tal3;
    problem2Sum += summa;

    const item = document.createElement('li');
    item.textContent = `${tal1} + ${tal2} + ${tal3} = `;
    problem2List.appendChild(item);
  }
}

function printList(listElement) {
  const printArea = document.getElementById("print-area");
  const content = document.getElementById("print-content");

  // Clear content of print area first
  content.innerHTML = '';

  // Clone the passed list and append it to the print content
  const clonedList = listElement.cloneNode(true);
  content.appendChild(clonedList);

  // Temporarily show print area
  printArea.style.display = "block";

  // Print
  window.print();

  // Hide again after printing
  printArea.style.display = "none";
}

function checkOnEnter(event) {
  if (event.key === 'Enter') {
    checkSum();
  }
}

function checkOnEnterProblem2(event) {
  if (event.key === 'Enter') {
    checkProblem2();
  }
}

function checkSum() {
  const userInput = parseInt(userSum.value);
  if (isNaN(userInput)) {
    feedback.textContent = 'Skriv in ett heltal.';
    feedback.className = 'incorrect';
    return;
  }

  if (userInput === korrektSumma) {
    feedback.className = '';
    feedback.innerHTML = `
      <span class="correct">Grinden öppnas med ett litet gnissel.</span><br><br>
      Gnisslet påminner dig om att du behöver smörja grinden. Du går glatt ut på vägen som leder in till byn.
      Idag är det tisdag och tisdag är dagen du måste handla, för tisdagar är den enda dagen affären är
      öppen. När du går på vägen börjar du höra ljudet av hovar som klampar mot vägen. Du tittar över
      axeln och ser att det är en trollkarl som är ute och åker i sin vagn i sakta mak. Och såklart är det
      Talgelf, din gamla kompis. Du blir glad av att se honom. Ni pratar lite om tomater men sen säger Talgelf
      att han har ett problem. Raketerna han har vill inte längre lysa trots att han använt samma kemiska
      formel som han gjort i alla år. Men Talgelf har blivit lite till åren och kanske är det så, medger han lite generat,
      att han kanske har gjort fel när han blandat ihop raketkrutet.
    `;
    document.getElementById('continue-btn').style.display = 'inline-block';
    generateProblem2(2, 5, 19);
  } else {
    feedback.className = 'incorrect';
    feedback.textContent = 'Det mekaniska låset ger ifrån sig ett klick, men grinden öppnas inte. Försök igen.';
  }
}

function showNextText() {
  document.getElementById('next-text').innerHTML = `
    <p>Du har nu stött på ett nytt problem. Räknar du rätt, kommer du vidare på din resa!</p>
  `;
  document.getElementById('problem2-section').style.display = 'block';
  document.getElementById('continue-btn').style.display = 'none';
}

function checkProblem2() {
  const userInput = parseInt(document.getElementById('problem2-answer').value);
  if (userInput === problem2Sum) {
    newProblemFeedback.className = 'correct';
    newProblemFeedback.textContent = 'Rätt svar! Du har löst problemet.';
  } else {
    newProblemFeedback.className = 'incorrect';
    newProblemFeedback.textContent = 'Fel svar, försök igen.';
  }
}

document.getElementById('show-screen-btn').addEventListener('click', function () {
  document.getElementById('print-area').style.display = 'block';
  generateProblem1(1, 5, 19);
});

document.getElementById('show-screen-btn-2').addEventListener('click', function () {
  document.getElementById('print-area').style.display = 'block';
  generateProblem2(1, 5, 19);
});

generateProblem1(2, 5, 19);
