(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const o=`<div class="card">
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
`,c="p{all:unset}.card{font-family:Georgia,Times New Roman,Times,serif;text-transform:capitalize;font-variant:small-caps;text-shadow:-1px 1px 1px #fff;aspect-ratio:3.5/2;width:400px;background-color:#f2f2f2;display:flex;flex-direction:column;padding:20px}header{display:flex;justify-content:space-between}header hgroup:nth-child(2){display:flex;flex-direction:column;text-align:right}main{text-align:center;margin:auto}#name{font-size:1.4em}#last-name{text-transform:uppercase}#org,#org-title{font-size:1.2em}#org,#name{font-weight:700}#team{font-size:.8em}",l=[{name:"first-name",target:"first-name"},{name:"last-name",target:"last-name"},{name:"org-title",target:"org-title"},{name:"org",target:"org"},{team:"team",target:"team"},{name:"phone",target:"phone"},{street:"street",target:"street"},{city:"city",target:"city"},{state:"state",target:"state"},{zip:"zip",target:"zip"}],d={attributes:l};class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._render(),this._initializeTextContent()}_render(){this._renderStyle(),this._renderTemplate()}_renderStyle(){const t=document.createElement("style");t.textContent=c,this.shadowRoot.appendChild(t)}_renderTemplate(){const t=document.createElement("div");t.innerHTML=o,this.shadowRoot.appendChild(t)}update(t){for(const s in t){const a=this.shadowRoot.getElementById(s);a.textContent=t[s]}}_initializeTextContent(){for(const t of d.attributes){const s=t.name,a=this.shadowRoot.host.getAttribute(s),e=this.shadowRoot.getElementById(t.target);e.textContent=a||e.textContent}}}customElements.define("business-card",p);
