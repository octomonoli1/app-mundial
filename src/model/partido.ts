export class Partido {
    constructor(
        private _id: number,
        private _asistencia: number,
        private _ciudad: string,
        private _equipoLocal: string,
        private _equipoVisitante: string,
        private _estadio: string,
        private _fase: string,
        private _fecha: Date,
        private _golesLocal: number,
        private _golesVisitante: number,
        private _grupo: string,
    ){};

    get id (): number { return this._id; }
    set id (value: number) { this._id = value; }

    get asistencia(): number { return this._asistencia; }
    set asistencia(value: number) { this._asistencia = value; }

    get ciudad(): string { return this._ciudad; }
    set ciudad(value: string) { this._ciudad = value; }

    get equipoLocal(): string { return this._equipoLocal; }
    set equipoLocal(value: string) { this._equipoLocal = value; }

    get equipoVisitante(): string { return this._equipoVisitante; }
    set equipoVisitante(value: string) { this._equipoVisitante = value; }

    get estadio(): string { return this._estadio; }
    set estadio(value: string) { this._estadio = value; }

    get fase(): string { return this._fase; }
    set fase(value: string) { this._fase = value; }

    get fecha(): Date { return this._fecha; }
    set fecha(value: Date) { this._fecha = value; }

    get golesLocal(): number { return this._golesLocal; }
    set golesLocal(value: number) { this._golesLocal = value; }

    get golesVisitante(): number { return this._golesVisitante; }
    set golesVisitante(value: number) { this._golesVisitante = value; }

    get grupo(): string { return this._grupo; }
    set grupo(value: string) { this._grupo = value; }
}
