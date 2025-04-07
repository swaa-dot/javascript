function categorizeNumber(input) {
    /**
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */
    
    // 1. Validasi: Jika input bukan number
    if (typeof input !== 'number') {
        throw new Error('Input harus berupa bilangan bulat');
    }
    
    // 2. Jika input adalah nol
    if (input === 0) {
        return 'Nol';
    }
    
    // 3. Jika input negatif
    if (input < 0) {
        return 'Negatif';
    }
    
    // 4. Jika input positif, cek kategori lainnya
    if (input > 0) {
        // 4.a. Cek bilangan prima
        if (isPrime(input)) {
            return 'Prima';
        }

        // 4.b. Cek bilangan genap
        if (input % 2 === 0) {
            return 'Genap';
        }

        // 4.c. Jika tidak genap, pasti ganjil
        return 'Ganjil';
    }
}

// Fungsi untuk memeriksa apakah sebuah bilangan adalah bilangan prima
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0));  // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}