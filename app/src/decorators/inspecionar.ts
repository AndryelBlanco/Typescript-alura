export function inspecionar(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
){
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]){
    console.log(`METODO @@@ --> ${propertyKey}`);
    console.log(`PARAMETROS @@@ --> ${JSON.stringify(args)}`);
    const retorno = metodoOriginal.apply(this, args);
    console.log(`RETORNO @@@ --> ${JSON.stringify(retorno)}`);
    return retorno;
  }

  return descriptor;
}
