const prompt = require('prompt-sync')();

// 1. Ajouter un nouveau candidat
const candidat = [
    {
        cin: "A1",
        nom: "alami",
        prenom: "sara",
        age: 35,
        partiPolitique: "independant",
        electeurs: ["E1", "E2", "E3"]
    },
    {
        cin: "B2",
        nom: "benali",
        prenom: "youssef",
        age: 42,
        partiPolitique: "parti de l'istiqlal",
        electeurs: ["E4", "E5"]
    },
    {
        cin: "C3",
        nom: "chakir",
        prenom: "nadia",
        age: 38,
        partiPolitique: "parti de la justice et du développement",
        electeurs: ["E6", "E7", "E8", "E9"]
    },
    {
        cin: "D4",
        nom: "daoudi",
        prenom: "omar",
        age: 51,
        partiPolitique: "parti de l'istiqlal",
        electeurs: ["E10"]
    },
    {
        cin: "E5",
        nom: "el idrissi",
        prenom: "imane",
        age: 29,
        partiPolitique: "parti authenticité et modernité",
        electeurs: ["E11", "E12", "E13"]
    },
    {
        cin: "F6",
        nom: "fassi",
        prenom: "karim",
        age: 46,
        partiPolitique: "independant",
        electeurs: ["E14", "E15"]
    },
    {
        cin: "G7",
        nom: "ghazali",
        prenom: "meryem",
        age: 33,
        partiPolitique: "parti de la justice et du développement",
        electeurs: ["E16", "E17", "E18", "E19", "E20"]
    },
    {
        cin: "H8",
        nom: "haddad",
        prenom: "anas",
        age: 40,
        partiPolitique: "parti authenticité et modernité",
        electeurs: ["E21"]
    }
];


// 1. Ajouter un candidat
function addCandidat() {

    let cin = prompt("Saisir le CIN du candidat : ");
    let trouve = false;

    for (let cle of candidat) {
        if (cle.cin === cin) {
            trouve = true;
            break;
        }
    }

    if (!trouve) {

        let nom = prompt("Saisir le nom du candidat : ");
        let prenom = prompt("Saisir le prénom du candidat : ");

        let partiPolitique = prompt(
            "Saisir le parti politique du candidat (laisser vide pour indépendant) : "
        );

        if (partiPolitique === "") {
            partiPolitique = "independant";
        }

        let age = Number(prompt("Saisir l'âge du candidat : "));

        let nvCandidat = {
            cin: cin,
            nom: nom,
            prenom: prenom,
            age: age,
            partiPolitique: partiPolitique,
            electeurs: []
        };

        candidat.push(nvCandidat);

        console.log("Candidat ajouté avec succès !");

    } else {
        console.log("CIN déjà existant !");
    }
}


// 2. Ajouter plusieurs candidats à la fois
function addLotCandidat() {

    let nb = Number(prompt("Combien de candidats voulez-vous ajouter ? "));

    for (let i = 1; i <= nb; i++) {

        console.log(`--- Candidat ${i} ---`);

        addCandidat();
    }
}


// 3. Afficher tous les candidats
function AfficherCandidats() {

    if (candidat.length === 0) {
        console.log("Aucun enregistrement trouvé !");
        return;
    }

    for (let cle of candidat) {

        console.log(`CIN : ${cle.cin}`);
        console.log(`Nom : ${cle.nom}`);
        console.log(`Prénom : ${cle.prenom}`);
        console.log(`Parti politique : ${cle.partiPolitique}`);
        console.log(`Âge : ${cle.age}`);
        console.log(`Nombre de votes : ${cle.electeurs.length}`);

        console.log("---------------------------");
    }
}


// 3.2 Trier les candidats par nombre de votes
function TrierParVote() {

    if (candidat.length === 0) {
        console.log("Aucun enregistrement trouvé !");
        return;
    }

    for (let i = 0; i < candidat.length - 1; i++) {

        for (let j = 0; j < candidat.length - 1 - i; j++) {

            if (
                candidat[j].electeurs.length <
                candidat[j + 1].electeurs.length
            ) {

                let x = candidat[j];

                candidat[j] = candidat[j + 1];

                candidat[j + 1] = x;
            }
        }
    }

    for (let cle of candidat) {

        console.log(`CIN : ${cle.cin}`);
        console.log(`Nom : ${cle.nom}`);
        console.log(`Prénom : ${cle.prenom}`);
        console.log(`Parti politique : ${cle.partiPolitique}`);
        console.log(`Âge : ${cle.age}`);
        console.log(`Nombre de votes : ${cle.electeurs.length}`);

        console.log("---------------------------");
    }
}


