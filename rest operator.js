//rest operator
//Rest parameter memungkinkan kita untuk menulis argument yang tak 
//terbatas pada function. Rest parameter akan menangani argument tersebut menjadi 
//sebuah array dan meneruskannya ke function. Jika ada parameter lain sebelumnya, 
//nilainya tidak menjadi bagian dari array yang dihasilkan rest parameter.
function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs);
  }
  myFunc('one', 'two', 'three');
//1.2 + array length
function biodata(id, nama,...lainnya){
    console.log("id = "+ id);
    console.log("nama ="+ nama);
    console.log("lainnya", lainnya);
    console.log("jumlah array = "+lainnya.length);
   
}
biodata(122, "Rahasia", "laki-laki", "indonesia", "Soda & susu");
//1.3 +destructuring array
const warna = ["merah", "biru", "hijau", "kuning", "pink", "oren"];
const [pertama, kedua, ...seterusnya] = warna;
console.log('pertama '+pertama);
console.log('kedua ' + kedua);
console.log(seterusnya);

