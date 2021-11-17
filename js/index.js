var empleados = [];
//Función flecha Guardar
const guardar = () => {
    //Captara los datos de las cajas de textos
    let doc = document.getElementById("doc").value;
    let nom = document.getElementById("nom").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;
    // Crea un JSON con los datos del empleado
    /*
    {
        documento: 50,
        nombre: "Maria",
        telefono: 3652,
        correo: "g@g.com"
    }
    */
    let p = {};
    p.documento = doc;
    p.nombre = nom;
    p.telefono = tel;
    p.correo = email;
    //Guarda el empleado en el JSON
    empleados.push(p);
}
/**
 [
    {
        documento: 50,
        nombre: "Maria",
        telefono: 3652,
        correo: "g@g.com"
    },
    {
        documento: 8070,
        nombre: "Luis",
        telefono: 3652,
        correo: "g@g.com"
    },
    {
        documento: 9080,
        nombre: "Katerina",
        telefono: 546,
        correo: "g@g.com"
    }
 ]
 */

const listar = () => {
    let listado = document.getElementById("cuerpo-tabla");
    listado.innerHTML = "";
    for (const e of empleados) {
        listado.innerHTML += `<tr>
                                <td>${e.documento}</td>
                                <td>${e.nombre}</td>
                                <td>${e.telefono}</td>
                                <td>${e.correo}</td>
                            </tr>`;
    }
}