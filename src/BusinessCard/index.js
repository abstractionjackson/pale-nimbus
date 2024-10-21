import html from "./template.html?raw";
import css from "./style.scss?inline";
import data from "./data.json";

export default class BusinessCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._render();
    this._initializeTextContent();
  }
  _render() {
    this._renderStyle();
    this._renderTemplate();
  }
  _renderStyle() {
    const styleNode = document.createElement("style");
    styleNode.textContent = css;
    this.shadowRoot.appendChild(styleNode);
  }
  _renderTemplate() {
    const markup = document.createElement("div");
    markup.innerHTML = html;
    this.shadowRoot.appendChild(markup);
  }
  update(values) {
    for (const key in values) {
      const target = this.shadowRoot.getElementById(key);
      target.textContent = values[key];
    }
  }
  _initializeTextContent() {
    for (const attribute of data["attributes"]) {
      const name = attribute["name"],
        value = this.shadowRoot.host.getAttribute(name),
        target = this.shadowRoot.getElementById(attribute["target"]);
      target.textContent = value || target.textContent;
    }
  }
}