// 3.3 Filtrer par parti politique
function FiltrerParti() {

    let part = prompt("Saisir un parti politique : ");

    let trouve = false;

    for (let cle of candidat) {

        if (cle.partiPolitique === part) {

            trouve = true;

            console.log(`CIN : ${cle.cin}`);
            console.log(`Nom : ${cle.nom}`);
            console.log(`Prénom : ${cle.prenom}`);
            console.log(`Parti politique : ${cle.partiPolitique}`);
            console.log(`Âge : ${cle.age}`);
            console.log(`Nombre de votes : ${cle.electeurs.length}`);

            console.log("---------------------------");
        }
    }

    if (!trouve) {
        console.log("Parti politique introuvable !");
    }
}


// 4. Voter pour un candidat
function Vote() {

    let cinEl = prompt("Saisir le CIN de l'électeur : ");

    let trouve = false;

    // Vérifier si l'électeur a déjà voté
    for (let cle of candidat) {

        for (let electeur of cle.electeurs) {

            if (electeur === cinEl) {

                trouve = true;
                break;
            }
        }

        if (trouve) {
            break;
        }
    }

    if (trouve) {

        console.log(
            "Cet électeur a déjà voté !"
        );

        return;
    }

    console.log("L'électeur peut voter.");

    let cinCn = prompt("Saisir le CIN du candidat : ");

    let cntrouve = false;

    for (let cle of candidat) {

        if (cle.cin === cinCn) {

            cntrouve = true;

            cle.electeurs.push(cinEl);

            console.log("Vote ajouté avec succès !");

            break;
        }
    }

    if (!cntrouve) {

        console.log("CIN du candidat introuvable !");
    }
}


// 5. Modifier le nom
function upNom() {

    let cin = prompt("Saisir le CIN du candidat à modifier : ");

    let trouve = false;

    for (let cle of candidat) {

        if (cle.cin === cin) {

            trouve = true;

            cle.nom = prompt("Saisir le nouveau nom : ");

            console.log("Nom du candidat modifié avec succès !");

            break;
        }
    }

    if (!trouve) {
        console.log("CIN introuvable !");
    }
}


// 5.2 Modifier le prénom
function upPrenom() {

    let cin = prompt("Saisir le CIN du candidat à modifier : ");

    let trouve = false;

    for (let cle of candidat) {

        if (cle.cin === cin) {

            trouve = true;

            cle.prenom = prompt("Saisir le nouveau prénom : ");

            console.log("Prénom du candidat modifié avec succès !");

            break;
        }
    }

    if (!trouve) {
        console.log("CIN introuvable !");
    }
}


// 5.3 Modifier le parti politique
function upParti() {

    let cin = prompt("Saisir le CIN du candidat à modifier : ");

    let trouve = false;

    for (let cle of candidat) {

        if (cle.cin === cin) {

            trouve = true;

            let nouveauParti = prompt(
                "Saisir le nouveau parti politique : "
            );

            if (nouveauParti === "") {
                nouveauParti = "indépendant";
            }

            cle.partiPolitique = nouveauParti;

            console.log(
                "Parti politique du candidat modifié avec succès !"
            );

            break;
        }
    }

    if (!trouve) {
        console.log("CIN introuvable !");
    }
}


// 5.4 Modifier l'âge
function upAge() {

    let cin = prompt("Saisir le CIN du candidat à modifier : ");

    let trouve = false;

    for (let cle of candidat) {

        if (cle.cin === cin) {

            trouve = true;

            cle.age = Number(
                prompt("Saisir le nouvel âge : ")
            );

            console.log("Âge du candidat modifié avec succès !");

            break;
        }
    }

    if (!trouve) {
        console.log("CIN introuvable !");
    }
}


// 6. Supprimer un candidat
function DeleteCandidat() {

    let cin = prompt("Saisir le CIN du candidat à supprimer : ");

    const nvCandidat = [];

    let trouve = false;

    for (let cle of candidat) {

        if (cle.cin === cin) {

            trouve = true;

        } else {

            nvCandidat.push(cle);
        }
    }

    if (trouve) {

        candidat.length = 0;

        for (let cle of nvCandidat) {

            candidat.push(cle);
        }

        console.log("Candidat supprimé avec succès !");

    } else {

        console.log("CIN introuvable !");
    }
}


// 7. Rechercher un candidat
function SearchCandidat() {

    let nom = prompt("Saisir le nom du candidat à rechercher : ");

    let trouve = false;

    for (let cle of candidat) {

        if (cle.nom === nom) {

            console.log(`CIN : ${cle.cin}`);
            console.log(`Nom : ${cle.nom}`);
            console.log(`Prénom : ${cle.prenom}`);
            console.log(`Parti politique : ${cle.partiPolitique}`);
            console.log(`Âge : ${cle.age}`);
            console.log(`Nombre de votes : ${cle.electeurs.length}`);

            console.log("---------------------------");

            trouve = true;
        }
    }

    if (!trouve) {

        console.log("Aucun candidat avec ce nom !");
    }
}


