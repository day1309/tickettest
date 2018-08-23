export class Ticket {

    constructor(_id = '', ticket = '', rut = '', descripcion = '',
                fecha_creacion = '', fecha_cierre = '', sla = 0, estado = '',
                baja = '', proceso = '', detalle = '', creador = '',
                canal = '', observacion = '', analista = '') {
                    this._id = _id;
                    this.ticket = ticket;
                    this.rut = rut;
                    this.descripcion = descripcion;
                    this.fecha_creacion = fecha_creacion;
                    this.fecha_cierre = fecha_cierre;
                    this.sla = sla;
                    this.estado = estado;
                    this.baja = baja;
                    this.proceso = proceso;
                    this.detalle = detalle;
                    this.creador = creador;
                    this.canal = canal;
                    this.observacion = observacion;
                    this.analista = analista;

    }

    _id: string;
    ticket: string;
    rut: string;
    descripcion: string;
    fecha_creacion: string;
    fecha_cierre: string;
    sla: number;
    estado: string;
    baja: string;
    proceso: string;
    detalle: string;
    creador: string;
    canal: string;
    observacion: string;
    analista: string;
}
