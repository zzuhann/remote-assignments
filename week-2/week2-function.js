// Assignment 1: Function and Array
function max(numbers) {
    let biggest = null;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] > biggest ? biggest = numbers[i] : biggest = biggest;
    }
    return biggest;
}

// Assignment 2: Object
function calculate(args) {
    switch (args.op) {
        case '+':
            return args.n1 + args.n2;
        case '-':
            return args.n1 - args.n2;
        case '/':
            return args.n1 / args.n2;
        case '*':
            return args.n1 * args.n2;
        default:
            return 'Not supported'
    }
}

// Assignment 3: Function, Array, and Object
function totalPrice(data) {
    let totalProduct = data.products.length;
    let allprice = null;
    for (let i = 0; i < totalProduct; i++) {
        allprice += data.products[i].price;
    }
    return allprice * data.discount;
}