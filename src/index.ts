export {};

function isPrime (Number: number) {
   const __isprime: string[] = [];
   if (Number <= 1) {
      return false;
   }
   if (Number == 2 || Number == 3) {
      __isprime.push('Prime');
      return __isprime;
   }

   if (Number % 2 == 0 || Number % 3 == 0) {
      __isprime.push('Not Prime');
      return __isprime;
   }

   for (let i = 5; i <= Math.sqrt(Number); i++) {
      if (Number % i == 0 ) {
         __isprime.push('Not Prime');
         return __isprime;
      }
   }
   __isprime.push('Prime');
   return __isprime;
}

console.log(isPrime(97));
