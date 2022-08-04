import { Negociacao } from "../models/negociacao";

export abstract class View<T>{
  
  protected element: HTMLElement; //Com herança esse modificar permite os filhos terem acesso

  constructor(selector: string){
    this.element = document.querySelector(selector);
  }

  protected abstract template(model: T): string;

  update(model: T): void{
    const template = this.template(model)
    this.element.innerHTML = template;
  }

}