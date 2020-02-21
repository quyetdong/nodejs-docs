for(var i = 1; i<=3; i++) {
	var b = document.getElementById('btn' + i);
	
	var fnc = (function f(a) {
                return function g() {
                alert(a);
                }
	        })(i);
	
	b.addEventListener('click', fnc);
}