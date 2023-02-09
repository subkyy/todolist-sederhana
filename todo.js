    document.forms['form'].onsubmit = function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const asal = document.getElementById("asal").value;
    const tempat = document.getElementById("tempat");

    const isi = `nama saya ${nama} saya berasal dari ${asal}`;

    const title = document.createElement("h4");
    title.textContent = isi;

    tempat.appendChild(title);

    const clear = document.createElement("input");
    clear.value = "done";
    clear.type = "button";
    clear.onclick = function () {
        const tempat2 = document.getElementById("tempat2");
        tempat2.appendChild(title);
        clear.value = "complited";

        clear.onclick = function () {
            alert("selamat kamu sudah terdaftar");
            title.remove();
        }
    }

    title.appendChild(clear);



}