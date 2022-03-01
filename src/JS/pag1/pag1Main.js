const generateCapitulosCard = () => {

    let contenedorImg = document.getElementById('capitulosContainer1')

    let tituloLista = document.createElement('h2');
    tituloLista.innerText = "Capitulos de mi historia";
    let lista = document.createElement('ul');
    
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let li4 = document.createElement('li')

    let a1 = document.createElement('a')
    let a2 = document.createElement('a')
    let a3 = document.createElement('a')
    let a4 = document.createElement('a')

    a1.innerText = "Introduccion";
    a2.innerText = "Desarrollo";
    a3.innerText = "Final";
    a4.innerText = "Inicio";

    a1.href = "pag1.html";
    a2.href = "pag2.html";
    a3.href = "pag3.html";
    a4.href = "../../index.html";


    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);

    lista.appendChild(li1);
    lista.appendChild(li2);
    lista.appendChild(li3);
    lista.appendChild(li4);

    contenedorImg.appendChild(tituloLista);
    contenedorImg.appendChild(lista);


    console.log("hola");





    

};

const generateIMGCard = () => {
    let IMGContenedor = document.getElementById("IMG1");

    let figure = document.createElement("figure");
    figure.id = "figureContainer1";

    let img = document.createElement("img");
    img.src = "../../../assets/IMAGEN1.jpg";
    img.id = "img1";
    img.alt = "Trulli";

    let figC = document.createElement("figcaption");
    figC.innerText = "Fig.1 -Lugar de los hechos";

    figure.appendChild(img);
    figure.appendChild(figC);

    IMGContenedor.appendChild(figure);


    let pContainer = document.createElement("div");
    pContainer.id = "progressContainer1";
    let lbl = document.createElement("label");
    lbl.for = "file";
    lbl.id = "fileLabel1";
    lbl.innerText = "Progreso de la historia";


    let pp = document.createElement("progress");
    pp.id = "file1";
    pp.value="33";
    pp.max = "100";
    pp.innerText = "33%";

    pContainer.appendChild(lbl);
    pContainer.appendChild(pp);

    IMGContenedor.appendChild(pContainer);

};

export {generateCapitulosCard, generateIMGCard};