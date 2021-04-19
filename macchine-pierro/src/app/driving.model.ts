export class Mezzo {

  // dichiarare i parametri del costruttore con public fa due cose:
  // dichiara le proprietà e assegna i parametri alle proprietà

  constructor (
    public tipo: string,
    public descrizione: string,
    public tariffa: string,
    public valutazionemedia: string) {}
}
