class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML =`
        <section>
            <h1>
                <slot name="title"></slot>
            </h1>
            <p>
                <slot name="parrafo"></slot>
            </p>
            <slot></slot>
        </section>
        
        ${this.getStyles()}
        `;

        return template;
    }
    getStyles() {
        return `
        <style>
        :host {
            display: inline-block;
            width: 100%;
            min-width: 300px;
            max-width: 450px;
            margin: 10px;
        }

        :host(.blue) {
            color: blue;
            background: gray;
        }

        :host([yellow]) {
            color: yellow;
            background: black;
        }

        :host([yellow]) h1 {
            color: white;
            background: gray;
        }

        :host-context(article.card) {
            display: block;
            max-width: 100%;
        }
        </style>`;

    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("my-element", myElement);