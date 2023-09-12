import { MegjelenitSor } from "./MegjelenitSor.js";

export class Megjelenit {
    #lista = [];
    constructor(lista, szuloElem) {
        this.#lista = lista;
        szuloElem.append(`<table class='table table-bordered'><tbody>`);
        this.tablaElem = szuloElem.children("table");
        this.tablabaIr();
    }

    tablabaIr() {
        this.#lista.forEach((elem) => {
            new MegjelenitSor(elem, this.tablaElem);
        });
    }
}
