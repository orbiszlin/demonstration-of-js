// pokud se JS používá na konci body, není třeba čekat na event DOMContentLoaded jako v případě v hlavičce.
// kód se čte zvrchu dolů, tedy, vše je načtené dříve, než se náš kód dostane k tomuto javascriptu níže.

// definice proměnné s textem
let name = "Anonymní uživatel"
// definice proměnné s číslem
let age = -1
// Zavolám funkci alert, do která předám data z proměnné
// ukázka demonstruje i přímé vložení proměnné i napojování proměnných skrze +
alert("Ahoj " + name + ` po kompletním načtení stránky, tvůj věk je asi ${age}`)