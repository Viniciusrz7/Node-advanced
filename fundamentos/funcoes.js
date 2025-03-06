function hello() {
    console.log("Hello function")
}

hello();

const hello2 = function () {
    console.log("Hello function assigned");

}
hello2()

const hello3 = () => {
    console.log("Hello Arrow Function Assigned");
}

hello3();

const hello4 = _ => console.log("Hello Arrow Function Assigned Simplified");

hello4();



function somarS(num1, num2) {
    return (console.log(num1 + num2));
}

somarS(5, 7)


let somarA = function (num1, num2) {
    return (console.log(num1 + num2));
}

somarA(3, 2)

let somarAF = (num1, num2) => {
    return (console.log(num1 + num2));
}

somarAF(3, 2)

let somarAFS = (num1, num2) => (console.log(num1 + num2));
somarAFS(2, 7)