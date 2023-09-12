export class Megjelenit {
    #lista = [];
    constructor(lista, tarolo) {
        this.#lista = lista;
        this.tarolo = tarolo;
        this.megjelenit();
    }

    megjelenit() {
        let txt = `<table class='table table-bordered'>
        <tbody>`;
        this.#lista.forEach((element) => {
            txt += `<tr><td>${element}</td></tr>`;
        });
        txt += "</tbody></table>";
        $(this.tarolo).html(txt);
    }
}
