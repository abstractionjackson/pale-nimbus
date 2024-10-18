import html from "./template.html?raw";
import css from "./style.scss?inline";
import data from "./data.json";

export default function BusinessCard() {
  render.call(this);
  this.update = update;

  for (const attribute of data["attributes"]) {
    const name = attribute["name"],
      value = this.shadowRoot.host.getAttribute(name),
      target = this.shadowRoot.getElementById(attribute["target"]);
    target.textContent = value || target.textContent;
  }
}

function render() {
  renderStyle.call(this);
  renderTemplate.call(this);
}
function renderStyle() {
  const styleNode = document.createElement("style");
  styleNode.textContent = css;
  this.shadowRoot.appendChild(styleNode);
}
function renderTemplate() {
  const markupNoe = document.createElement("div");
  markupNoe.innerHTML = html;
  this.shadowRoot.appendChild(markupNoe);
}
function update(values) {
  console.log(values);
  for (const key in values) {
    const target = this.shadowRoot.getElementById(key);
    target.textContent = values[key];
  }
}
