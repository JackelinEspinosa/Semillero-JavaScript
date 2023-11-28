var tablaDoctores = localStorage.getItem("tablaDoctoresStorage");
tablaDoctores = JSON.parse(tablaDoctores);
if (tablaDoctores == null) {
    tablaDoctores = [];
}

var idFormDoctor = localStorage.getItem("idFormDoctor");
idFormDoctor = JSON.parse(idFormDoctor);
if (idFormDoctor == null) {
    idFormDoctor = 0;
}

cargarPaginaDoctor();

function guardarDoctor() {
    Swal.fire({
        title: 'GUARDAR',
        html: '¿DESEA GUARDAR LOS CAMBIOS?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO'
    }).then(
        (result) => {
            if (result.isConfirmed) {
                console.log("PRESIONÓ GUARDAR...");
                var objDoctor = {
                    idDoctor: (idFormDoctor > 0) ? idFormDoctor : (tablaDoctores.length + 1),
                    nombresApellidoDoctor: document.getElementById("txtNombApellidoDoctor").value,
                    especialidad: document.getElementById("txtEspecialidad").value,
                    telefonoDoctor: document.getElementById("txtTelefonoDoctor").value,
                    estadoDoctor: document.getElementById("cboEstadoDoctor").value
                };
                console.log(objDoctor);

                // EDITAR
                if (idFormDoctor > 0) {
                    for (const i in tablaDoctores) {
                        var varDoctor = JSON.parse(tablaDoctores[i]);
                        if (varDoctor.idDoctor == idFormDoctor) {
                            tablaDoctores[i] = JSON.stringify(objDoctor);
                            break;
                        }
                    }
                } else {
                    // NUEVOS DOCTORES
                    tablaDoctores.push(JSON.stringify(objDoctor));
                }

                localStorage.setItem("tablaDoctoresStorage", JSON.stringify(tablaDoctores));

                Swal.fire('CAMBIOS GUARDADOS', '', 'success').then(
                    (result) => {
                        window.location.replace("doctores.html");
                    }
                );
            } else if (result.isDenied) {
                Swal.fire('CAMBIOS NO GUARDADOS', '', 'info');
            }
        }
    );
}

function cargarPaginaDoctor() {
    if (idFormDoctor > 0) {
        // SACAR DATOS DE LA FILA DE LA TABLA Y PONERLO EN EL FORMULARIO
        for (const i in tablaDoctores) {
            var varDoctor = JSON.parse(tablaDoctores[i]);
            if (varDoctor.idDoctor == idFormDoctor) {
                document.getElementById("txtIdDoctor").value = varDoctor.idDoctor;
                document.getElementById("txtNombApellidoDoctor").value = varDoctor.nombresApellidoDoctor;
                document.getElementById("txtEspecialidad").value = varDoctor.especialidad;
                document.getElementById("txtTelefonoDoctor").value = varDoctor.telefonoDoctor;
                document.getElementById("cboEstadoDoctor").value = varDoctor.estadoDoctor;
                break;
            }
        }
    }
}
