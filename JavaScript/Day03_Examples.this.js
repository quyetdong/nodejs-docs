function foo(newA) {
	this.a = newA;
}

foo('wow, OK global');
console.log('global: ' + a);

//////////////////////////////////
var obj2 = {
	foo: foo
};
obj2.foo('obj2 or default?'); // 42

/////////////////////////////////
var obj1 = {
	b: 'hi'
};
var bind2 = obj2.foo.bind(obj1);
bind2('obj1 or obj2');

////////////////////////////////
var x = new obj2.foo('put to obj2 or new?');
var y = new bind2('put to obj1 or new?');

console.log( 'new x: ' + x.a );
console.log( 'obj2 implicit: ' + obj2.a );
console.log( 'new y: ' + y.a );
console.log( 'obj1 explicit: ' + obj1.a );