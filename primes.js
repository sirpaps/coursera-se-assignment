#!/usr/bin/env node

var fs = require('fs');


function isPrime( number ) {
	if (number == 2 || number == 3)
		return true;

	if (number == 1 || ! (number % 2) || !(number % 3) )
		return false;

	for ( var i = 5; i <= Math.ceil(Math.sqrt(number)); i += 2 ) {
		if ( !(number % i) )
			return false;
	}

	return true;
}


function firstHundredPrimes() {
	var firstHundred = []
	  , i = 1;

	while ( firstHundred.length < 100 && i++ ) {
		if ( isPrime( i ) )
			firstHundred.push( i );
	}

	return firstHundred;
}


fs.writeFileSync( 'primes.txt', firstHundredPrimes() );
