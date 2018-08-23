const Ticket = require('../models/tickets');

const ticketController = {};

ticketController.getTickets = async (req, res) => {
    const tickets = await Ticket.find();
    res.json(tickets);
};

ticketController.createTicket = async (req, res) => {
    const ticket = new Ticket({
        ticket: req.body.ticket,
        rut: req.body.rut,
        descripcion: req.body.descripcion,
        fecha_creacion: req.body.fecha_creacion,
        fecha_cierre: req.body.fecha_cierre,
        sla: req.body.sla,
        estado: req.body.estado,
        baja: req.body.baja,
        proceso: req.body.proceso,
        detalle: req.body.detalle,
        creador: req.body.creador,
        canal: req.body.canal,
        observacion: req.body.observacion,
        analista: req.body.analista 
    });
    await ticket.save();
    res.json({
        status: 'Ticket Saved'
    });
};

ticketController.getTicket = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    res.json(ticket);
};

ticketController.editTicket = async (req, res) => {
    const ticket = {
        ticket: req.body.ticket,
        rut: req.body.rut,
        descripcion: req.body.descripcion,
        fecha_creacion: req.body.fecha_creacion,
        fecha_cierre: req.body.fecha_cierre,
        sla: req.body.sla,
        estado: req.body.estado,
        baja: req.body.baja,
        proceso: req.body.proceso,
        detalle: req.body.detalle,
        creador: req.body.creador,
        canal: req.body.canal,
        observacion: req.body.observacion,
        analista: req.body.analista
    };
    await Ticket.findByIdAndUpdate(req.params.id, {$set: ticket}, {new: true});
    res.json({
        status: 'Ticket Updated'
    });
};

ticketController.deleteTicket = async (req, res) => {
    await Ticket.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Ticket Deleted'
    });
};

module.exports = ticketController;