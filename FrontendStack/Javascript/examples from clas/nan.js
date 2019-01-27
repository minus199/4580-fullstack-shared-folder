
function sum(x,y){
    x = Number(x);
    if (x === NaN){
        throw `x is not a number`;
    }

    y = Number(y);
    if (y === NaN){
        throw `y is not a number`;
    }

    return x + y;
}



let res = sum('0.0314E+2', '123e-1'));
console.log(res); // expected output: 15.440000000000001

res = sum('0.0314E+2', '100F');  // expected error: "y is not a number"
console.log(res); // This line is not reached


