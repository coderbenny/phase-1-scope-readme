
function myFunc(){
    const myVar = 42;
    return myVar * 2;
}

const globalVar = 1;

function firstFunc(){
    const firstVar = 2;

    function secondFunc(){
        const secondVar = 3;
        return secondVar + firstVar + globalVar;
    }

    const resultFromSecondFunc = secondFunc();
    return resultFromSecondFunc
}

const fruit = "Apple";

function first(){
    const vegetable = "Brocolli";

    console.log("fruit:", fruit);
    console.log("vegetable:", vegetable);
    console.log("legume:", legume);
}

function second(){
    const legume = "Peanut";

    console.log("fruit:", fruit);
    console.log("vegetable:", vegetable);
    console.log("legume:", legume);
}

const anotherVar = 42;

function anotherFunc(){
    const anotherVar = 9001;
    return anotherVar;
}
