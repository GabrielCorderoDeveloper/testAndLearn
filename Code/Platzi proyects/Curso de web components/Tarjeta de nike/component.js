class myCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML =`
        <section class="card">
            <div class="upper-bakground">
                <h1> <slot name="title"></slot> </h1>
                <img src="" alt="">
            </div>

            <div class="bottom-background">
                <h2> <slot name="second-title"></slot> </h2>
                <div> <slot name="collection"></slot> </div>

                <p> <slot name="collection"></slot> </p>
                <div class="price"> <slot name="price"></slot> </div>
            </div>
        </section>
        
        ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        return `
        <style>

        </style>`;

    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("product-card", myCard);