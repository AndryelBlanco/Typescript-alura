//Classes abstratas nao permitem criacao de instancias new this()
//Metodo obrigado a implementar, se nao ela pode retornar erro

//Foi trocado para interface, assim melhorando nosso codigo
//Tem o mesmo papel de uma classe abstrata

export interface Imprimivel{
  paraTexto(): any;
}