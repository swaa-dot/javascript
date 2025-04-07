//conditional
const a = 1;
if (a == 1){
    console.log(true);
}
//2
const kondisi = false;
if (kondisi == true){
    console.log('gas futsal');
}console.log('istirahat');
//3
const ipk = 3;
if (ipk > 3.9){
    console.log('wih cumlaude');
} else if( ipk >= 3){
    console.log('lumayan');
}else{
    console.log('loh loh loh bahaya iki');
}
//4
const harga = 100;
const warga = true;
let diskon = warga ? 0 : harga;
console.log(`Total pembayaran anda adalah ${diskon*harga}`);
