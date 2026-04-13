(function () {
  var LOGO_COLOR = "assets/images/ncar-ral-wide-color.png";
  var LOGO_WHITE = "assets/images/ncar-ral-wide-white.png";
  var LOGO_ALT = "NCAR RAL";

  var VALID_VARIANTS = ["default", "divider", "statement"];

  function makeLogo(cls, src) {
    var img = document.createElement("img");
    img.className = cls;
    img.src = src;
    img.alt = LOGO_ALT;
    return img;
  }

  class NcarTitleBar extends HTMLElement {
    connectedCallback() {
      if (this._rendered) return;
      this._rendered = true;

      var title = this.getAttribute("title") || "";
      var accent = this.getAttribute("accent") || "";
      var titleClass = this.getAttribute("title-class") || "";
      var titleStyle = this.getAttribute("title-style") || "";
      var titleDataId = this.getAttribute("title-data-id") || "";
      var variant = this.getAttribute("variant") || "default";
      if (VALID_VARIANTS.indexOf(variant) === -1) variant = "default";

      var bar = document.createElement("div");
      bar.className = "slide-title-bar slide-title-bar--" + variant;

      var h2 = document.createElement("h2");
      if (titleClass) h2.className = titleClass;
      if (titleStyle) h2.setAttribute("style", titleStyle);
      if (titleDataId) h2.setAttribute("data-id", titleDataId);
      h2.appendChild(document.createTextNode(title));
      if (accent) {
        h2.appendChild(document.createTextNode(" "));
        var accentSpan = document.createElement("span");
        accentSpan.className = "accent";
        accentSpan.textContent = accent;
        h2.appendChild(accentSpan);
      }
      bar.appendChild(h2);
      bar.appendChild(makeLogo("logo-color", LOGO_COLOR));
      bar.appendChild(makeLogo("logo-white", LOGO_WHITE));

      this.appendChild(bar);
    }
  }

  if (!customElements.get("ncar-title-bar")) {
    customElements.define("ncar-title-bar", NcarTitleBar);
  }
})();
