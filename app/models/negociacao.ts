export class Negociacao {


  constructor(private  _data: Date, public readonly quantidade: number, public readonly valor: number){}

  get data(): Date{
    const copyOfData = new Date(this._data.getTime());
    return copyOfData;
  }

  get volume(): number{
    return this.quantidade * this.valor;
  }
}