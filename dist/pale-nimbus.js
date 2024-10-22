const s = `<div class="card">
  <header>
    <hgroup>
      <p id="phone" class="tel">555-555-5555</p>
    </hgroup>
    <hgroup>
      <p id="org">Acme, Inc.</p>
      <p id="team" class="team">Logistics</p>
    </hgroup>
  </header>
  <main>
    <section class="name">
      <p id="name">
        <span id="first-name">John</span><span id="last-name">Doe</span>
      </p>
    </section>
    <section class="title">
      <p id="org-title" class="title">Senior Vice President</p>
    </section>
  </main>
  <footer>
    <section>
      <p class="address">
        <span id="street" class="street-name">123 Main st.</span>,
        <span id="city" class="city">San Francisco</span>,
        <span id="state" class="state">CA</span><span> </span
        ><span id="zip" class="zip">94123</span>
      </p>
    </section>
  </footer>
</div>
`, i = "p{all:unset}.card{font-family:Georgia,Times New Roman,Times,serif;text-transform:capitalize;font-variant:small-caps;text-shadow:-1px 1px 1px #fff;aspect-ratio:3.5/2;width:400px;background-color:#f2f2f2;display:flex;flex-direction:column;padding:20px}header{display:flex;justify-content:space-between}header hgroup:nth-child(2){display:flex;flex-direction:column;text-align:right}main{text-align:center;margin:auto}#name{font-size:1.4em}#last-name{text-transform:uppercase}#org,#org-title{font-size:1.2em}#org,#name{font-weight:700}#team{font-size:.8em}", o = [
  {
    name: "first-name",
    target: "first-name"
  },
  {
    name: "last-name",
    target: "last-name"
  },
  {
    name: "org-title",
    target: "org-title"
  },
  {
    name: "org",
    target: "org"
  },
  {
    team: "team",
    target: "team"
  },
  {
    name: "phone",
    target: "phone"
  },
  {
    street: "street",
    target: "street"
  },
  {
    city: "city",
    target: "city"
  },
  {
    state: "state",
    target: "state"
  },
  {
    zip: "zip",
    target: "zip"
  }
], r = {
  attributes: o
};
class c extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._render(), this._initializeTextContent();
  }
  _render() {
    this._renderStyle(), this._renderTemplate();
  }
  _renderStyle() {
    const t = document.createElement("style");
    t.textContent = i, this.shadowRoot.appendChild(t);
  }
  _renderTemplate() {
    const t = document.createElement("div");
    t.innerHTML = s, this.shadowRoot.appendChild(t);
  }
  update(t) {
    for (const e in t) {
      const n = this.shadowRoot.getElementById(e);
      n.textContent = t[e];
    }
  }
  _initializeTextContent() {
    for (const t of r.attributes) {
      const e = t.name, n = this.shadowRoot.host.getAttribute(e), a = this.shadowRoot.getElementById(t.target);
      a.textContent = n || a.textContent;
    }
  }
}
export {
  c as default
};
