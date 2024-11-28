let calculation =  '';


displayCalculation();

function displayCalculation(){
    // funciona como o console.log, mas na tela, na classe js-calculation do html
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
};

// 
function updateCalculation(value){
    calculation  += value;
    displayCalculation() ;
};

function equal(){
    calculation = eval(calculation)
    displayCalculation(calculation);
};

function clearCalculation(){
    calculation  = '';
    displayCalculation(calculation);
};


// function two(){
//     calculation  += '2';
//     console.log (calculation);
// };

// function thre(){
//     calculation  += '3';
//     console.log (calculation);
// };

// function plus(){
//     calculation  += ' + ';
//     console.log (calculation);
// };

// function four(){
//     calculation  += '4';
//     console.log (calculation);
// };

// function five(){
//     calculation  += '5';
//     console.log (calculation);
// };

// function six(){
//     calculation  += '6';
//     console.log (calculation);
// };

// function minus(){
//     calculation  += ' - ';
//     console.log (calculation);
// };

// function seven(){
//     calculation  += '7';
//     console.log (calculation);
// };

// function eigth(){
//     calculation  += '8';
//     console.log (calculation);
// };
// function nine(){
//     calculation  += '9';
//     console.log (calculation);
// };

// function multiply(){
//     calculation  += ' * ';
//     console.log (calculation);
// };


// function zero(){
//     calculation  += '0';
//     console.log (calculation);
// };

// function point(){
//     calculation  += '.';
//     console.log (calculation);
// };

// function divide(){
//     calculation  += ' / ';
//     console.log (calculation);
// };
