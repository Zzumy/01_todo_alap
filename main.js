import { Megjelenit } from "./Megjelenit.js";
import { MegjelenitSor } from "./MegjelenitSor.js";
import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";

$(function () {
    const ujadat = $("#ujadat");
    let megjelenit = new Megjelenit(TODOLIST2, ujadat);

});
