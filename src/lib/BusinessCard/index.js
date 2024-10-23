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
      if (this._isValid(key, values[key])) {
        console.info(`Setting ${key} to ${values[key]}`);
        this.shadowRoot.getElementById(key).textContent = this._format(
          key,
          values[key]
        );
      } else {
        console.error(`Invalid value for ${key}: ${values[key]}`);
      }
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
  _isValid(key, value) {
    switch (key) {
      case "phone":
        return /^\d{10}$/.test(value);
      case "first-name":
      case "last-name":
      case "org":
      case "org-title":
      case "team":
      case "city":
      case "state":
      case "zip":
        return value.length >= 1;
      default:
        break;
    }
  }
  _format(key, value) {
    switch (key) {
      case "phone":
        return value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      case "first-name":
      case "last-name":
      case "org":
      case "org-title":
      case "team":
      case "city":
      case "state":
      case "zip":
        return value;
      default:
        break;
    }
  }
}