// 8. Statistiques de l'élection
function Statistiques() {
console.log("----- Statistiques : -----");
    // Nombre total de candidats
    let nbtC = 0;

    for (let cle of candidat) {
        nbtC++;
    }

    console.log(
        `Nombre total de candidats : ${nbtC}`
    );


    // Nombre total de votes
    let nbtV = 0;

    for (let cle of candidat) {

        nbtV = nbtV + cle.electeurs.length;
    }

    console.log(
        `Nombre total de votes exprimés : ${nbtV}`
    );


    // Top 3 des candidats
   const classement = [];

for (let cle of candidat) {
    classement.push(cle);
}

for (let i = 0; i < classement.length - 1; i++) {

    for (let j = 0; j < classement.length - 1 - i; j++) {

        if (
            classement[j].electeurs.length <
            classement[j + 1].electeurs.length
        ) {

            let x = classement[j];

            classement[j] = classement[j + 1];

            classement[j + 1] = x;
        }
    }
}

console.log("----- TOP 3 -----");

for (let i = 0; i < 3 && i < classement.length; i++) {

    console.log(
        `${i + 1}. ${classement[i].nom} : ${classement[i].electeurs.length} votes`
    );
}
    // Nombre de candidats par parti politique
    let parti = [];

    let nb = [];

    for (let cle of candidat) {

        let trouve = false;

        for (let i = 0; i < parti.length; i++) {

            if (parti[i] === cle.partiPolitique) {

                nb[i]++;

                trouve = true;
            }
        }

        if (!trouve) {

            parti.push(cle.partiPolitique);

            nb.push(1);
        }
    }

    console.log(
        "----- Nombre de candidats par parti politique -----"
    );

    for (let i = 0; i < parti.length; i++) {

        console.log(
            `${parti[i]} -> ${nb[i]} candidat(s)`
        );
    }
}


// 5. Modifier les informations d'un candidat
function UpdateCandidat() {

    let choix3 = 0;

    do {

        console.log("1. Modifier le nom du candidat");
        console.log("2. Modifier le prénom du candidat");
        console.log("3. Modifier le parti politique du candidat");
        console.log("4. Modifier l'âge du candidat");
        console.log("0. Revenir au menu principal");

        choix3 = prompt("Saisir une option : ");

        switch (choix3) {

            case "1":
                upNom();
                break;

            case "2":
                upPrenom();
                break;

            case "3":
                upParti();
                break;

            case "4":
                upAge();
                break;

            case "0":
                break;

            default:
                console.log("Veuillez saisir un choix valide !");
        }

    } while (choix3 !== "0");
}


// 3. Afficher la liste des candidats
function ListCandidat() {

    let choix2 = 0;

    do {

        console.log("1. Afficher tous les candidats");
        console.log("2. Trier les candidats par nombre de votes");
        console.log("3. Filtrer par parti politique");
        console.log("0. Revenir au menu principal");

        choix2 = prompt("Saisir une option : ");

        switch (choix2) {

            case "1":
                AfficherCandidats();
                break;

            case "2":
                TrierParVote();
                break;

            case "3":
                FiltrerParti();
                break;

            case "0":
                break;

            default:
                console.log("Veuillez saisir un choix valide !");
        }

    } while (choix2 !== "0");
}


// MENU PRINCIPAL
let choix = 0;

do {

    console.log("========== MENU ==========");
    console.log("1. Ajouter un nouveau candidat");
    console.log("2. Ajouter plusieurs candidats à la fois");
    console.log("3. Afficher la liste des candidats");
    console.log("4. Voter pour un candidat");
    console.log("5. Modifier les informations d'un candidat");
    console.log("6. Supprimer un candidat");
    console.log("7. Rechercher un candidat");
    console.log("8. Statistiques de l'élection");
    console.log("0. Quitter le programme");

    choix = prompt("Saisir votre choix : ");

    switch (choix) {

        case "1":
            addCandidat();
            break;

        case "2":
            addLotCandidat();
            break;

        case "3":
            ListCandidat();
            break;

        case "4":
            Vote();
            break;

        case "5":
            UpdateCandidat();
            break;

        case "6":
            DeleteCandidat();
            break;

        case "7":
            SearchCandidat();
            break;

        case "8":
            Statistiques();
            break;

        case "0":
            console.log("Vous avez quitté le programme !");
            break;

        default:
            console.log("Veuillez saisir un choix valide !");
    }

} while (choix !== "0");