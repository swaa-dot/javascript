//menstrukturkan data dengan set
const a = new Set([1,2]);
console.log(a);

//menyimpan nilai di set
console.log('Menyimpan nilai di set------');
const b = new Set();
b.add(1);
b.add('Pendahuluan');
b.add(1);//hanya menyimpan satu nilai, tidak terdapat duplikasi
b.add('Pendahuluan');
b.add('end');
console.log(b);

//mengakses nilai di set-menggunakan perulangan
console.log('mengakses nilai di set------');
const c = new Set();
c.add(1);
c.add(2);
//cara pertama
for(const number of c){
    console.log(c);
}
//cara kedua
c.forEach((value)=> console.log(value));

//menghapus nilai set
console.log('menghapus nilai set------');
const d = new Set();
d.add(1);
d.add(2);
d.forEach((value)=> console.log(value));
d.delete(1);
d.forEach((value)=> console.log(value));



