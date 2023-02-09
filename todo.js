    document.forms['form'].onsubmit = function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const asal = document.getElementById("asal").value;
    const tempat = document.getElementById("tempat");

    const isi = `nama saya ${nama} saya berasal dari ${asal}`;

    const title = document.createElement("h1");
    title.textContent = isi;

    tempat.appendChild(title);



}