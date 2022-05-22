let diemLy = +prompt('Nhap diem mon Ly: ');
let diemHoa = +prompt('Nhap diem mon Hoa:');
let diemSinh = +prompt('Nhap diem Sinh:');
let diemTB = (diemLy+diemHoa+diemSinh)/3;
document.write('diem trung binh 3 mon la:'+' '+diemTB.toFixed(1))