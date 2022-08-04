export class Negociacao {


  constructor(private  _data: Date, public readonly quantidade: number, public readonly valor: number){}

  get data(): Date{
    const copyOfData = new Date(this._data.getTime());
    return copyOfData;
  }

  get volume(): number{
    return this.quantidade * this.valor;
  }

  public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao{
    const regx = /-/g;
    const date = new Date(dateString.replace(regx, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(
      date,
      quantidade,
      valor,
    );
  }
}