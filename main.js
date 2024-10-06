function main(){

let num1=prompt("Введите число");
let num2=prompt("Ведите второе число")

let element=prompt("Введите операцию +,-,*,/.");
switch(element){
        case "+":
            return +num1 + +num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
            default:
                console.log("Такой операции нет,пробуйте еще!")
    
   
}
return element;
}
console.log(main());