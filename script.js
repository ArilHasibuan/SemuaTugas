function showMessage() {
  alert("Data Anda Terkirim")
}

function tambah() {
    let angka1 = parseInt(document.getElementById("angka1").value);
    let angka2 = parseInt(document.getElementById("angka2").value);
    let hasil = angka1 + angka2;
    document.getElementById('hasil').innerHTML = hasil;
}

function kali() {
    let angka1 = parseInt(document.getElementById("angka1").value);
    let angka2 = parseInt(document.getElementById("angka2").value);
    let hasil = angka1 * angka2;
    document.getElementById('hasil').innerHTML = hasil;
}

function kurang() {
    let angka1 = parseInt(document.getElementById("angka1").value);
    let angka2 = parseInt(document.getElementById("angka2").value);
    let hasil = angka1 - angka2;
    document.getElementById('hasil').innerHTML = hasil;
}

function bagi() {
    let angka1 = parseInt(document.getElementById("angka1").value);
    let angka2 = parseInt(document.getElementById("angka2").value);
    let hasil = angka1 / angka2;
    document.getElementById('hasil').innerHTML = hasil;
}

function resetDisplay() {
      document.getElementById('angka1').value = '';
      document.getElementById('angka2').value = '';
      document.getElementById('hasil').textContent = '';
    }