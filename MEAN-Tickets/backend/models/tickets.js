const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketSchema = new Schema({
    ticket: {type: String, required: true},
    rut: {type: String, required: true}, 
    descripcion: {type: String, required: true},
    fecha_creacion: {type: String, required: true},
    fecha_cierre: {type: String, required: true},
    sla: {type: Number, required: true},
    estado: {type: String, required: true},
    baja: {type: String, required: true},
    proceso: {type: String, required: true},
    detalle: {type: String, required: true},
    creador: {type: String, required: true},
    canal: {type: String, required: true},
    observacion: {type: String, required: false},
    analista: {type: String, required: false}    
});

module.exports =  mongoose.model('Ticket', TicketSchema);