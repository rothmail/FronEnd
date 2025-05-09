let paragrafo = document.getElementById("demo");

fetch("./objects.json")
    .then(resposta => resposta.json())
    .then(dados => {
        let texto = "Lista de alunos por matéria:<br><br>";
        texto += "<b>matematica:</b><br>";
        texto += "- " + dados.matematica[0] + "<br>";
        texto += "- " + dados.matematica[1] + "<br>";
        texto += "- " + dados.matematica[2] + "<br><br>";
        texto += "<b>Portugues:</b><br>";
        texto += "- " + dados.Portugues[0] + "<br>";
        texto += "- " + dados.Portugues[1] + "<br>";
        texto += "- " + dados.Portugues[2] + "<br><br>";
        texto += "<b>ciencias:</b><br>";
        texto += "- " + dados.ciencias[0] + "<br>";
        texto += "- " + dados.ciencias[1] + "<br>";
        texto += "- " + dados.ciencias[2] + "<br><br>";
        texto += "<b>historia:</b><br>";
        texto += "- " + dados.historia[0] + "<br>";
        texto += "- " + dados.historia[1] + "<br>";
        texto += "- " + dados.historia[2] + "<br><br>";
        texto += "<b>filosofia:</b><br>";
        texto += "- " + dados.filosofia[0] + "<br>";
        texto += "- " + dados.filosofia[1] + "<br>";
        texto += "- " + dados.filosofia[2] + "<br><br>";

        paragrafo.innerHTML = texto;
    })

