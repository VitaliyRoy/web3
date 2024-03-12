let number=0;
let pr;
do {
    if(number===0){
        pr=" - це нуль";
    }
    else if(number%2==0){
        pr=" - парне число";
    }
    else{
        pr=" - непарне число";
    }
    console.log(number+pr);
    number++;
} while (number<=10);