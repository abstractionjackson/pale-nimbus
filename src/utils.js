export function defineCustomElement(tag, initializer) {
  customElements.define(
    tag,
    class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        initializer.call(this);
      }
    }
  );
}
