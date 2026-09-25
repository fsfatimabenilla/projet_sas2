const prompt = require('prompt-sync')();

// 1- Ajouter un nouveau candidat :
const candidat =[];
function addCandidat(){
   let cin = prompt("Saisir cin du candidat : ");
   let trouve = false;
      for(let cle of candidat ){
     if(cle.cin===cin){
     trouve = true;
     break ;
     }
   }
   if(!trouve){
     let nom = prompt("saisir nom du candidat : ");
   let prenom = prompt("saisir prenom du candidat : ");
   let partiPolitique = prompt("saisir parti Politique du candidat (): ");
   if(partiPolitique === ""){
    partiPolitique = "indépandant";
   }
   let age = prompt("saisir age du candidat : ");
    let nvCandidat ={
        cin : cin ,
        nom : nom ,
        prenom : prenom ,
        partiPolitique : partiPolitique,
        age : age ,
        electeurs :[] 
    }
    candidat.push(nvCandidat);
    console.log(`Candidat ajouté avec succés `); 
   }else{
    console.log("CIN deja exist !")
   }   
}
// 2-Ajouter plusieurs candidats à la fois:
function addLotCandidat(){
    nb = Number(prompt("Combier de candidat tu peux ajouté : "));
    for(i=1;i<=nb;i++){
   addCandidat();
    }
   
}



// 3. 1/Trier les candidats par nombre de votes
function TreierParVote(){
    if(candidat.length==0){
    console.log("aucun enregistrements trouvé ! ");
}
     for(i=0;i<candidat.length-1;i++){
    for(j=0;j<candidat.length-1-i;j++){
        if(candidat[j].electeurs.length<candidat[j+1].electeurs.length){
            let x =candidat[j]
            candidat[j] = candidat[j+1]
            candidat[j+1] = x
        }
    }
}
for(let cle of candidat){
            console.log(`Cin ${cle.cin}:`)
            console.log("nom : "+cle.nom);
            console.log("prenom : "+cle.prenom);
            console.log("partiPolitique : "+cle.partiPolitique);
            console.log("age : "+cle.age);
            console.log(`Nombres des votes : ${cle.electeurs.length}`);
}

}
// 3. 2/ Filtrer parti politique  :
function FiltrerParti(){
    let part = prompt("Saisir un parti politique spécifique :");
    let trouve = false;
    for(let cle of candidat){
        if(cle.partiPolitique.includes(part)){
            trouve = true ;
            console.log(`Cin ${cle.cin}:`)
            console.log("nom : "+cle.nom);
            console.log("prenom : "+cle.prenom);
            console.log("partiPolitique : "+cle.partiPolitique);
            console.log("age : "+cle.age);
            console.log(`Nombres des votes : ${cle.electeurs.length}`);
        }
    }
    if(!trouve){
        console.log("parti Politique introuvable!")
    }
}
//4. Voter pour un candidat :
function Vote(){
   let  cinEl = prompt("Saisir CIN d'electeurs :")
    let trouve = false
    for(let cle of candidat){
        if(cle.electeurs.includes(cinEl)){
            trouve = true;
            break;
    }
    }
    if(!trouve){
        console.log("l'electeur a le droit pour voter : ");
    }else{
        console.log(" CIN de l’électeur existe déjà dans une liste de votes : ");
    }
let cinCn = prompt("Saisir CIN  du candidats pour voter :");
    for(let cle of candidat){
        if(cle.cin==(cinCn)){
            cle.electeurs.push(cinEl);
           console.log("Vote ajouté avec succès !")
        }
    }
     
}
// 5. Modifier les informations d'un candidat : 
function UpdateCandidat(){
    cin = prompt("Saisir CIN de candidat pour modifier :  ");
    let trouve =false ;
    for(let cle of candidat){
        if(cle.cin == cin){
            trouve = true ;
              cle.partiPolitique = prompt("saisir nouveau partiPolitique ");
            cle.age = Number(prompt("saisir nouveau age : "));
            console.log("Candidats modifié avec succées ! ");
            break ;
    }
}
  if(!trouve){
            console.log("CIN introuvable ! ");
        }
}
// 6. Supprimer un candidat :
function DeleteCandidat(){
     cin = prompt("Saisir CIN de candidat pour supprimé :  ");
     let nvCandidat = [];
    let trouve =false ;
    for(let cle of candidat){
        if(cle.cin == cin){
            trouve = true ;
    }else{
        nvCandidat.push(cle);
    }
}
if(trouve){
    candidat.length = 0 ;
    for(let cle of nvCandidat){
        candidat.push(cle);
    }
    console.log("Candidats supprimé avec succées ! ");
}else{
    console.log("Cin Introuvable")
}
}

