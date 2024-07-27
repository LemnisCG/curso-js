const cats = ["Leopardo", "Serval", "Jaguar", "Tigre", "Caracal", "León"];
const upperCats = cats.map(toUpper);
const filtered = cats.filter(lCat);

for (const cat of cats){
    console.log(toUpper(cat))
}

function toUpper(string){
    return string.toUpperCase();
}

function lCat(cat){
    return cat.startsWith('J');
}


console.log({filtered,upperCats})

