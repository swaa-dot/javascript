//Looping
// for loop
console.log('');
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
  }

  //For in 
  console.log('');
  const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}
//for of
console.log('');
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}
//while
let a = 0;

while (a < 5) {
  console.log(`Angka ke-${a} adalah ${a}.`);
  a++;
}
//do while
console.log('');
let b = 0;

do {
  console.log(`Angka ke-${b} adalah ${b}.`);
  b++;
} while (b < 5);

/*Break
Break statement adalah cara kita untuk memberitahukan interpreter yang 
sedang mengeksekusi kode untuk berhenti dan langsung berpindah ke akhir dari percabangan atau perulangan. Perhatikan contoh berikut.*/
console.log('');
for (let x = 0; x < 10; x++) {
    if (x === 5) {
      break;
    }
    console.log(x);
  }

  //swicth case
  console.log('');
  const number = 1;

switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
    break;
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
}
//continue
console.log('');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
  }