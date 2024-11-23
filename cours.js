const test = {};
console.log(typeof test);

const cas2 = {
    "name": "Manu",
    "surname": "Cool"
}

cas2['name'] = 'Oups';
cas2['town'] = 'lure';

cas2.chausure = 'Sneaker';

console.log(cas2);

const Btn = {
    color: "ff0000",
    applyColor : function(){
        let btn = document.getElementById('bouton');
        btn.style.backgroundColor = '#${this.color}';
    }
}


// (function(){
   const myBtn =Object.create(Btn);
   myBtn.applyColor();
   myBtn.color = "00ff00";
   myBtn.applyColor();
   myBtn.color = "0000ff";
   myBtn['button'];

// })();

