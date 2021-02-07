import 'core-js/stable';
import 'regenerator-runtime/runtime';

import "./css/main.css";

document.addEventListener('click', function(e) {

    if(e.target.className === 'delete') {
        let id = e.target.parentNode.parentNode.firstChild.nextSibling.innerText;

        console.log(id)
    }
})