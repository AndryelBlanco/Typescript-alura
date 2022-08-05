export function domInjector(selector) {
    return function (target, propertyKey) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log("%cModificando prototype", "background: orange; color: white;", target.constructor.name, '->', propertyKey);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=dom-injector.js.map