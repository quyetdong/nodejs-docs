## 1.4 Classes
   Javascript class là một sự biểu diễn tính kế thừa dựa trên nền tảng prototype trong JS.
   Classes là những hàm đặc biệt cho phép khởi tạo các đối tượng cụ thể từ nó.
### 1.4.1 Provide an example to create a new class named Person which have 2 fields: id, name and 1 method: sayHello which print hello to the console
```
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    sayHello() {
        console.log('Hello');
    }
}
```
   Class declaration is not hoisted. 

### 1.4.2 What is keyword extends and super, provide an example that used both keyword ?
   Từ khóa extends được dùng trong khai báo class thông thường hoặc khai báo class dạng biểu thức để tạo một class con của một class khác.
   Từ khóa super dùng để gọi các methods tương ứng của class cha bên trong class con
   Ví dụ:
   ```
   class Boys {
       constructor(name, age) {
           this.name = name;
           this.age = age;
       }
       activity() {
           console.log(`${this.name} likes playing sport!`);
       }
   }

   class TeenBoys extends Boys {
       activity() {
           super.activity();
           console.log(`${this.name} plays basketball!`);
       }
   }
   ```
### 1.4.3 Consider the following code, what will be printed out?
```
class Cha {
  constructor() { this.id = 'a' }
  method() {
    console.log('Cha', this.id)
  }
}

class Con extends Cha {
  method() {
    super.method();
    console.log('Con', this.id)
  }
}

const xMan = new Cha();
const xBoy = new Con();
xMan.method();   // 'Cha a'
xBoy.method();   // 'Cha a/nCon a'
```
### 1.4.4 What is static keyword ?
   Từ khóa static dùng để định nghĩa một static method cho class. Static method là method được gọi mà không cần phải khởi tạo đối tượng cho class và static method cũng không thể được gọi thông qua một đối tượng cụ thể của class. Static method được gọi bằng chính class đó theo syntax: ClassName.method();
   Ví dụ:
   ```
   class Animal {
       static moving() {
           console.log("Animal can move");
       }
   }

   const a = new Animal();
   a.moving();   // TypeError
   Animal.moving();  // 'Animal can move'
   ```
## 1.5 Block Scope: let + const
## 1.6 Default Values and the Gather/Spread Operator
### 1.6.1 Default Values: how to define a functon with default value in ES5 ? And in ES6 ?
   * In ES5: to define a function with default value, we need to check inside the body of the function whether the parameter's value is undefined or not, if the value is undefined then we assign a default value for it.
   * In ES6: we just give the default value together with the parameter declaration
   Example: 
   ```
   ES5:
      function add(a, b) {
          if(a === undefined) {
              a = 0;
          }
          if(b === undefined) {
              b = 0;
          }
          return a+b;
      }
   
   ES6:
      function add(a=0, b=0) {
          return a+b;
      }
   ```

### 1.6.2 Lazy expression, evaluate the following code, how many times g have been called ?
```
function g() {
  console.log('g');      
}

function f(x = g()) {    
}

f(1);     //zero, g không được gọi
f();      //one, g được gọi lần 1
f();      //two, g được gọi lần 2
```
   g have been called two times.

### 1.6.3 Evaluate the following code
```
var x = 1;

function f(x = 2, fn = function() { return x }) {
  console.log(fn());
}

f();
```
   Hàm f được gọi, các tham số x, fn không được truyền đối số; tham số x thuộc hàm f được gán giá trị mặc định là 2, fn được gán giá trị mặc định là function() { return x }.
   fn được gọi trong hàm console.log() và trả về giá trị 2; hàm console.log() sẽ in ra giá trị 2 trên màn hình console.

### 1.6.4 What's a variadic arguments?
   * variadic arguments: đa đối số, cho phép truyền vào nhiều đối số cho hàm.
   
   * unary operator: +1;  ~1;  !1;
   * binary operator: a + b;
   * variadic operator: ...a; 
   * variadic function: function (...a) { };  

### 1.6.5 What is arguments in a JavaScript function ?
   "arguments" là một đối tượng trong một function thông thường (không phải arrow function) có dạng giống như một Array chứa tất cả các đối số mà hàm được truyền vào khi gọi hàm, các key của arguments object có giá trị tương ứng giống như index trong Array.

### 1.6.6 … operator can be used in 2 differents ways, see code below:
```
function f(...args) { // gather arguments
}

var x = [1, 2, 3];
var y = [4, 5];
var z = [0, ...x, ...y ]; // spread out
```

