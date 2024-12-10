// pokud se JS používá na v hlavičce nebo na začítku body, je nutné čekat event DOMContentLoaded
// kód se čte zvrchu dolů, tedy, vše co je pod naším <script> je načteno až po našem JS,
// proto by kód v javasfiptu nefungoval

// čekám, než se načte kompletní stránka - tedy na načtení DOM
// document - je proměnná, která drží data o DOM, documentu HTML
// .addEventListener(...) je funkce, která přidává posluchač události, jaké, je určeno v prvním parametru funkce,
// druhý je callback - funkce, která se volá v případě, že se event zaznamená
// zápis () => {} je anonymní labda funkce
document.addEventListener('DOMContentLoaded', () => {
    // definice proměnné s textem
    let name = "Anonymní uživatel"
    // definice proměnné s číslem
    let age = -1
    // Zavolám funkci alert, do která předám data z proměnné
    // ukázka demonstruje i přímé vložení proměnné i napojování proměnných skrze +
    alert("Ahoj " + name + ` po kompletním načtení stránky, tvůj věk je asi ${age}`)
});