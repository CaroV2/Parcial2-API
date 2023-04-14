export enum AttributeButton {
    "animal" = "animal",
    "explicit" = "explicit",
    "political" = "political",
    "religion" = "religion"
}

export default class Button extends HTMLElement {
    animal?: string;
    explicit?: string;
    political?: string;
    religion?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeButton, null> = {
            animal: null,
            explicit: null,
            political: null,
            religion: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.animal}`
        button.innerText = `${this.explicit}`
        button.innerText = `${this.political}`
        button.innerText = `${this.religion}`
        button.addEventListener('click',() =>{
            button.innerText = "Get Animal Joke";
            button.innerText = "Get Explicit Joke";
            button.innerText = "Get Political Joke";
            button.innerText = "Get Religion Joke";
        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button',Button);