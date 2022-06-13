function max(numbers) {
    let biggest = null;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] > biggest ? biggest = numbers[i] : biggest = biggest;
    }
    return biggest;
}

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
// refer https://ithelp.ithome.com.tw/articles/10210319
// https://stackoverflow.com/questions/18679876/convert-operator-from-string-type-to-operator-type

function totalPrice(data) {
    let totalProduct = data.products.length;
    let allprice = null;
    for (let i = 0; i < totalProduct; i++) {
        allprice += data.products[i].price;
    }
    return allprice * data.discount;
}