// 0 = pierre    1 = feuille    2 = ciseau
var pierre = document.querySelector('#pierre');
var feuille = document.querySelector('#feuille');
var ciseau = document.querySelector('#ciseau');
var choix = document.querySelector('#choix');
var win = document.querySelector('#win');
var egalite = document.querySelector('#egalite');
var loose = document.querySelector('#loose');
var jouer = document.querySelector('#jouer');
var result = document.querySelector('#resultat');
var joueur;
var ordi;
var w = 0
var l = 0
var e = 0
var nbrJeux = 0

win.textContent = 'Nombre de victoires '+w;
loose.textContent = 'Nombre de défaites '+l;
egalite.textContent = 'Nombre d\'égalités '+e;

function choixOrdi(){
    return Math.floor(Math.random() * 3);
};


pierre.addEventListener('click', () =>{
    joueur = 0;
    choix.textContent = 'Tu as choisis pierre';
});
feuille.addEventListener('click', () =>{
    joueur = 1;
    choix.textContent = 'Tu as choisis feuille';
});
ciseau.addEventListener('click', () =>{
    joueur = 2;
    choix.textContent = 'Tu as choisis ciseau';
});

function resultat(joueur, ordi){
    ordi = choixOrdi();
    if(joueur == ordi){
        e++;
        return 'égalité, ordi a choisi comme toi';
    }else if(joueur == 0 && ordi == 1){
        l++;
        return 'tu as perdu, ordi a choisi feuille';
    }else if(joueur == 0 && ordi == 2){
        w++;
        return 'tu as gagné, ordi a choisi ciseau';
    }else if(joueur == 1 && ordi == 0){
        w++;
        return 'tu as gagné, ordi a choisi pierre';
    }else if(joueur == 1 && ordi == 2){
        l++;
        return 'tu as perdu, ordi a choisi ciseau';
    }else if(joueur == 2 && ordi == 0){
        l++;
        return 'tu as perdu, ordi a choisi pierre';
    }else{
        w++;
        return 'tu as gagné, ordi a choisi feuille';
    };
};



jouer.addEventListener('click', () =>{
    result.textContent = resultat(joueur, ordi);
    win.textContent = 'Nombre de victoires '+w;
    loose.textContent = 'Nombre de défaites '+l;
    egalite.textContent = 'Nombre d\'égalités '+e;
});



