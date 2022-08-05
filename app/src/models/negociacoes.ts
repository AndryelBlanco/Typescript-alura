import { ModeloObjeto } from '../interfaces/modelo-objeto.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements ModeloObjeto<Negociacoes> {
   
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto() {
        
    }

    ehIgual(objeto: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto);
    }
  
}
