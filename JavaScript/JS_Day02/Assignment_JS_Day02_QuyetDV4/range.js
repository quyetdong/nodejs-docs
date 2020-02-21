function range(a,b) {
    var arr = [];
    
    for(var i = 0; i<(b-a+1); i++){
        arr[i] = a+i;
    }

    return arr;
}

function sum(arr) {
    //var total = 0;
    //for(var i in arr) total += arr[i];
    return (arr == '')?0:(arr.pop()+sum(arr));
}

function isEven(n) {
    if(n==0) return true;
    if(n==1) return false;

    return (n>1)?isEven(n-2):isEven(n+2);
}

//console.log(isEven(19));

function print(fn, s) {
    // TODO
    if((typeof s) == "string"){
        fn('\''+ s + '\'');
    } else fn(s);
}
  
//print(console.log, 'a'); // hiển thị 'a'
//print(console.log, 10); // hiện thị 10

function add(a, b) {
    return a + b;
  }
  
function sub(a, b) {
    return a - b;
}
  
function op(fn, a, b) {
    // TODO
    return function (a, b) {
        if(fn(a,b) == a+b) {
            console.log((fn(a, b) - b) + ' + ' +(fn(a, b) - a));
        }
        if(fn(a,b) == a-b) {
            console.log((fn(a, b) + b) + ' - ' +(a - fn(a, b)));
        }
    }
}
  
var opAdd = op(add);
opAdd(1, 2); // trả về 1 + 2
  
var opSub = op(sub);
opSub(3, 2); // trả về 3 - 1

///////////////////////////////
function foo() {
    console.log('a');
 }
 
function repeat(fn, n) {
    // TODO
    if(n < 1) {
        console.log(n + " :not valid");
        return 0;
    }

    fn();
    return (n >= 2) ? repeat(fn, n-1) : 1;
 }
 
 repeat(foo, 5); // hiện thị ra a 10 lần
