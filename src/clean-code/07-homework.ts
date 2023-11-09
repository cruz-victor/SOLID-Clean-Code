(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id  : string,
            public type: HtmlType,
        ) {}
    }


    class InputAttributes{
        constructor(
            public value      : string,
            public placeholder: string
        ) {            
        }
    }


    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }
    

    class InputElement {
      public htmlElement      : HtmlElement;
      public elementAttributes: InputAttributes;
      public elementEvents    : InputEvents;

      constructor(id: string, value: string, placeholder: string) {
        this.htmlElement       = new HtmlElement(id, 'input');
        this.elementAttributes = new InputAttributes(value, placeholder);
        this.elementEvents     = new InputEvents();
      }
    }

    const nameField = new InputElement('Victor', 'Enter first name', 'txtName');

    console.log({ nameField });


    
})()





