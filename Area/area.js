const input = document.querySelectorAll('.inputs');
const checkBtn = document.querySelector('#check-btn');
const outPut = document.querySelector('#output');

function calculateArea(){
    const Base = Number(input[0].value);
    const Height = Number(input[1].value);
    const AreaOfTriangle = 0.5 * (Base * Height);
    outPut.innerText = "The area of the triangle is " + AreaOfTriangle + " cm²"
}

checkBtn.addEventListener("click",  calculateArea);