### 1.6.7 In which way the … operator is used in following code
```
function g(...arr) {    // ? all arguments transfered to g will be put into arr Array
}

var a = [1, 2, 3];
var b = [4, 5, 6];

g(...a, ...b);      // ? a and b will be spread out into elements
```

### 1.6.8 Exercise: fix the following code so console.log will print true
```
function f(...arr) { return arr.slice(0,1).concat(arr.slice(3));}

function g() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];


  return f(...a1, ...a2);
}

console.log(g().join("") === "281012"); // print true
```

## 1.7 Destructuring
### 1.7.1 What is destructuring ? Example ?
   Destructuring là một kỹ thuật trong JS cho phép chiết xuất nhiều giá trị cùng một lúc trong một câu lệnh assignment từ data được lưu trong Object hay Array và assign các giá trị này cho các biến số tương ứng cùng lúc.
   Example:
      const {a, b} = {a: 4, b: 5, c: 8};
      console.log(a);    // 4
      console.log(b);    // 5

### 1.7.2 Can you use destructuring and default values together ? Provide example?
   We can use destructuring and default values together.
   Example:
   ```
   const arr = [1, 2, 3, 5, 7];
   function f([x, y=10] = arr) {
       return x+y;
   }
   
   f();  // 3
   f([9]);  // 19
   f([9, 5]); // 14 
   ```

### 1.7.3 Dumping values: provide example that extract the 3rd element in an array and don't care about the 1st, 2nd element ? Provide example that swap 2 numbers ?
   Dumping values: là những giá trị không cần thiết cần bỏ qua trong câu lệnh destructuring assignment
```
[,, x] = [3, 5, 9];
x;   // 9

//swap two numbers
[x1, x2] = [x2, x1];
```

### 1.7.4 Nested Array Destructuring: in case we have an array like this [[1, 2], [3, 4], [5, 6]] use destructuring to extract the number 1 to variabled called a
```
[[a], b] = [[1, 2], [3, 4], [5, 6]];
a;   //1
b;   //[3, 4]
```
   Sử dụng Array destructuring cho phép mô tả cấu trúc dữ liệu trả về.

### 1.7.5 Object Destructuring: provide an example that use destructuring to extract property in an object ?
```
const obj = {name: 'Duy', age: 20};
const {name: f} = obj;

f;   //'Duy'   ? tại sao name == "", vì name là thuộc tính mặc định của global object
```
   Object destructuring => Named arguments.

### 1.7.6 Nested Object Destructuring: in case we have an object like this { nested: { a: 10 } }, provide an example that use destructuring to extract value of a in inside nested object
```
const { nested: { a: x } } = { nested: { a: 10 } };
x;   //10
```

### 1.7.7 Destructuring and Function Parameters: consider the array destructuring for parameters what will be printed out ?
```
function fn([ x, y ]) {
  console.log(x, y);
}

fn([ 1, 2 ]); // 1 2
fn([ 1 ]); // 1 undefined
fn([ ]); // undefined undefined
```

### 1.7.8 Exercise: practice object destructuring, object constructuring
```
function ajax(url,cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [ 6, 8, 10 ],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 === (
      data.foo +
      data.bar +
      data.baz[0] + data.baz[1] + data.baz[2] +
      data.bam.qux +
      data.bam.qam
    )
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

function response({ foo: f, baz: b, bam: {qux: q} }) {

  check({
    foo: f + defaults.foo,
    baz: b,
    bar: defaults.bar,
    bam: { qux: q + defaults.bam.qux, qam: defaults.bam.qam }
  });
}

ajax("http://fun.tld",response);  // true
```

## 1.8 Object Literal Extensions
### 1.8.1 Concise properties: consider the following code what do you think ?
```
var x = 2, y = 3;
var o1 = {
  x: x,
  y: y
}

var o2 = {
  x,
  y
}

console.log(o1); // {x : 2, y: 3} 
console.log(o2); // {x : 2, y: 3} 
```
   Cách khai báo object o1 và o2 tạo hai object giống nhau, tuy nhiên cách khai báo o2 cho phép sử dụng các variable x, y trực tiếp làm các property của o2 và giá trị của property chính là giá trị của variable; cách khai báo này ngắn gọn hơn cách khai báo o1.

