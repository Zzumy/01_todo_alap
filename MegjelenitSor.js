export class MegjelenitSor {
    #obj = {};
    constructor(obj, szuloElem) {
        this.#obj = obj;
        this.szuloElem = szuloElem;
        this.#sor();
        this.sorElem = this.szuloElem.children("tbody").children("tr:last-child");
        console.log(this.szuloElem);
        console.log(this.sorElem);

        this.keszElem = this.sorElem.children("td").children(".kesz");
        console.log(this.keszElem);
        
        this.keszElem.on("click", () => {
            this.sorElem.css("background-color", "lightgreen");
        });

        this.megseElem = this.sorElem.children("td").children(".megse");
        console.log(this.megseElem);
        this.megseElem.on("click", () => {
            this.sorElem.css("background-color", "white");
        });
    }
    #sor() {
        let txt = `<tr>`;
        for (const key in this.#obj) {
            txt += `<td>${this.#obj[key]}</td>`;
        }
        txt += `<td><span class="kesz">✔️</span><span class="megse">❌</span><span class="torles">🗑️</span></td>`;
        txt += `</tr>`;
        this.szuloElem.append(txt);
    }
}
