(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruitName: string ): boolean {
        
        const redFruitsNames=['manzana','cereza','ciruela'];

        return redFruitsNames.includes(fruitName);        


        // if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {        
        switch (color) {
            case 'red': return ['manzana','fresa']; 
            case 'yellow': return ['piña','banana']; 
            case 'purple': return ['moras','uvas']         
            default: throw Error('the color must be: red, yellow, purple');
        }      

        // if ( color === 'red' ) {
        //     return ['manzana','fresa'];
        // } else if ( color === 'yellow') {
        //     return ['piña','banana'];
        // } else if ( color === 'purple') {
        //     return ['moras','uvas']
        // } else {
        //     throw Error('the color must be: red, yellow, purple');
        // }
    }


    // Simplificar esta función
    //Usar type para los colores de las frutas
    //Crear un map clave, valor. la clave sera el color y el valor seran los nombres de las frutas
    type FruitColor='red'|'yellow'|'purple';

    function getFruitsByColorV2( color: FruitColor ): string[] {        
        //Estructura Map clave-valor
        const fruitsByColor={
            red: ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas']
        };

        //Si el Map  no incluye el color retornar un error
        if (!Object.keys(fruitsByColor).includes(color))  throw Error('the color must be: red, yellow, purple');

        return fruitsByColor[color];
     }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps():string {

        if( !isFirstStepWorking) return 'First step broken.';
        if( !isSecondStepWorking) return 'Second step broken.';
        if( !isThirdStepWorking ) return 'Third step broken.';
        if( !isFourthStepWorking) return 'Fourth step broken.';

        return 'Working properly!';


        // if( isFirstStepWorking === true ) {
        //     if( isSecondStepWorking === true ) {
        //         if( isThirdStepWorking === true ) {
        //             if( isFourthStepWorking === true ) {
        //                 return 'Working properly!';
        //             }
        //             else {
        //                 return 'Fourth step broken.';
        //             }
        //         }
        //         else {
        //             return 'Third step broken.';
        //         }
        //     }
        //     else {
        //         return 'Second step broken.';
        //     }
        // }
        // else {
        //     return 'First step broken.';
        // }
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();





