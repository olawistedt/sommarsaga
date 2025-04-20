const problem1List = document.getElementById('problem1-list');
const problem2List = document.getElementById('problem2-list');
const feedback = document.getElementById('feedback');
const newProblemFeedback = document.getElementById('problem2-feedback');
const userSum = document.getElementById('userSum');
const problem3List = document.getElementById('problem3-list');
const problem3Feedback = document.getElementById('problem3-feedback');
let korrektSumma = 0;
let problem2Sum = 0;
let problem3Product = 0;

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
    const summa = tal1 + tal2 + tal3;
    problem2Sum += summa;

    const item = document.createElement('li');
    item.textContent = `${tal1} + ${tal2} + ${tal3} = `;
    problem2List.appendChild(item);
  }
}

function generateProblem3(antal, minTal, maxTal) {
  problem3List.innerHTML = '';
  problem3Product = 0;

  for (let i = 0; i < antal; i++) {
    const tal1 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const tal2 = Math.floor(Math.random() * (maxTal - minTal + 1)) + minTal;
    const produkt = tal1 * tal2;
    problem3Product += produkt;

    const item = document.createElement('li');
    item.textContent = `${tal1} × ${tal2} = `;
    problem3List.appendChild(item);
  }
}

function printList(listElement) {
  const printArea = document.getElementById("print-area");
  const content = document.getElementById("print-content");
  content.innerHTML = '';
  const clonedList = listElement.cloneNode(true);
  content.appendChild(clonedList);
  printArea.style.display = "block";
  window.print();
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

function checkOnEnterProblem3(event) {
  if (event.key === 'Enter') {
    checkProblem3();
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
      <span class="correct">Grinden öppnas med ett litet gnissel.</span>
    `;

    setTimeout(() => {
      feedback.innerHTML += `
        <br><br>
        Gnisslet påminner dig om att du behöver smörja grinden. Du går glatt ut på vägen som leder in till byn.
        Idag är det tisdag och tisdag är dagen du måste handla, för tisdagar är den enda dagen affären är
        öppen. När du går på vägen börjar du höra ljudet av hovar som klampar mot vägen. Du tittar över
        axeln och ser att det är en trollkarl som är ute och åker i sin vagn i sakta mak. Och såklart är det
        Talgalf, din gamla kompis. Du blir glad av att se honom. Ni pratar lite om tomater men sen säger Talgalf
        att han har ett problem. Raketerna han har vill inte längre lysa trots att han använt samma kemiska
        formel som han gjort i alla år. Men Talgalf har blivit lite till åren och kanske är det så, medger han lite generat,
        att han kanske har gjort fel när han blandat ihop raketkrutet.
      `;
      showProblem2();
    }, 2000);
  } else {
    feedback.className = 'incorrect';
    feedback.textContent = 'Det mekaniska låset ger ifrån sig ett klick, men grinden öppnas inte. Försök igen.';
  }
}

function showProblem2() {
  document.getElementById('next-text').innerHTML = `
    <p>Du har nu stött på ett nytt problem. Räknar du rätt, kommer du vidare på din resa!</p>
  `;
  document.getElementById('problem2-section').style.display = 'block';
  generateProblem2(2, 5, 19);
}

function checkProblem2() {
  const userInput = parseInt(document.getElementById('problem2-answer').value);
  if (userInput === problem2Sum) {
    newProblemFeedback.className = 'correct';
    newProblemFeedback.textContent = 'Rätt svar! Du har löst problemet.';

    setTimeout(() => {
      document.getElementById('next-text').innerHTML += `
        <p>Talgalf blir mycket tacksam och vill bjuda på glass som tack. Men han behöver din hjälp med en sista
        formel för att kyla glassen. Den bygger på två magiska tal som du måste multiplicera. Klarar du det?</p>
      `;
      showProblem3();
    }, 2000);
  } else {
    newProblemFeedback.className = 'incorrect';
    newProblemFeedback.textContent = 'Fel svar, försök igen.';
  }
}

function showProblem3() {
  document.getElementById('problem3-section').style.display = 'block';
  generateProblem3(1, 2, 12);
}

function checkProblem3() {
  const userInput = parseInt(document.getElementById('problem3-answer').value);
  if (userInput === problem3Product) {
    problem3Feedback.className = 'correct';
    problem3Feedback.textContent = 'Perfekt! Formeln stämmer. Talgalf tackar dig och skyndar sig iväg.';
  } else {
    problem3Feedback.className = 'incorrect';
    problem3Feedback.textContent = 'Nja, det blev inte riktigt rätt. Försök igen!';
  }
}

document.getElementById('show-screen-btn').addEventListener('click', function () {
  document.getElementById('problem1-list').style.display = 'block';
  generateProblem1(1, 5, 19);
});

document.getElementById('show-screen-btn-2').addEventListener('click', function () {
  document.getElementById('problem2-section').style.display = 'block';
  generateProblem2(1, 5, 19);
});

document.getElementById('show-screen-btn-3').addEventListener('click', function () {
  showProblem3();
});

if (problem1List) problem1List.style.display = 'none';
if (document.getElementById('problem2-section')) document.getElementById('problem2-section').style.display = 'none';
if (document.getElementById('problem3-section')) document.getElementById('problem3-section').style.display = 'none';