### 1.8.2 Concise Methods: consider the following code what do you think ?
```
var o1 = {
  x: function() {
    console.log('o1.x');
  },
  y: function() { }
}

o1.x();

var o2 = {
  x() {
     console.log('o2.x');
  },
  y() {}
}

o2.x();
```
   Hai cách định nghĩa object o1, o2 cho hai object giống nhau tuy nhiên cách định nghĩa o2 ngắn gọn hơn.
   Cách định nghĩa o2 khai báo hai method của object bằng hai function có function name, và tên của function được hiểu là tên của method.

### 1.8.3 ES5 Getter/Setter: consider the following code
```
var o = {
  _id: 10,
  get id() { return this._id++; },
  set id(v) { this._id = v; }
}

o.id; //   10
o.id = 100;
o.id; //   100
```
## 1.9 Template Strings
### 1.9.1 Template Strings: what is template strings ?
   Template strings là những chuỗi cho phép thêm từ, xuống dòng hoặc nhúng các biểu thức vào bên trong chuỗi mà không cần ngắt chuỗi.

### 1.9.2 Consider this code below, rewrite it using ES6 template string
```
var name = 'That Duy';
var chaoDuy = `Hello ${name} !`;

console.log(chaoDuy);
console.log(typeof chaoDuy);
```
### 1.9.3 Interpolated Expression: can we use function inside ${…} if yes provide an example
   Yes, we can use function inside ${...}
   Example:
```  
let title = 'A thousand splendid suns';
let book = `I have a book: ${(function (str) {
  return `Title of this book is '${str}'`;
})(title)}`
console.log(book);
```

### 1.9.4 Tag Functions: consider the code below
```
function f(strings, ...values) {
  console.log(strings);
  console.log(values);
}

var s = 'Fresher Academy';
f`Hello ${s}`; // ['Hello ', '']  ['Fresher Academy']
```
   Tag function là một lệnh gọi hàm sử dụng template literal (template string) để truyền đối số vào params của hàm.

### 1.9.5 Exercise
```
function upper(strings,...values) {
  // TODO
	return strings[0] + values[0].toUpperCase() + strings[1] + values[1].toUpperCase() + strings[2] + values[2].toUpperCase() + strings[3];	
}

var name = 'Nguyen Van A',
  account = 'anv',
  classname = 'Fresher Academy ES6';

console.log(
  upper`Hello ${name} (@${account}), welcome to the ${classname}!` ===
  'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER ACADEMY ES6!'
);
```
```
function upper(strings,...values) {
  // TODO
  let s='';

  for(let i=0, length=strings.length; i < length; i++) {
    if(i>0) {
      s += values[i-1].toUpperCase();
    }
    s += strings[i];

  }

	return s;	
}

var name = 'Nguyen Van A',
  account = 'anv',
  classname = 'Fresher Academy ES6';

console.log(
  upper`Hello ${name} (@${account}), welcome to the ${classname}!` ===
  'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER ACADEMY ES6!'
);
```

## 1.10 Modules
### 1.10.1 What is module pattern ?
   Module pattern là một phương pháp lập trình giúp viết code và thực thi code theo các module riêng biệt với các ưu điểm là dễ mở rộng, giảm thiểu conflict khi làm việc theo nhóm, quản lý các biến local dễ hơn...
   
   Module là một đơn vị phần mềm hay một bộ phận trong một chương trình mà thực hiện một chức năng riêng và có thể hoạt động tương đối độc lập trong chương trình. Mỗi module có chức năng riêng biệt và xử lý những nhiệm vụ riêng, module cho phép việc xáo trộn, thay đổi hay xóa bỏ nó mà không gây gián đoạn cho hệ thống.    

### 1.10.2 What is ES6 import/export ?
   
### 1.10.3 What is export default ? How to import a exported default function ?

### 1.10.4 Circular Module Dependency: A imports B, B imports A, how does this work ?

## 1.11 Module Loaders

## 1.12 Collections
### 1.12.1 Map: what is Map in JS ? How to iterate a Map ? How to get a value ? How to set a value ? How to know if a value is in Map ?
   * Map là một kiểu Object trong javascript cho phép lưu trữ dữ liệu theo các cặp giá trị key-value, trong đó khác với một Object thông thường (key chỉ có thể là String hoặc Symbol), bất kỳ giá trị nào (primitive value, function, object) đều có thể dùng như một key hoặc value trong Map. 
   * Iterate through a map: Dùng forEach, for...of
   * x = new Map();   //new Map([iterable])
   x.get(key);
   x.set(key, val);
   x.has(key);
   iter = x.keys();   iterVal = x.values();  //x.entries(); => trả về một Iterator object chứa một mảng gồm các cặp giá trị {key, value} tương ứng với từng phần tử của Map (x) theo thứ tự được thêm vào Map.

