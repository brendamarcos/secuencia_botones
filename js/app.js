fetch("https://brendamarcos.github.io/secuencia_botones/json/preguntas.json")
.then(response => response.json())
.then(data => {
    console.log(data)

    const centerText = document.querySelectorAll(".center_text");

    centerText.forEach(center => {
        center.addEventListener("click", event => {
            // for(let i = 0; i < data.length; i++) {
            //     if(i == event.currentTarget.textContent){
            //         console.log(data[i]);
            //     }
            // }
            let indexPregunta = data[event.currentTarget.innerHTML - 1]; /*lo mismo pero en una sola linea*/
            console.log(indexPregunta);

            let modal = document.querySelector("#myModal");
            console.log(modal);

            modal.style.display = "block";

            let modalBodyP = document.querySelector(".modal-body p");

            modalBodyP.textContent = indexPregunta;

            let close = document.querySelector("#close");

            close.onclick = function() {
                modal.style.display = "none";
            }
        })
    })
  
})