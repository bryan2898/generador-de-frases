const questions = [
    {

        frase:
            "Haz el amor y no la guerra.",
            autor: " -john lennon"
    },
    { 
        frase:
            "Cada dia sabemos mas y entendemos menos" ,
            autor: " - Albert Einstein"
    },
    {
        frase:
            "la medida del amor es amar sin medida ",
            autor: " - San Agustin"    
    },
    {
        frase:
            "No hay nada que un hombre no sea capaz de hacer cuando una mujer lo mira ",
            autor: " - cazanova "
    },
    {
        frase:
            "El dinero no compra la vida",
            autor: " - Bod Marley"
    }
];
const btn = document.getElementById( "generate-btn");
const frase = document.getElementById("frase")
const autor = document.querySelector(".autor") 

btn.addEventListener("click", function() {
    let random =Math.floor(Math.random() * questions.length);
    frase.innerHTML = questions[random].frase;
    autor.innerHTML = questions[random].autor;
} )
