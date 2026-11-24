/* Baum Design — page behaviour. Content lives in js/content.js. */
(function () {
  "use strict";
  var SITE = window.SITE || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  function esc(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Icons (services) --------------------------------------- */
  var ICONS = {
    web:
      '<rect x="4" y="7" width="32" height="24" rx="1.5"/><path d="M4 13h32"/><circle cx="8" cy="10" r=".6" fill="currentColor"/><circle cx="11" cy="10" r=".6" fill="currentColor"/><path d="M15 36h10M20 31v5"/>',
    redesign:
      '<path d="M8 20a12 12 0 0 1 21-8"/><path d="M30 6v6.5h-6.5"/><path d="M32 20a12 12 0 0 1-21 8"/><path d="M10 34v-6.5h6.5"/>',
    brand:
      '<circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="8.5"/><circle cx="20" cy="20" r="3"/>',
    graphic:
      '<path d="M6 34 20 6l14 28z"/><path d="M13 20h14"/><circle cx="20" cy="27" r="2.5"/>',
  };

  /* ---------- Placeholder artwork (projects) ------------------------- */
  // Simple abstract compositions in the brand palette, used until real
  // project images are added in content.js.
  var ART = {
    a: // a browser window / site layout
      '<rect x="60" y="50" width="280" height="200" rx="3" fill="#F0EEE7"/><rect x="60" y="50" width="280" height="22" rx="3" fill="#202421" opacity=".9"/><rect x="82" y="96" width="120" height="14" fill="#202421"/><rect x="82" y="118" width="90" height="8" fill="#85877F"/><rect x="82" y="142" width="54" height="16" fill="#A5B39A"/><rect x="222" y="92" width="96" height="134" fill="#A5B39A" opacity=".55"/><rect x="82" y="178" width="120" height="4" fill="#85877F" opacity=".5"/><rect x="82" y="190" width="100" height="4" fill="#85877F" opacity=".5"/>',
    b: // brand mark + swatches
      '<circle cx="150" cy="150" r="62" fill="none" stroke="#F0EEE7" stroke-width="10"/><circle cx="150" cy="150" r="30" fill="#F0EEE7"/><rect x="250" y="88" width="62" height="34" fill="#F0EEE7"/><rect x="250" y="133" width="62" height="34" fill="#A5B39A"/><rect x="250" y="178" width="62" height="34" fill="#85877F"/>',
    c: // before / after layout
      '<rect x="48" y="70" width="140" height="160" fill="#85877F" opacity=".35"/><rect x="60" y="84" width="116" height="10" fill="#85877F" opacity=".6"/><rect x="60" y="102" width="116" height="40" fill="#85877F" opacity=".45"/><rect x="60" y="150" width="54" height="60" fill="#85877F" opacity=".45"/><rect x="122" y="150" width="54" height="60" fill="#85877F" opacity=".45"/><path d="M196 150h12m-5-5 5 5-5 5" stroke="#202421" stroke-width="2" fill="none"/><rect x="214" y="70" width="140" height="160" fill="#F0EEE7"/><rect x="228" y="90" width="70" height="10" fill="#202421"/><rect x="228" y="108" width="50" height="5" fill="#85877F"/><rect x="228" y="124" width="112" height="60" fill="#A5B39A"/><rect x="228" y="194" width="34" height="10" fill="#202421"/>',
  };
  var ART_BG = { a: "#A5B39A", b: "#202421", c: "#DCDBD2" };

  /* ---------- Render: projects --------------------------------------- */
  var projectGrid = $("[data-projects]");
  if (projectGrid && SITE.projects) {
    // 2, 4, 8… projects sit better in two columns; 3, 6, 9… in three
    var count = SITE.projects.length;
    projectGrid.classList.toggle("is-two-col", count % 2 === 0 && count % 3 !== 0);
    projectGrid.innerHTML = SITE.projects.map(function (p) {
      var key = ART[p.art] ? p.art : "a";
      var media = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(p.alt) + '" loading="lazy" />'
        : '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="background:' + ART_BG[key] + '">' + ART[key] + "</svg>";
      var tag = p.placeholder ? '<span class="tag">Placeholder</span>' : "";
      var title = p.url
        ? '<a href="' + esc(p.url) + '" class="card-link"' +
            (/^https?:/.test(p.url) ? ' target="_blank" rel="noopener"' : "") + ">" +
            esc(p.name) + ' <span class="card-arrow" aria-hidden="true">↗</span>' +
            (/^https?:/.test(p.url) ? '<span class="visually-hidden"> (opens in a new tab)</span>' : "") +
          "</a>"
        : esc(p.name);
      return (
        '<article class="project-card">' +
          '<div class="project-media">' + media + tag + "</div>" +
          '<div class="project-body">' +
            '<p class="project-cat">' + esc(p.category) + "</p>" +
            '<h3 class="project-name">' + title + "</h3>" +
            '<p class="project-desc">' + esc(p.description) + "</p>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- Render: services --------------------------------------- */
  var serviceGrid = $("[data-services]");
  if (serviceGrid && SITE.services) {
    serviceGrid.innerHTML = SITE.services.map(function (s, i) {
      return (
        '<article class="service-card">' +
          '<div class="service-top">' +
            '<svg class="service-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[s.icon] || ICONS.web) + "</svg>" +
            '<span class="service-num">' + String(i + 1).padStart(2, "0") + "</span>" +
          "</div>" +
          '<h3 class="service-title">' + esc(s.title) + "</h3>" +
          '<p class="service-text">' + esc(s.text) + "</p>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- Render: socials, email, enquiry types, year ------------ */
  var socials = $("[data-socials]");
  if (socials && SITE.socials) {
    socials.innerHTML = SITE.socials.filter(function (s) { return s.url; }).map(function (s) {
      return '<li><a href="' + esc(s.url) + '" rel="noopener" target="_blank">' + esc(s.label) + "</a></li>";
    }).join("");
  }
  document.querySelectorAll("[data-email-link]").forEach(function (a) {
    if (!SITE.email) return a.closest("li, div").remove();
    a.href = "mailto:" + SITE.email;
    a.textContent = SITE.email;
  });
  document.querySelectorAll("[data-phone-link]").forEach(function (a) {
    if (!SITE.phone) return a.closest("li, div").remove();
    a.href = "tel:" + (SITE.phoneLink || SITE.phone.replace(/[^\d+]/g, ""));
    a.textContent = SITE.phone;
  });

  var select = $("[data-enquiry-types]");
  if (select && SITE.enquiryTypes) {
    SITE.enquiryTypes.forEach(function (t) {
      // Accepts plain strings or { group, options } objects
      var parent = select;
      var opts = [t];
      if (typeof t === "object") {
        parent = document.createElement("optgroup");
        parent.label = t.group;
        select.appendChild(parent);
        opts = t.options;
      }
      opts.forEach(function (label) {
        var o = document.createElement("option");
        o.value = o.textContent = label;
        parent.appendChild(o);
      });
    });
  }

  /* ---------- Render: process ---------------------------------------- */
  var processList = $("[data-process]");
  if (processList && SITE.process) {
    processList.innerHTML = SITE.process.map(function (step, i) {
      return (
        '<li class="process-step">' +
          '<span class="process-num" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<h3 class="process-title">' + esc(step.title) + "</h3>" +
          '<p class="process-text">' + esc(step.text) + "</p>" +
        "</li>"
      );
    }).join("");
  }

  /* ---------- Render: pricing ---------------------------------------- */
  var P = SITE.pricing || {};
  var check = '<svg class="check" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var packageGrid = $("[data-packages]");
  if (packageGrid && P.packages) {
    packageGrid.innerHTML = P.packages.map(function (p) {
      return (
        '<article class="package' + (p.featured ? " is-featured" : "") + '">' +
          '<p class="package-label">' + esc(p.label) + "</p>" +
          '<h3 class="package-name">' + esc(p.name) + "</h3>" +
          '<p class="package-price">' +
            (p.pricePrefix ? '<span class="price-prefix">' + esc(p.pricePrefix) + " </span>" : "") +
            esc(p.price) +
          "</p>" +
          '<p class="package-blurb">' + esc(p.blurb) + "</p>" +
          '<ul class="package-features">' +
            p.features.map(function (f) { return "<li>" + check + "<span>" + esc(f) + "</span></li>"; }).join("") +
          "</ul>" +
          '<div class="package-foot">' +
            (p.worth ? '<p class="package-worth">' + esc(p.worth) + "</p>" : "") +
            '<a class="btn ' + (p.featured ? "btn-light" : "btn-primary") + '" href="#contact" data-choose="' + esc(p.name) + '">Choose package<span class="visually-hidden">: ' + esc(p.name) + '</span></a>' +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  var miniGrid = $("[data-small-packages]");
  if (miniGrid && P.smallPackages) {
    miniGrid.innerHTML = P.smallPackages.map(function (p) {
      return (
        '<article class="mini">' +
          '<div class="mini-head"><h4 class="mini-name">' + esc(p.name) + '</h4><p class="mini-price">' + esc(p.price) + "</p></div>" +
          '<ul class="mini-features">' + p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
        "</article>"
      );
    }).join("");
  }

  var tabsEl = $("[data-price-tabs]");
  if (tabsEl && P.priceList) {
    var tabList =
      '<div class="tab-list" role="tablist" aria-label="Service categories">' +
      P.priceList.map(function (cat, i) {
        return '<button class="tab" type="button" role="tab" id="tab-' + i + '" aria-controls="panel-' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(cat.tab) + "</button>";
      }).join("") +
      "</div>";
    var panels = P.priceList.map(function (cat, i) {
      return (
        '<div class="tab-panel" role="tabpanel" id="panel-' + i + '" aria-labelledby="tab-' + i + '"' + (i === 0 ? "" : " hidden") + ">" +
          '<ul class="price-list">' +
            cat.items.map(function (it) {
              return (
                '<li class="price-row">' +
                  '<div class="price-name">' + esc(it[0]) + (it[2] ? '<span class="price-note">' + esc(it[2]) + "</span>" : "") + "</div>" +
                  '<div class="price-value">' + esc(it[1]) + "</div>" +
                "</li>"
              );
            }).join("") +
          "</ul>" +
          (cat.note ? '<p class="price-list-note">' + esc(cat.note) + "</p>" : "") +
        "</div>"
      );
    }).join("");
    tabsEl.innerHTML = tabList + panels;

    var tabs = tabsEl.querySelectorAll(".tab");
    var selectTab = function (idx, focus) {
      tabs.forEach(function (t, i) {
        var on = i === idx;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        $("#panel-" + i).hidden = !on;
      });
      if (focus) tabs[idx].focus();
    };
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { selectTab(i); });
      t.addEventListener("keydown", function (e) {
        var n = tabs.length;
        if (e.key === "ArrowRight") { e.preventDefault(); selectTab((i + 1) % n, true); }
        if (e.key === "ArrowLeft") { e.preventDefault(); selectTab((i - 1 + n) % n, true); }
        if (e.key === "Home") { e.preventDefault(); selectTab(0, true); }
        if (e.key === "End") { e.preventDefault(); selectTab(n - 1, true); }
      });
    });
  }

  var footnote = $("[data-pricing-footnote]");
  if (footnote && P.footnote) footnote.textContent = P.footnote;

  // "Choose …" buttons pre-select that package in the contact form
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-choose]");
    if (!btn || !select) return;
    var name = btn.getAttribute("data-choose");
    var match = Array.prototype.find.call(select.options, function (o) { return o.value === name; });
    if (match) {
      select.value = name;
      select.closest(".field").classList.remove("is-invalid");
    }
  });
  var year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header: border on scroll ------------------------------- */
  var header = $("[data-header]");
  var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation -------------------------------------- */
  var toggle = $("[data-nav-toggle]");
  var nav = $("[data-nav]");
  function setNav(open) {
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  }
  toggle.addEventListener("click", function () {
    setNav(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
  window.matchMedia("(min-width: 821px)").addEventListener("change", function (m) { if (m.matches) setNav(false); });

  /* ---------- Gentle reveal on scroll -------------------------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".section-head, .project-card, .service-card, .process-step, .package, .about-photo, .about-copy, .contact-intro, .contact-form");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (el.matches(".project-card, .service-card, .process-step, .package") ? (i % 4) * 70 : 0) + "ms";
      io.observe(el);
    });
  }

  /* ---------- Contact form ------------------------------------------- */
  var form = $("[data-contact-form]");
  var status = $("[data-form-status]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";

      // Validate
      var firstInvalid = null;
      form.querySelectorAll("[required]").forEach(function (el) {
        var ok = el.checkValidity();
        el.closest(".field").classList.toggle("is-invalid", !ok);
        el.setAttribute("aria-invalid", String(!ok));
        if (!ok && !firstInvalid) firstInvalid = el;
      });
      if (firstInvalid) {
        status.textContent = "Please fill in the highlighted fields.";
        status.classList.add("is-error");
        firstInvalid.focus();
        return;
      }
      if (form._gotcha && form._gotcha.value) return; // bot

      if (!SITE.formEndpoint) {
        status.innerHTML = "The form isn’t connected yet — please email <a href=\"mailto:" + esc(SITE.email) + "\">" + esc(SITE.email) + "</a>" +
          (SITE.phone ? " or call/text " + esc(SITE.phone) : "") + " for now.";
        status.classList.add("is-error");
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.textContent = "Sending…";

      fetch(SITE.formEndpoint, {
        method: "POST",
        body: (function () {
          var fd = new FormData(form);
          // Email subject, e.g. "New enquiry: Business Bundle — Jane Smith"
          fd.append("_subject", "New enquiry: " + (fd.get("looking_for") || "Website") + " — " + fd.get("name"));
          fd.append("_replyto", fd.get("email") || "");
          return fd;
        })(),
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          form.reset();
          form.querySelectorAll(".is-invalid").forEach(function (f) { f.classList.remove("is-invalid"); });
          status.textContent = "Thanks — your message is on its way. I’ll be in touch soon.";
          status.classList.add("is-success");
        })
        .catch(function () {
          status.innerHTML = "Something went wrong sending that. Please try again or email <a href=\"mailto:" + esc(SITE.email) + "\">" + esc(SITE.email) + "</a>.";
          status.classList.add("is-error");
        })
        .finally(function () { btn.disabled = false; });
    });

    form.addEventListener("input", function (e) {
      var field = e.target.closest(".field");
      if (field && field.classList.contains("is-invalid") && e.target.checkValidity()) {
        field.classList.remove("is-invalid");
        e.target.removeAttribute("aria-invalid");
      }
    });
  }
})();
