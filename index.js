let v = document.getElementById('res');

const keys= document.querySelectorAll('.keys');
  function Key(val) {
   if (/[0-9.]/.test(val)) {
      v.value += val;     
}
   }  



   function Result(){
      let result = eval(v.value);
      v.value = result;
   }
   function Reset(){
      v.value = '';
   }
   function Clear(){
      v.value = v.value.slice(0,-1);
   }
console.log(/[0-9.]/.test(""));


// Récupération des boutons et du lien de thème
const theme1Button = document.getElementById('theme1');
const theme2Button = document.getElementById('theme2');
const theme3Button = document.getElementById('theme3');
const themeLink = document.getElementById('theme-link');

// Fonctions de changement de thème
function applyTheme(themeName) {
  themeLink.href = `${themeName}-theme.css`;
}

theme1Button.addEventListener('click', () => {
  applyTheme('theme1');
  theme2Button.setAttribute('style', 'background-color: transparent');
  theme1Button.setAttribute('style', 'background-color: white');
  theme3Button.setAttribute('style', 'background-color: transparent')

});

theme2Button.addEventListener('click', () => {
  applyTheme('theme2');
  theme2Button.setAttribute('style', 'background-color: white');
  theme1Button.setAttribute('style', 'background-color: transparent');
  theme3Button.setAttribute('style', 'background-color: transparent')
});

theme3Button.addEventListener('click', () => {
  applyTheme('theme3');
  theme2Button.setAttribute('style', 'background-color: transparent');
  theme1Button.setAttribute('style', 'background-color: transparent');
  theme3Button.setAttribute('style', 'background-color: hsl(25, 99%, 27%)')
});

 
 