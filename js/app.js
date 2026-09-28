function mathSum() {
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);
    const operator = document.getElementById("operation").value;


    // Hey Luke, Alex here. Just letting you know that I am a silly goose who spent like an hour and a half crashing out about why my code that I thought would work perfectly wasn't doing anything and then I realized that I was editing my class JS file and not my homework one. I'm not ok. I need to be better than that. I'm gonna go crack open a cold diet dr pepper and just ponder some things...



    if (operator === "/" && num2 === 0) {
        return "Please don't make me do that";
    }

    let calculatedResult;

    switch (operator) {
        case "+":
            calculatedResult = num1 + num2;
            break;
        case "-":
            calculatedResult = num1 - num2;
            break;
        case "*":
            calculatedResult = num1 * num2;
            break;
        case "/":
            calculatedResult = num1 / num2;
            break;
        default:
            calculatedResult = "Please specify the number";
    }

    console.log(`Operator: ${operator} | Result: ${calculatedResult}`);
    return calculatedResult;
}

const compute = document.getElementById("compute");
const resultBox = document.getElementById("result");

compute.addEventListener("click", function () {
    const result = mathSum();
    resultBox.innerHTML = `Result: ${result}`;
});