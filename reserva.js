class Reserva {
    constructor(nombreHuesped, pax, numeroNoches, precioTotal) {
        this.nombreHuesped = nombreHuesped
        this.pax = parseInt(pax);
        this.numeroNoches = parseInt(numeroNoches);
        this.precioTotal = parseFloat(precioTotal);
    }
}