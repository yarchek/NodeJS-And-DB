let rect = {
    perimeter: (x, y) => (2 * (x + y)),
    area: (x, y) => (x * y)
};

function solveRectangle(l, b) {
    console.log('Solving for rectangle with l= ' + l + ', and b = ' + b);

    if ( l<= 0 || b <= 0) {
        console.log('Rectangle dimension should be greater than zero: l = ' + l + ', and b = ' + b);
    } else {
        console.log('The ares of the rectangle is ' + rect.area(l, b));
        console.log('The perimeter of the rectangle is ' + rect.perimeter(l, b));
    }
}

solveRectangle(2,4);