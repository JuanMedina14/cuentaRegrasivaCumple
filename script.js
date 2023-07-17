const days = document.getElementById("days"),
      hours = document.getElementById("hours"),
      min = document.getElementById("min"),
      sec = document.getElementById("sec");

      const cumpleJuan = new Date("January 14, 2024 00:00:00") .getTime();

    setInterval(()=> {
        
      let hoy = new Date().getTime()

      let tiempoRest = cumpleJuan - hoy;

      //conversion de milisegundos a dias horas min seg

      let 
        dias = Math.floor(tiempoRest/68400000),
        horas = Math.floor(tiempoRest/3600000) % 24,
        minutos = Math.floor(tiempoRest/60000) % 60,
        segundos = Math.floor(tiempoRest/1000) % 60;

        
      // mostrar en pantalla los resultados

      days.innerHTML = dias;
      hours.innerHTML = horas;
      min.innerHTML = minutos;
      sec.innerHTML = segundos;

      //Acomodar los segundos en dos cifras 

      if (horas <10) hours.innerHTML ="0" + horas;
      if (minutos <10) min.innerHTML ="0" + horas;
      if (segundos <10) sec.innerHTML ="0" + segundos;


    }, 1000);



