import { Negociacao } from "../models/negociacao";

export abstract class View<T>{
  
  protected element: HTMLElement; //Com herança esse modificar permite os filhos terem acesso
  private escape = false;


  constructor(selector: string, escape?: boolean){
    const elemento = document.querySelector(selector);
    if(elemento){
      this.element = document.querySelector(selector) as HTMLElement;
    }else{
      throw Error(`O Seletor ${selector} não existe no document!`);
    }
    if(escape){
      escape = escape; 
    }
  }

  protected abstract template(model: T): string;

  update(model: T): void{
    let template = this.template(model);
    if(this.escape){
      template = template.replace(/<script>[\s\S]*?<\/script>/, ''); //Remove as tag scripts contra ações maliciosas
    }
    this.element.innerHTML = template;
  }

}