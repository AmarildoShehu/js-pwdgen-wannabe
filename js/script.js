// 1. collego il file.
console. log('JS OK');

// 2. chiedo all'utente il suo nome.
const name = prompt('Inserisci il tuo nome');
console.log(name);

// 3. chiedo all'utente il suo cognome.
const surname = prompt('Inserisci il tuo cognome');
console.log(surname);

// 4. chiedo all'utente il suo colore preferito.
const color = prompt('Inserisci il tuo colore preferito');
console. log(color);

// 5. inserisco nell'html un id per mostrare a schermo la password.

// 6. concateno i valori per creare la password.
// 7. inserisco il numero '21' da agganciare alla password.
const password = name+surname+color+21;
console.log(password);

// 8. Mostra la password in pagina.

document.getElementById("passtext").innerText = "La tua password è: " + password;