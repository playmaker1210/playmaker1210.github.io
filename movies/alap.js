fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON").then(x => x.json()).then(y => megjelenit(y));


function megjelenit(tomb){
    console.log(tomb);

    let szoveg = "";
    for(let elem of tomb){
        szoveg += "<tr>";
        szoveg += "<td>";
        szoveg += elem.Title;
        szoveg += "</td>";
        szoveg += "<td>";
        szoveg += elem.Year;
        szoveg += "</td>";
        szoveg += "<td>";
        szoveg += elem.Released;
        szoveg += "</td>";
        szoveg += "<td>";
        szoveg += elem.Runtime;
        szoveg += "</td>";
        szoveg += "<td>";
        szoveg += elem.Genre;
        szoveg += "</td>";
        szoveg += "<td>";
        szoveg += elem.Writer;
        szoveg += "</td>";
        szoveg += "<td>";
        szoveg += '<a href="'+elem.Images[0]+'" target="_blank">';
        szoveg += '<img class="w-50" src="'+elem.Images[0]+'">';
        szoveg += '</a>';
        szoveg += "</td>";
        szoveg += "</tr>";
    }

    document.getElementById("torzs").innerHTML = szoveg;

}