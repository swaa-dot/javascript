//Array
const matkul = [ 'matematika', 'fisika', 'kimia', 'geografi'];
console.log(typeof matkul);
console.log(matkul[0] + '\n');

console.log('array-object constructor/ memberi batas-----'+'\n');////
const nama = new Array();
const nim = new Array(28);

console.log('array from----');////
const planet = Array.from('bumi');
console.log(planet);
const elemen = new Array('padat', 'cair', 'gas', 'plasma');
const ipa = Array.from(elemen);
console.log(ipa);  

console.log('memanipulasi array----');////
const bulan = ['januari', 'februari', 'maret'];
bulan[0] = 'january'; 
console.log(bulan); 

console.log('push'); /////
const bulan2 = ['januari', 'februari'];
bulan2.push('maret');
console.log(bulan2); 

console.log('delete-----');/////
const elemen2 = ['padat', 'cair', 'gas', 'plasma'];
delete elemen2[3];
console.log(elemen2);
const elemen3 = ['padat', 'cair', 'gas', 'plasma'];
elemen3.splice(1, 1);//kalo ingin menghapus elemen dan datanya
console.log(elemen3);
elemen3.pop();//menghapus elemen terakhir
console.log (elemen3);
elemen3.shift();//menghapus elemen pertama
console.log (elemen3);

console.log('Array destructuring-----');/////untuk melihat isi array
const ekspresi = ['senyum', 'nangis'];
const [bahagia, sedih] = ekspresi;
console.log(bahagia);

console.log('Array method-----');/////
///reverse
const method = [ 'b', 'a', 'c'];
method.reverse();
console.log(method);
//sort
method.sort();
console.log(method);
