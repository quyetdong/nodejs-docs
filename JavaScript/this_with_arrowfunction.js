function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  (function () {
	  this.age++;	 //this hear refers to global object
  })();
}

function PersonX() {
  // The PersonX() constructor defines `this` as an instance of itself.
  this.age = 0;

  (() => {
	  this.age++;	 //this hear refers to the instance of PersonX
  })();
}

var age = 1;
var p = new Person();  //p.age = 0; age = 2;
var px = new PersonX(); //px.age = 1; age = 2;

//*** Arrow functions do not have their own this ***//
function foo() {
	// return an arrow function
	return (a) => {
		// `this` here is lexically adopted from `foo()`
		console.log( this.a );
	};
}

var obj1 = {
	a: 2
};

var obj2 = {
	a: 3
};

var bar = foo.call( obj1 );
bar();
// bar.call( obj2 ); // 2, not 3!s

//*** this in arrow-function ignores .call() .apply() .bind() ***//
var adder = {
  base: 1,

  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1));         // This would log to 2
console.log(adder.addThruCall(1));  // This would log to 2 still

