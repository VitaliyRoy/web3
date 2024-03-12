let number=2;
while (number<=100) {
    let prime=true;
    for(let i=2;i < number; i++){
        if(number%i===0){
            prime=false;
            break;
        }
    }
    if(prime===true){
        console.log(number);
    }
    number++;
}