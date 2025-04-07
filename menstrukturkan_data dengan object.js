const mahasiswa = {
    nama: "Syahwa Wahyu S",
    'NIM': "23102028",
    'jurusan': "Informatika",
    jenis_kelamin : "Laki-laki",
    Kewarganegaraan: 'Indonesia',
    makanan : 'Nasi Goreang',
    minuman : 'susu & soda',
    umur : 20,
};
//dot notation
console.log(mahasiswa.nama);
//square bracket
console.log(mahasiswa['jurusan']);
console.log("\n");
//object destructuring
const { NIM, jurusan } = mahasiswa;
console.log(NIM);
console.log(jurusan);
console.log(NIM, jurusan , "\n");
//mengganti nilai properti
mahasiswa.umur = 10;
console.log(mahasiswa.umur);
//delete
delete mahasiswa.umur;
console.log(mahasiswa);

