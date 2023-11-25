var tablaCitas = JSON.parse(localStorage.getItem("tablaCitasStorage")) || [];
var tablaPacientes = JSON.parse(localStorage.getItem("tablaPacienteStorage")) || [];
var tablaDoctores = JSON.parse(localStorage.getItem("tablaDoctoresStorage")) || [];

var idFormCita = localStorage.getItem("idFormCita");
idFormCita = JSON.parse(idFormCita) || 0;

cargarPaginaCita();

function cargarPaginaCita() {
    if (idFormCita > 0) {
        for (const i in tablaCitas) {
            var varCita = JSON.parse(tablaCitas[i]);
            if (varCita.idCita == idFormCita) {
                document.getElementById("txtIdCita").value = varCita.idCita;
                document.getElementById("txtFechaCita").value = varCita.fecha || "";
                // Agrega más líneas según los campos necesarios
                break;
            }
        }
    } else {
        // Puedes agregar lógica para cargar datos nuevos en el formulario si es necesario
    }
}

function guardarCita() {
    Swal.fire({
        title: 'GUARDAR',
        html: '¿DESEA GUARDAR LOS CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("PRESIONO GUARDAR...");
            var objCita = JSON.stringify({
                idCita: (idFormCita > 0) ? idFormCita : (tablaCitas.length + 1),
                fecha: document.getElementById("txtFechaCita").value || "", 
                // Agrega más campos según tus necesidades
            });

            if (idFormCita > 0) {
                for (const i in tablaCitas) {
                    var varCita = JSON.parse(tablaCitas[i]);
                    if (varCita.idCita == idFormCita) {
                        tablaCitas[i] = objCita;
                        break;
                    }
                }
            } else {
                tablaCitas.push(objCita);
            }

            localStorage.setItem("tablaCitasStorage", JSON.stringify(tablaCitas));

            Swal.fire('CAMBIOS GUARDADOS', '', 'success').then((result) => {
                window.location.replace("citas.html");
            });
        } else if (result.isDenied) {
            Swal.fire('CAMBIOS NO GUARDADOS', '', 'info');
        }
    });
}

function cancelarCita() {
    window.location.replace("citas.html");
}
    