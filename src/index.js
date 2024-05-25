import { initial } from "./initial";
import { homepage } from "./homepage";
import { menu } from "./menu"
import { about } from "./about";

function webpage() {
    document.getElementById('homeBtn').addEventListener('click', homepage);
    document.getElementById('menuBtn').addEventListener('click', menu);
    document.getElementById('aboutBtn').addEventListener('click', about);

    initial();
}


webpage();