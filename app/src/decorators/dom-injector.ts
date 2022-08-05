//O decorator é aplicado quando a classe é definida
//Na hora que ele aplica o decorator na classe
//Criamos um getter que busca o elemento no dom com base no seletor e retorna 
//Vamos pegar esse prototype e definimos um getter para ele, dessa forma todas as propriedades que forem passas, agora são getters

export function domInjector(selector: string){
  return function(target: any, propertyKey: string){

    let elemento: HTMLElement | null = null;
    const getter = function(){
      if(!elemento){
        elemento = <HTMLElement>document.querySelector(selector);
        console.log("%cModificando prototype", "background: orange; color: white;",target.constructor.name, '->', propertyKey);
      }
      return elemento;
    }

    //Modifica esse prototype com essa propriedade
    Object.defineProperty(target, propertyKey, {
      get: getter
    });
  }
}