### 1.12.2 Set: what is Set in JS ? How to iterate a Set ? How to get a value ? How to set a value ? How to know if a value is in Set ?
   * Set là một kiểu object cho phép bạn lưu trữ các giá trị độc nhất (không trùng nhau) của bất kỳ loại dữ liệu nào, cho dù là kiểu nguyên thủy hay các tham chiếu đến các object.
   * s = new Set([iterable]);
   iter = s.entries();
   iter ở đây là một Iterator object được trả về từ method Set.prototype.entries(); iter chứa một mảng gồm các cặp giá trị {value, value} tương ứng với từng phần tử của object s theo thứ tự được thêm vào Set; iter của Set được lưu giữ tương tự như Map.

### 1.12.3 Weakmap same question like Map ? What is the difference between Map vs Weakmap
   WeakMap và WeakSet hỗ trợ garbage collector (dọn rác) khi giá trị của một phần tử không còn liên kết với WeakMap (WeakSet)

### 1.12.4 Weakset same question like Set ? What is the difference between Set vs WeakSet

## 1.13 Proxies

## 1.14 Promises

## 1.15 Math + number + string + array + objects
### 1.15.1 Array add of(..), from(..)* and fill(..). Provide example using them
   * Array.of(7);       // [7] 
   Array.of(1, 2, 3); // [1, 2, 3]

### 1.15.2 Provide example using Object.is and Object.assign

### 1.15.3 Provide example using String.repeat and String.includes

## 1.16 Binary and Octal literals

## 1.17 Reflect Api

## 1.18 Tail calls

## 1.19 Symbols, Iterators, and Generators
### 1.19.1 Symbols: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
   * what is symbols ? provide sample 
   Symbol là một kiểu dữ liệu nguyên thủy được tạo ra bằng cách gọi hàm Symbol(); mỗi giá trị symbol được tạo ra là ngẫu nhiên và duy nhất, không trùng với bất kỳ giá trị nào trong phạm vi chương trình hay app.

   * Well-known Symbols?

### 1.19.2 Iterators: study about Iterators (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
   * What is Iterators ?
   Là một kiểu object đặc biệt trong đó nó cho phép truy cập các phần tử bên trong nó một cách lần lượt, trong khi duyệt qua các phần tử nó vẫn theo dấu được vị trí hiện tại của mình trong chuỗi. 

   * What is the Interface of Iterators ?
   iterator là một object có chứa method next() là method mà khi được gọi sẽ trả về một item tiếp theo trong chuỗi.
   next() method sẽ trả về một object với hai properties là: done (true hoặc false) và value. 
   
   iterator dừng khi câu lệnh gọi method next() trả về object với đặc tính done có giá trị là true.

   * Provide an example using Iterator ?
   ```
   function makeIter(a, b) {
     return {
       next() {
        if(a <= b) return {done: false, value: a++};
        else return {done: true, value: a};
       }
     }
   }
     
   let iter = makeIter(1, 10);

   iter.next().value;
   iter.next().value;
   ```
   * Creating a Custom Iterators
   ```
   let str = new String('achk');
   
   let orIter = str[Symbol.iterator](); 
   console.log(orIter.next());
   console.log(orIter.next());
   
   str[Symbol.iterator] = function() {
     let begin = str.charCodeAt(0);
     let last = str.charCodeAt(str.length - 1);

     return {
        next() {
        if(begin <= last) {
            return { done: false, value: String.fromCharCode(begin++) };
        }
        else return {done: true, value: String.fromCharCode(begin)};
     }
    }
   };
   
   let alIter = str[Symbol.iterator](); 
   console.log(alIter.next());
   console.log(alIter.next());
   console.log(alIter.next());
   ```
### 1.19.3 Generators
   What is Generators ? What is syntax to create a generator ? How you execute a generator ? How we handle errors in generator?
   Where do you think we should use generator ?

### 1.19.4 Exercise
```
var numbers = {
  // ..
};

// should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}

// should print 6..30 by 4s
for (let num of /*..*/) {
  console.log(num);
}
```
```
var numbers = {
  // ..
	 i: 0,
	 end: 100,

	[Symbol.iterator]() {
		i = this.i;
		end = this.end;
		return { next: 
			function() {
			  if(i <= end)return { value: i++, done: false }
			  else return { value: undefined, done: true}
		}
	 }
   }		
};

// should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}
```
