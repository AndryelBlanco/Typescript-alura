export function logarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = emSegundos ? 1000 : 1;
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de exec: ${(t2 - t1) / divisor}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-execucao.js.map