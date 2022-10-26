function prime(n) {
    const primes=[]

    nextPrime:
    for (let i = 2; primes.length < n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }

        primes.push(i);
        }
    return primes
}
console.log(prime(process.argv[2]))