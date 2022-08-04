export class View {
    constructor(selector, escape) {
        this.escape = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.element = document.querySelector(selector);
        }
        else {
            throw Error(`O Seletor ${selector} não existe no document!`);
        }
        if (escape) {
            escape = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
