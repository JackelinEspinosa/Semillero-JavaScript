var tablaCitas = localStorage.getItem("tablaCitasStorage");
tablaCitas = JSON.parse(tablaCitas);
if (tablaCitas == null) {
    tablaCitas = [];
}

listarCitas();

function listarCitas() {
    console.log("INGRESANDO A LISTAR CITAS...");

    var dataFila = '';

    if (tablaCitas.length > 0) {
        for (const i in tablaCitas) {
            var varCita = JSON.parse(tablaCitas[i]);
            dataFila += "<tr>";
            dataFila += "<td>" + varCita.idCita + "</td>";
            dataFila += "<td>" + varCita.fecha + "</td>";
            dataFila += "<td>" + varCita.hora + "</td>";
            dataFila += "<td>" + obtenerNombrePaciente(varCita.idPaciente) + "</td>";
            dataFila += "<td>" + obtenerNombreDoctor(varCita.idDoctor) + "</td>";
            dataFila += "<td>" + varCita.estado + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirFormCita(" + varCita.idCita + ")'>EDITAR</button>" +
                "<button type='button' class='btn btn-info' onclick='eliminarCita(" + varCita.idCita + ")'>ELIMINAR</button>" +
                "</td>";
            dataFila += "</tr>";
        }
        document.getElementById("dataCitas").innerHTML = dataFila;
    } else {
        document.getElementById("dataCitas").innerHTML = "<tr><td colspan='7'>No hay datos</td></tr>";
    }
}

function abrirFormCita(idForm) {
    localStorage.setItem("idFormCita", JSON.stringify(idForm));
    window.location.replace("citas-form.html");
}

function eliminarCita(idCita) {
    for (const i in tablaCitas) {
        var varCita = JSON.parse(tablaCitas[i]);
        if (varCita.idCita == idCita) {
            tablaCitas.splice(i, 1);
            localStorage.setItem("tablaCitasStorage", JSON.stringify(tablaCitas));
        }
    }
    listarCitas();
}

function obtenerNombrePaciente(idPaciente) {
    var tablaPacientes = localStorage.getItem("tablaPacientesStorage");
    tablaPacientes = JSON.parse(tablaPacientes) || [];

    for (const i in tablaPacientes) {
        var varPaciente = JSON.parse(tablaPacientes[i]);
        if (varPaciente.idPaciente == idPaciente) {
            return varPaciente.nombApellido;
        }
    }

    return "No encontrado";
}

function obtenerNombreDoctor(idDoctor) {
    var tablaDoctores = localStorage.getItem("tablaDoctoresStorage");
    tablaDoctores = JSON.parse(tablaDoctores) || [];

    for (const i in tablaDoctores) {
        var varDoctor = JSON.parse(tablaDoctores[i]);
        if (varDoctor.idDoctor == idDoctor) {
            return varDoctor.nombApellidoDoctor;
        }
    }

    return "No encontrado";
}
