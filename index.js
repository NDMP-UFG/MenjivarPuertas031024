const express = require('express');
const app = express();
const puerto = 3000;

app.get('/usuario', function(req, res){
    res.json({
        primernombre: "Nestor",
        segundonombre: "David",
        primerapellido: "Menjivar",
        segundoapellido: "Puertas",
        fechadenacimiento: "1999-04-16",
        estadofamiliar: "Soltero",
        residencia: "Colonia X, calle Y, casa 222",
        profesion: "Licenciado en Sistemas informaticos",
        estatura: 1.75,
        peso: 200.0,
        colorpiel: "Trigueño",
        colorojos: "cafe",
        colorcabello: "negro",
        ultimosempleos: [{
            empresa: "Concentrix",
            dependencia: "Servicio al cliente",
            direccion: "calle A, pasaje B, san salvador",
            cargo: "Agente de postventas",
            desde: "2020-01-01",
            hasta: "2020-12-31"
        },{
            empresa: "Telus",
            dependencia: "Servicio al cliente",
            direccion: "Calle A, pasaje B, san salvador",
            cargo: "Agente de ventas",
            desde: "2021-01-01",
            hasta: "2021-12-31" 
        }]
    });
});


app.get('/genero', function(req,res){
    res.json([
        {
            id: 1,
            genero:"Masculino"
        },{
            id: 2,
            genero:"Femenino"
        }
    ]);
});


app.get('/tipo_documento', function(req,res){
    res.json([{
        id:1,
        tipo_documento: "DUI"
    },{
        id:2,
        tipo_documento: "NIT"
    },{
        id:3,
        tipo_documento: "ISSS"
    },{
        id:4,
        tipo_documento: "PASAPORTE"
    }]);
});


app.get('/departamentos',function(req,res){
    res.json([{
        id:1,
        departamento:"Ahuachapán"        
    },{
        id:2,
        departamento: "Santa Ana"
    },{
        id:3,
        departamento: "Sonsonate"
    },{
        id:4,
        departamento: "La Libertad"
    },{
        id:5,
        departamento: "San Salvador"
    },{
        id:6,
        departamento: "Chalatenango"
    },{
        id:7,
        departamento: "Cuscatlán"
    },{
        id:8,
        departamento: "Cabañas"
    },{
        id:9,
        departamento: "La Paz"
    },{
        id:10,
        departamento: "San Vicente"
    },{
        id:11,
        departamento: "Usulután"
    },{
        id:12,
        departamento: "San Miguel"
    },{
        id:13,
        departamento: "Morazán"
    },{
        id:14,
        departamento: "La Unión"
    }]);
});



app.get('/municipios',function(req,res){

    res.json([{
        id:1,
        municipio: "Ahuachapán Centro"
    },{
        id:2,
        municipio: "Ahuachapán Norte"
    },{
        id:3,
        municipio: "Santa Ana Norte"
    },{
        id:4,
        municipio: "Santa Ana Sur"
    },{
        id:5,
        municipio: "Sonsonate Este"
    },{
        id:6,
        municipio: "Sonsonate Oeste"
    },{
        id:7,
        municipio: "La Libertad Sur"
    },{
        id:8,
        municipio: "La Libertad Costa"
    },{
        id:9,
        municipio: "San Salvador Centro"
    },{
        id:10,
        municipio: "San Salvador Sur"
    },{
        id:11,
        municipio: "Chalatenango Sur"
    },{
        id:12,
        municipio: "Chalatenango Centro"
    },{
        id:13,
        municipio: "Cuscatlán Sur"
    },{
        id:14,
        municipio: "Cuscatlán Norte"
    },{
        id:15,
        municipio: "Cabañas Este"
    },{
        id:16,
        municipio: "Cabañas Oeste"
    },{
        id:17,
        municipio: "La Paz Oeste"
    },{
        id:18,
        municipio: "La Paz Centro"
    },{
        id:19,
        municipio: "San Vicente Sur"
    },{
        id:20,
        municipio: "San Vicente Norte"
    },{
        id:21,
        municipio: "Usulutan Norte"
    },{
        id:22,
        municipio: "Usulutan Este"
    },{
        id:23,
        municipio: "San Miguel Norte"
    },{
        id:24,
        municipio: "San Miguel Oeste"
    },{
        id:25,
        municipio: "Morazán Norte"
    },{
        id:26,
        municipio: "Morazán sur"
    },{
        id:27,
        municipio: "La Unión Norte"
    },{
        id:28,
        municipio: "La Unión Sur"
    }
    ]);
});

app.get('/sumar', function(req,res){

    let resultado = parseFloat(req.query.campo1) + parseFloat(req.query.campo2);

    res.json({
        igual_a: resultado
    });
});

app.listen(puerto,function(req,res){
    console.log("Servidor en ejecución en el puerto "+ puerto);
});