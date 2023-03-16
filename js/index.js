var arrNum = [];
document.getElementById("themSo").onclick = function () {
  var num = +document.getElementById("nhapSo").value;
  arrNum.push(num);
  document.getElementById("mangSo").innerHTML = `[${arrNum}]`;
};

console.log(arrNum);

// 1.Tính tổng số dương
document.querySelector(".btnBai1").onclick = function () {
  var tongDuong = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      tongDuong += arrNum[i];
    }
  }
  document.querySelector(".ketQuaB1").innerHTML = `Tổng số dương: ${tongDuong}`;
};

// 2. Đếm số dương
document.querySelector(".btnBai2").onclick = function () {
  var demSoDuong = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      demSoDuong += 1;
    }
  }
  document.querySelector(".ketQuaB2").innerHTML = `Số dương: ${demSoDuong}`;
};

// 3. Tìm số nhỏ nhất
document.querySelector(".btnBai3").onclick = function () {
  var numberMin = arrNum[0];
  for (var i = 1; i < arrNum.length; i++) {
    if (arrNum[i] < numberMin) {
      numberMin = arrNum[i];
    }
  }
  document.querySelector(".ketQuaB3").innerHTML = `Số nhỏ nhất: ${numberMin}`;
};

// 4. Tìm số dương nhỏ nhất
document.querySelector(".btnBai4").onclick = function () {
  var mangDuong = arrNum.filter((num) => num > 0);
  var soDuongMin = mangDuong[0];
  for (var i = 1; i < mangDuong.length; i++) {
    if (mangDuong[i] < soDuongMin) {
      soDuongMin = mangDuong[i];
    }
  }
  document.querySelector(
    ".ketQuaB4"
  ).innerHTML = `Số dương nhỏ nhất: ${soDuongMin}`;
};

//5. Tìm số chẵn cuối cùng
document.querySelector(".btnBai5").onclick = function () {
  var soChan = 0;
  var mangSoChan = arrNum.filter((nums) => Math.abs(nums) % 2 === 0);
  soChan = mangSoChan[mangSoChan.length - 1];
  document.querySelector(
    ".ketQuaB5"
  ).innerHTML = `Số chẵn vị trí cuối cùng: ${soChan}`;
};

//6. Đổi chỗ
document.querySelector(".btnBai6").onclick = function () {
  var viTri1 = +document.querySelector(".viTri1").value;
  var viTri2 = +document.querySelector(".viTri2").value;
  var bienTam = 0;
  bienTam = arrNum[viTri1];
  arrNum[viTri1] = arrNum[viTri2];
  arrNum[viTri2] = bienTam;
  document.querySelector(".ketQuaB6").innerHTML = `Mảng sau khi đổi: ${arrNum}`;
};

//7. Sắp xếp tăng dần
document.querySelector(".btnBai7").onclick = function () {
  var arrTangDan = arrNum.sort(function (a, b) {
    return a - b;
  });

  document.querySelector(
    ".ketQuaB7"
  ).innerHTML = `Sắp xếp tăng dần: ${arrTangDan}`;
};

function checkSoNguyenTo(so) {
  var checkSo = true;
  if (so > 1) {
    for (var i = 2; i <= Math.sqrt(so); i++) {
      if (so % i === 0) {
        checkSo = false;
      }
    }
  } else {
    checkSo = false;
  }
  return checkSo;
}
//8. Tìm số nguyên tố đầu tiên
document.querySelector(".btnBai8").onclick = function () {
  var ketQuaB8 = "";
  for (var i = 0; i < arrNum.length; i++) {
    if (checkSoNguyenTo(arrNum[i])) {
      ketQuaB8 = arrNum[i];
      break;
    } else {
      ketQuaB8 = -1;
    }
  }

  document.querySelector(
    ".ketQuaB8"
  ).innerHTML = `Số nguyên tố đầu tiên: ${ketQuaB8}`;
};

//9. Đếm số nguyên
var mangSoB9 = [];
document.querySelector(".btnThemSoB9").onclick = function () {
  var soB9 = +document.querySelector(".nhaoSoB9").value;
  mangSoB9.push(soB9);
  document.querySelector(".mangSoB9").innerHTML = mangSoB9;
};
function checkSoNguyen(so) {
  var KTSoNguyen = true;
  if (Number.isInteger(so)) {
    KTSoNguyen = true;
  } else {
    KTSoNguyen = false;
  }
  return KTSoNguyen;
}
document.querySelector(".btnBai9").onclick = function () {
  var dem = 0;
  for (var i = 0; i < mangSoB9.length; i++) {
    if (checkSoNguyen(mangSoB9[i])) {
      dem += 1;
    }
  }
  document.querySelector(".ketQuaB9").innerHTML = `Số nguyên: ${dem}`;
};

//10. So sánh số âm và số dương
document.querySelector(".btnBai10").onclick = function () {
  var kqB10 = "";
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0) {
      soDuong += 1;
    } else if (arrNum[i] < 0) {
      soAm += 1;
    }
  }
  if (soAm == soDuong) {
    kqB10 = "Số âm = Số dương";
  } else if (soAm < soDuong) {
    kqB10 = "Số âm < Số dương";
  } else if (soDuong < soAm) {
    kqB10 = "Số dương < Số âm";
  }

  document.querySelector(".ketQuaB10").innerHTML = `${kqB10}`;
};
