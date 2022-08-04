export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const copyOfData = new Date(this._data.getTime());
        return copyOfData;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dateString, quantidadeString, valorString) {
        const regx = /-/g;
        const date = new Date(dateString.replace(regx, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
