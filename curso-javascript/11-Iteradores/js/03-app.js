//3 6 9 12 = fizz
//5 10 15 20 = buzz
//15 30 45 = fizzbuzz

for(let i = 0; i < 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if( i % 3 === 0) {
        console.log('fizz');
    } else if( i % 5 === 0) {
        console.log('buzz');
    }
}