// 7. Rechercher des candidats :
function SreachCandidat(){
    nom = prompt("saisir nom du candidat pour rechercher  ")
    let trouve = false ;
    for(let cle of candidat ){
        if(cle.nom == nom ){
               console.log(`Cin ${cle.cin}:`)
            console.log(`nom :${cle.nom}`);
            console.log(`prenom : ${cle.prenom}`);
            console.log(`partiPolitique : ${cle.partiPolitique}`);
            console.log(`age : ${cle.age}`);
            console.log(`Nombres des votes : ${cle.electeurs.length}`);
            trouve = true ;
           
        }
    }
    if(!trouve){
         console.log("aucun Candidat avec ce nom !"); 
}
}
// 8. Statistiques de l'élection : 
    
 function Statistiques(){
   // nbr total du candidats
    let nbtC = 0 ;
    for (let cle of candidat){
        nbtC ++ 
    } 
    console.log(`Nombre total de candidat : ${nbtC}`)
    
    // le nombre total de votes exprimés dans toute l'élection.
    let nbtV = 0
    for (let cle of candidat){
        nbtV = nbtV + cle.electeurs.length ; 
    }
    console.log(`le nombre total de votes exprimés dans toute l'élection : ${nbtV}`);

    // les Top 3 des candidats ayant le plus de votes
    let t1 = 0;
    let t2 = 0;
    let t3 = 0;
    for (let cle of candidat){
        if(cle.electeurs.length > t1){
            t1 = cle.electeurs.length ;
        }
    }
    for (let cle of candidat){
        if(cle.electeurs.length > t2  && cle.electeurs.length < t1 ){
            t2 = cle.electeurs.length ;
        }
    }
     for (let cle of candidat){
        if(cle.electeurs.length > t3  && cle.electeurs.length < t2 ){
            t3 = cle.electeurs.length ;
        }
    }
console.log("---TOP 3----");
console.log(`TOP 1 : ${t1}`);
console.log(`TOP 2 : ${t2}`);
console.log(`TOP 3 : ${t3}`);


// Afficher le nombre de candidats par parti politique. 
let parti = [];
let nb = [];

for (let cle of candidat){
    let trouve = false ;
    for(let i=0 ; i< parti.length ; i++ ){
        if(parti == cle.partiPolitique){
            nb ++ ;
        trouve = true ;
        }
        
    }
    if(!trouve){
    parti.push(cle.partiPolitique);
    nb.push(1);
}
}
 console.log(`nombre de candidats par parti politique : `)
for (let i=0 ; i< parti.length ; i++){
   
    console.log(parti[i]+ "->" +nb[i]);
}

}

   
    
// 3. Afficher la liste des candidats : 
function ListCandidat() {
let choix2 = 0;
do {
console.log("1/ Trier les candidats par nombre de votes :  ");
console.log("2/ Filtrer et afficher uniquement les candidats d'un parti politique spécifique :  ");
console.log("0/ Revenir au menu principale ")
 choix2 = prompt("saisir  une option  : ");
 switch(choix2){
    case '1':
        TreierParVote();
        break ;
    case '2':
        FiltrerParti();
        break ;
    case '0':
        choix ;
    default:
        console.log("saisir un choix dans le menu");
 }
} while (choix2!= 0) 
}
// menu
let choix = 0;
do{
console.log("----- MENU ----- ");
console.log("1. Ajouter un nouveau candidat : ");
console.log("2. Ajouter plusieurs candidats à la fois: ");
console.log("3. Afficher la liste des candidats : ");
console.log("4. Voter pour un candidat : ");
console.log("5. Modifier les informations d'un candidat : ");
console.log("6. Supprimer un candidat : ");
console.log("7. Rechercher des candidats : ");
console.log("8. Statistiques de l'élection : ");
console.log("0. quitter le programme");

 choix = prompt("saisir  votre choix : ");
 switch (choix) {
            case '1':
                addCandidat();
                break;
            case '2':
                addLotCandidat();
                break;
            case '3':
                ListCandidat();
                break;
            case '4':
                 Vote();
                break;
            case '5':
                 UpdateCandidat();
                break;
            case '6':
                 DeleteCandidat();
                break;
            case '7':
                 SreachCandidat();
                break;
            case '8':
                Statistiques();
                break ;
            case '0':
                console.log("Vous avez quitter le programme ! ");
                break;
            default:
                console.log("saisir un choix dans le menu");
        }
}while(choix !=0)
