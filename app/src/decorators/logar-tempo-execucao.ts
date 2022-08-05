export function logarTempoExecucao(emSegundos: boolean = false){
  return function(
    target: any, // Função construtura da classe, num método estático
    propertyKey: string, // Nome do metodo
    descriptor: PropertyDescriptor //
  ){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>){
      let divisor = emSegundos ? 1000 : 1;


      const t1 = performance.now();

      //Aqui chamamos o método original novamente
      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de exec: ${(t2-t1)/divisor}`);
      retorno;
    }

    return descriptor; //aqui retornamos o metodo original com nossa alteração
  }
}