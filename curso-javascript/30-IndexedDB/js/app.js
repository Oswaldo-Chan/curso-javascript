let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 3000);
});


function crmDB() {
    let crmDB = window.indexedDB.open('crm', 1);

    crmDB.onerror = function() {
        console.log('Hubo un error');
    }

    crmDB.onsuccess = function() {
        DB = crmDB.result;
        console.log(DB);
    }

    crmDB.onupgradeneeded = function(e) {
        let db = e.target.result;
        let objectStore = db.createObjectStore('crm', { keyPath: 'crm',  autoIncrement: true});

        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});

        console.log('DB creada');
    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function() {
        console.log('Transaccion Completada');
    };
    
    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion')
    };

    let objectStore = transaction.objectStore('crm');
    console.log(objectStore);

    const nuevoCliente = {
        nombre : "Oswaldo",
        email: "correo@correo.com",
        telefono: 1234567890
    }

    let peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}