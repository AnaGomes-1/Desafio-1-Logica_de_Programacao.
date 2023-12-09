console.log('Ano novo chegando')

let cantora = "Mariah Carey";

let idade = 54;

let ano = 2023;

console.log(ano - idade);

const anoNascimento = ano - idade;

console.log(anoNascimento);

let quartaFeira = true;

console.log(quartaFeira);
console.log(typeof quartaFeira);

let _idade = 25

if (_idade >= 18){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.");
} else {
    console.log("Sinto muito, mas assistirá da tv globo.");
}

let niver = "Dezembro";

if (niver == "Agosto" || niver == "Dezembro" || niver == "Junho"){
    console.log(`Uma ou mais opções estão corretas, mês selecionado foi ${niver}`);
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi o mês ${niver} `)
}
