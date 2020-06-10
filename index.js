  var foodPrice = document.getElementById('foodPrice');

  var kainos = function()
  {
     // Ivestos reikšmės į laukelius
     var pusryciai = document.getElementById("pusryciai");
     var pietus = document.getElementById("pietus");
     var vakariene = document.getElementById("vakariene");
     // reikšmės kurios pasikeis įvedus duomenys
     var pusryciaiSUM = document.getElementById("pusryciaiSUM");
     var pietusSUM = document.getElementById("pietusSUM");
     var vakarieneSUM = document.getElementById("vakarieneSUM");
     // pakeičia html ką įvedėm į langelius
     pusryciaiSUM.innerHTML = pusryciai.value + " €";
     pietusSUM.innerHTML    = pietus.value + " €";
     vakarieneSUM.innerHTML = vakariene.value + " €";
   };
   foodPrice.addEventListener('click', kainos);


            // nuo cia prasideda kodas su maisto skaiciuokle

            function addHtmlTableRow()
            {
              var table = document.getElementById("table"),
              newRow = table.insertRow(table.length),
              cell1 = newRow.insertCell(0),
              cell2 = newRow.insertCell(1),
              cell3 = newRow.insertCell(2),
              cell4 = newRow.insertCell(3),
              cell5 = newRow.insertCell(4),
              cell6 = newRow.insertCell(5),

              pusryciai = document.getElementById("pusryciai").value,
              pietus = document.getElementById("pietus").value,
              vakariene = document.getElementById("vakariene").value,

              vardas = document.getElementById("vardas").value,
              pusryciaiDays = document.getElementById("pusryciaiDays").value,
              pietusDays = document.getElementById("pietusDays").value,
              vakarieneDays = document.getElementById("vakarieneDays").value,
              suma = pusryciaiDays * pusryciai + pietusDays * pietus + vakarieneDays * vakariene;

              var pusryciuSuma = pusryciaiDays * pusryciai;
              var pietusSuma = pietusDays * pietus;
              var vakarienesSuma = vakarieneDays * vakariene;

              cell1.innerHTML = vardas;
              cell2.innerHTML = pusryciuSuma.toFixed(2) + " € ";
              cell3.innerHTML = pietusSuma.toFixed(2) + " € ";
              cell4.innerHTML = vakarienesSuma.toFixed(2) + " € ";
              cell5.innerHTML = suma.toFixed(2) + " € ";
              cell6.innerHTML = "ištirinti";

                // ištrinimo funkcija

                var index, table = document.getElementById("table");
                for (var i = 1; i < table.rows.length; i++)
                {
                  table.rows[i].cells[5].onclick = function()
                  {
                    index = this.parentElement.rowIndex;
                    table.deleteRow(index);
                  };
                }
              }
