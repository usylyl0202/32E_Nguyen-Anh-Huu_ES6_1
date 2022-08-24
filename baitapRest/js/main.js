document.querySelector('#btnKhoi1').onclick = () => {
    const khoiLop1 = [];
    // input
    const diemToan = document.querySelector('#inpToan').value
    const diemLy = document.querySelector('#inpLy').value
    const diemHoa = document.querySelector('#inpHoa').value
    //thêm các giá trị vào mảng
    khoiLop1.push(diemToan)
    khoiLop1.push(diemLy)
    khoiLop1.push(diemHoa)
    const đtb = tinhDiemTrungBinh(...khoiLop1);
    document.querySelector('#tbKhoi1').innerHTML = đtb;
}

document.querySelector('#btnKhoi2').onclick = () => {
    const khoiLop2 = [];
    // input
    const diemVan = document.querySelector('#inpVan').value
    const diemSu = document.querySelector('#inpSu').value
    const diemDia = document.querySelector('#inpDia').value
    const diemEnglish = document.querySelector('#inpEnglish').value
    //thêm các giá trị vào mảng
    khoiLop2.push(diemVan)
    khoiLop2.push(diemSu)
    khoiLop2.push(diemDia)
    khoiLop2.push(diemEnglish)
    const đtb = tinhDiemTrungBinh(...khoiLop2);
    document.querySelector('#tbKhoi2').innerHTML = đtb;
}

const tinhDiemTrungBinh = (...array) => {
    let đtb = 0;
    let n = 0;
    let sum = 0;
    for (const value of array) {
        sum += Number(value);
        n++
    }
    đtb = (sum / n).toFixed(2);
    return đtb
}


