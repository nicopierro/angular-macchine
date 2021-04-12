export class Mezzo {

  // dichiarare i parametri del costruttore con public fa due cose:
  // dichiara le proprietà e assegna i parametri alle proprietà

  constructor (
    public tipo: string,
    public descrizione: string,
    public tarrifa: string,
    public valutazionemedia: string) {}
}
