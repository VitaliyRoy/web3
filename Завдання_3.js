let numb = 10000;
let result;
let counter = 0;
do {
    numb /=2;
    result = numb;
    counter++;
} while (numb>=50);
console.log(result + '\n' + counter);