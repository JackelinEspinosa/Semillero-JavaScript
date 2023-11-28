var tablaDoctores = JSON.parse(localStorage.getItem("tablaDoctoresStorage")) || [];

listarDoctores();

function listarDoctores() {
    console.log("INGRESANDO A LISTAR DOCTORES...");

    var dataFila = '';

    if (tablaDoctores.length > 0) {
        for (const i in tablaDoctores) {
            var varDoctor = JSON.parse(tablaDoctores[i]);
            dataFila += "<tr>";
            dataFila += "<td>" + varDoctor.idDoctor + "</td>";
            dataFila += "<td>" + varDoctor.nombresApellidoDoctor + "</td>";
            dataFila += "<td>" + varDoctor.especialidad + "</td>";
            dataFila += "<td>" + varDoctor.telefonoDoctor + "</td>";
            dataFila += "<td>" + varDoctor.estadoDoctor + "</td>";
            dataFila += "<td>" +
                "<button type='button' class='btn btn-warning' onclick='abrirFormDoctor(" + varDoctor.idDoctor + ")'>EDITAR</button>" +
                "<button type='button' class='btn btn-info' onclick='eliminarDoctor(" + varDoctor.idDoctor + ")'>ELIMINAR</button>" +
                "</td>";
            dataFila += "</tr>";
        }
        document.getElementById("dataDoctores").innerHTML = dataFila;
    } else {
        document.getElementById("dataDoctores").innerHTML = "<tr><td colspan='6'>No hay datos</td></tr>";
    }
}

function abrirFormDoctor(idForm) {
    localStorage.setItem("idFormDoctor", JSON.stringify(idForm));
    window.location.replace("doctores-form.html");
}

function eliminarDoctor(idDoctor) {
    tablaDoctores = tablaDoctores.filter(function (varDoctor) {
        return JSON.parse(varDoctor).idDoctor != idDoctor;
    });

    localStorage.setItem("tablaDoctoresStorage", JSON.stringify(tablaDoctores));
    listarDoctores();
}
