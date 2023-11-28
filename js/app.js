//5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

    let cronometro;
    let segundos = 0;

        function iniciar() {
            cronometro = setInterval(function() {
                segundos++;
                let horas = Math.floor(segundos / 3600);
                let minutos = Math.floor((segundos % 3600) / 60);
                let segundosRestantes = segundos % 60;
                document.getElementById("cronometro").textContent = 
                    String(horas).padStart(2, "0") + ":" +
                    String(minutos).padStart(2, "0") + ":" +
                    String(segundosRestantes).padStart(2, "0");
            }, 1000);
        }

        function pausar() {
            clearInterval(cronometro);
        }

        function reset() {
            clearInterval(cronometro);
            segundos = 0;
            document.getElementById("cronometro").textContent = "00:00:00";
        }

