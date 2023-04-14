import { AttributeButton } from "../Button/Button";

export enum AttributeCard { 
    "animal" = "animal",
    "explicit" = "explicit",
    "political" = "political",
    "religion" = "religion"
}

export default class Card extends HTMLElement {
    animal: string = "";
    explicit: string = "";
    political: string = "";
    religion: string = "";

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
        propName: AttributeCard,
        _: unknown,
        newValue: string
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = '';
        
        const card = this.ownerDocument.createElement('button'); {
        }
    }
}