const Reservas = [];

Reservas.push(new Reserva(
    (prompt ("Cual es el nombre del huesped?")),
    (prompt ("Cuantas personas son?")),
    (prompt ("Cuantas noches se van a hospedar?")), 
    (prompt ("Cual es el precio total de la reserva?"))
    )
    );

Reservas.push(new Reserva(
    (prompt ("Cual es el nombre del huesped?")),
    (prompt ("Cuantas personas son?")),
    (prompt ("Cuantas noches se van a hospedar?")), 
    (prompt ("Cual es el precio total de la reserva?"))
    )
    );

Reservas.push(new Reserva(
    (prompt ("Cual es el nombre del huesped?")),
    (prompt ("Cuantas personas son?")),
    (prompt ("Cuantas noches se van a hospedar?")), 
    (prompt ("Cual es el precio total de la reserva?"))
    )
    );

console.log(Reservas);

const PrecioConIva = Reservas.map((item) => new Reserva(item.nombreHuesped, item.pax, item.numeroNoches, item.precioTotal*1.19))

PrecioConIva.forEach((item) => console.log(item))





