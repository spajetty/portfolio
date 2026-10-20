(function () {
  "use strict";

  var data = window.PORTFOLIO;
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  // Build elements safely (no innerHTML with data)
  function el(tag, props, children) {
    var node = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (key) {
      if (key === "class") node.className = props[key];
      else if (key === "text") node.textContent = props[key];
      else node.setAttribute(key, props[key]);
    });
    (children || []).forEach(function (child) { if (child) node.appendChild(child); });
    return node;
  }

  function isSafeUrl(url) {
    try {
      var u = new URL(url, window.location.href);
      return u.protocol === "https:" || u.protocol === "http:" || u.protocol === "mailto:";
    } catch (e) { return false; }
  }

  /* ---------- Education ---------- */
  var eduGrid = $("#eduGrid");
  data.education.forEach(function (item) {
    eduGrid.appendChild(el("article", { class: "edu-card reveal" }, [
      el("div", { class: "edu-top" }, [
        el("span", { class: "date-chip", text: item.date }),
        el("span", { class: "edu-level", text: item.level })
      ]),
      el("h3", { text: item.title }),
      item.school ? el("p", { class: "edu-school", text: item.school }) : null,
      item.honor ? el("span", { class: "edu-honor", text: item.honor }) : null
    ]));
  });

  /* ---------- Experience ---------- */
  var expList = $("#expList");
  data.experience.forEach(function (job) {
    var bullets = el("ul", { class: "exp-bullets" }, job.bullets.map(function (b) {
      return el("li", { text: b });
    }));
    var tags = el("div", { class: "tag-row" }, job.stack.map(function (t) {
      return el("span", { class: "tag", text: t });
    }));
    expList.appendChild(el("article", { class: "exp-row reveal" }, [
      el("div", { class: "exp-meta" }, [
        el("span", { class: "mono", text: job.date }),
        el("h3", { text: job.role }),
        el("p", { class: "exp-org", text: job.org })
      ]),
      el("div", {}, [bullets, tags])
    ]));
  });

  /* ---------- Tech stack strip ---------- */
  function fillMarquee(id, items) {
    var track = $(id);
    // Duplicate the list so translateX(-50%) loops seamlessly.
    // Repeat first so one half is always wider than the viewport.
    var half = items.concat(items, items);
    half.concat(half).forEach(function (name) {
      track.appendChild(el("span", { class: "stack-pill", text: name }));
    });
  }
  fillMarquee("#marqueeA", data.stack.rowA);
  fillMarquee("#marqueeB", data.stack.rowB);

  /* ---------- Projects ---------- */
  var grid = $("#projectGrid");

  data.projects.forEach(function (p, i) {
    var num = String(i + 1).padStart(2, "0");
    var card = el("button", {
      class: "project-card reveal",
      type: "button",
      "aria-haspopup": "dialog",
      "data-index": String(i)
    }, [
      el("div", { class: "card-top" }, [
        el("span", { class: "card-index", text: num }),
        p.nda ? el("span", { class: "chip", text: "NDA" }) : null
      ]),
      el("h3", { text: p.title }),
      el("p", { class: "card-cat", text: p.category }),
      el("p", { text: p.description }),
      el("div", { class: "card-tags" }, p.techStack.slice(0, 4).map(function (t) {
        return el("span", { class: "tag", text: t });
      })),
      el("div", { class: "card-foot" }, [
        el("span", { class: "card-cta" }, [
          document.createTextNode("View details "),
          el("span", { text: "→" })
        ])
      ])
    ]);
    card.addEventListener("click", function () { openModal(i, card); });
    grid.appendChild(card);
  });

  /* ---------- Modal ---------- */
  var modal = $("#projectModal");
  var lastFocus = null;

  function linkButton(label, href, solid) {
    return el("a", {
      class: "btn btn-sm " + (solid ? "btn-solid" : "btn-ghost"),
      href: href, target: "_blank", rel: "noopener noreferrer", text: label
    });
  }

  function openModal(index, trigger) {
    var p = data.projects[index];
    lastFocus = trigger || document.activeElement;

    function fillList(sel, items) {
      var ul = $(sel); ul.textContent = "";
      items.forEach(function (s) { ul.appendChild(el("li", { text: s })); });
    }

    $("#modalMeta").textContent = p.category;
    $("#modalTitle").textContent = p.title;
    $("#modalAbout").textContent = p.description;
    fillList("#modalLearned", p.learned);
    fillList("#modalFeatures", p.features);

    var stack = $("#modalStack"); stack.textContent = "";
    p.techStack.forEach(function (t) { stack.appendChild(el("span", { class: "tag", text: t })); });

    $("#modalNda").hidden = !p.nda;

    // Only render links that exist and are safe
    var links = $("#modalLinks"); links.textContent = "";
    if (p.repoUrl && isSafeUrl(p.repoUrl)) links.appendChild(linkButton("View repository ↗", p.repoUrl, true));
    if (p.websiteUrl && isSafeUrl(p.websiteUrl)) links.appendChild(linkButton("Visit website ↗", p.websiteUrl, false));
    links.hidden = links.children.length === 0;

    modal.hidden = false;
    document.body.classList.add("modal-open");
    $(".modal-body", modal).scrollTop = 0;
    $(".modal-close", modal).focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key === "Tab") { // simple focus trap
      var focusable = modal.querySelectorAll("a[href], button");
      if (!focusable.length) return;
      var first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Contact ---------- */
  var contactList = $("#contactList");
  var contactItems = [{ label: "Email", value: data.contact.email, href: "mailto:" + data.contact.email }]
    .concat(data.contact.links);
  contactItems.forEach(function (c) {
    if (!c.href || !isSafeUrl(c.href)) return;
    contactList.appendChild(el("li", {}, [
      el("a", { href: c.href, target: c.href.indexOf("mailto:") === 0 ? "_self" : "_blank", rel: "noopener noreferrer" }, [
        el("div", {}, [
          el("div", { class: "contact-label", text: c.label }),
          el("div", { class: "contact-value", text: c.value })
        ]),
        el("span", { class: "contact-arrow", text: "↗" })
      ])
    ]));
  });

  // No backend: the form opens the visitor's email client with the message filled in.
  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var form = e.target, note = $("#formNote");
    var name = form.name.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
    note.className = "form-note";
    if (!name || !email || !message || form.email.validity.typeMismatch) {
      note.className = "form-note error";
      note.textContent = "Please fill in every field with a valid email.";
      return;
    }
    var subject = encodeURIComponent("Portfolio message from " + name);
    var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:" + data.contact.email + "?subject=" + subject + "&body=" + body;
    note.textContent = "Opening your email app…";
    form.reset();
  });

  /* ---------- Nav ---------- */
  var navToggle = $("#navToggle"), navLinks = $("#navLinks");
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Highlight current section in nav
  var sections = ["education", "experience", "projects", "contact"].map(function (id) { return document.getElementById(id); });
  if ("IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.querySelectorAll("a").forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { if (s) navObserver.observe(s); });

    // Scroll reveal
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (n) { revealObserver.observe(n); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
  }

  $("#year").textContent = new Date().getFullYear();
})();