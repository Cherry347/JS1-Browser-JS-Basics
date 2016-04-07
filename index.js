// tripleFive
var tripleFive= function() {
    for(var i=0; i< 3; i ++) {
        console.log("Five!");
    	
    }
}
tripleFive()

// lastLetter
var lastLetter= function(n) {
    return n[n.length -1];
}
lastLetter("cherry")

// square
var square= function(n) {
    return n*n;
}
square()

//negate
var negate= function(n) {
	if(n < 0) {
		return Math.abs(n);
	}
	else {
		return n - n*2;
	}
}
negate()

//toArray
var myArray= [];
var toArray= function(x,y,z) {
	return myArray.push(x,y,z);
}
toArray(1,2,3)
console.log(myArray)

