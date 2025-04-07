//menstrukturkan data dengan map
console.log("menstrukturkan data dengan map-----");
const peta = new Map([
    ['Indonesia',62],
    ['Malaysia',3],
    ['Thailand',66],
    ['Singapura',1]
]);
console.log(peta);

//menyimpan nilai di map
console.log('Menyimpan nilai di map------');
const peta2 = new Map();
peta2.set('Indonesia', 62);
console.log(peta2);
const map = new Map();
map.set([1, 'Pendahuluan']);//selain menggunakan string, bisa menggunakan angka
console.log(map);

//mengakses nilai di map
console.log('mengakses nilai di map------');
const peta3 = new Map([
    ['Indonesia',62],
    ['Malaysia',3],
    ['Thailand',66],
    ['Singapura',1]
]);
console.log(peta3.get('Indonesia'));
console.log(peta3.get('Malaysia'));
console.log(peta3.get('Thailand'));
console.log(peta3.get('Singapura'));

//menghapus nilai di map
console.log('menghapus nilai di map-----');
const peta4 = new Map();
peta4.set('Chelsea', 'Inggris');
peta4.set('Real Madrid', 'Spanyol');
peta4.delete('Real Madrid');
console.log(peta4);

