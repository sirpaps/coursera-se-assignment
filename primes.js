#!/usr/bin/env node

var fs = require('fs');


function isPrime( number ) {
	if (number == 2 || number == 3)
		return true;

	if (number == 1 || !(number % 2) || !(number % 3) )
		return false;

	for ( var i = 5; i <= Math.ceil(Math.sqrt(number)); i += 2 ) {
		if ( !(number % i) )
			return false;
	}

	return true;
}


function firstHundredPrimes() {
	var i = 1
	  , j = 100
	  , firstHundred = new Array( j );

	while ( j-- ) {
		for ( ; ; ) {
			++i ;
			if ( isPrime( i ) ) {
				firstHundred[ 99 - j ] = i;
				break;
			}
		}
	}

	return firstHundred;
} 


fs.writeFileSync( 'primes.txt', (firstHundredPrimes()).join(", ") );
