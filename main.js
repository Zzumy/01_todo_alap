import { Megjelenit } from "./Megjelenit.js";
import { TODOLIST } from "./adatok.js";
import { TODOLIST2 } from "./adatok.js";

$(function () {
    const ujadat = $("#ujadat");
    let megjel = new Megjelenit(TODOLIST, ujadat);
});
