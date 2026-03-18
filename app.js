// app.js — Morning Brief Ops Dashboard

(function () {
  "use strict";

  // Clock & greeting
  function updateHeader() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Good morning";
    if (hour >= 12 && hour < 17) greeting = "Good afternoon";
    else if (hour >= 17) greeting = "Good evening";

    document.getElementById("greeting").textContent = greeting + ", Ryan.";

    const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("datetime").textContent =
      now.toLocaleDateString("en-US", opts) + " — " + time;
  }

  // Priority Queue
  function renderPriorities() {
    const container = document.getElementById("priority-list");
    container.innerHTML = PRIORITIES.map(function (p) {
      return (
        '<div class="priority-item">' +
          '<span class="priority-pill pill-' + p.level + '">' + p.level + '</span>' +
          '<div class="priority-content">' +
            '<h3>' + esc(p.title) + '</h3>' +
            '<p>' + esc(p.detail) + '</p>' +
          '</div>' +
          '<span class="priority-org">' + esc(p.org) + '</span>' +
        '</div>'
      );
    }).join("");
  }

  // Entity columns
  function renderEntities() {
    const grid = document.getElementById("entity-grid");
    var keys = ["asa", "elevon", "starsense"];
    grid.innerHTML = keys.map(function (key) {
      var e = ENTITIES[key];
      var items = e.items.map(function (i) {
        return "<li>" + esc(i) + "</li>";
      }).join("");
      return (
        '<div class="entity-card ' + key + '">' +
          '<div class="entity-header">' +
            '<div class="entity-type">' + esc(e.type) + '</div>' +
            '<h2>' + esc(e.name) + '</h2>' +
            '<div class="entity-tagline">' + esc(e.tagline) + '</div>' +
          '</div>' +
          '<div class="entity-body">' +
            '<div class="entity-status">' + esc(e.status) + '</div>' +
            '<ul class="entity-items">' + items + '</ul>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  // Contacts table
  function renderContacts() {
    var tbody = document.getElementById("contacts-body");
    tbody.innerHTML = CONTACTS.map(function (c, i) {
      return (
        '<tr>' +
          '<td class="contact-name">' + esc(c.name) + '</td>' +
          '<td class="contact-org">' + esc(c.org) + '</td>' +
          '<td class="contact-context">' + esc(c.context) + '</td>' +
          '<td class="contact-date">' +
            '<input type="text" value="' + esc(c.lastContact) + '" ' +
              'placeholder="mm/dd" data-idx="' + i + '" />' +
          '</td>' +
        '</tr>'
      );
    }).join("");

    // Save edits to contact dates
    tbody.addEventListener("change", function (ev) {
      if (ev.target.dataset.idx !== undefined) {
        CONTACTS[parseInt(ev.target.dataset.idx)].lastContact = ev.target.value;
      }
    });
  }

  // Inbox Highlights
  function renderInbox() {
    var container = document.getElementById("inbox-list");
    if (!container || !window.INBOX_HIGHLIGHTS) return;
    var flagLabels = { urgent: "🔴 Urgent", action: "🟡 Action", review: "🔵 Review", info: "⚪ Info" };
    container.innerHTML = INBOX_HIGHLIGHTS.map(function (m) {
      return (
        '<div class="inbox-item inbox-' + m.flag + '">' +
          '<span class="inbox-flag">' + (flagLabels[m.flag] || m.flag) + '</span>' +
          '<div class="inbox-content">' +
            '<span class="inbox-from">' + esc(m.from) + '</span>' +
            '<span class="inbox-subject">' + esc(m.subject) + '</span>' +
            '<span class="inbox-note">' + esc(m.note) + '</span>' +
          '</div>' +
          '<span class="inbox-date">' + esc(m.date) + '</span>' +
        '</div>'
      );
    }).join("");
  }

  // Calendar
  function renderCalendar() {
    var container = document.getElementById("calendar-list");
    if (!container || !window.CALENDAR) return;
    container.innerHTML = CALENDAR.map(function (ev) {
      return (
        '<div class="cal-item">' +
          '<div class="cal-date">' + esc(ev.date) + '</div>' +
          '<div class="cal-event">' + esc(ev.event) + '</div>' +
          '<div class="cal-time">' + esc(ev.time) + '</div>' +
          '<div class="cal-org">' + esc(ev.org) + '</div>' +
        '</div>'
      );
    }).join("");
  }

  // Utility
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // Init
  function init() {
    updateHeader();
    setInterval(updateHeader, 60000);
    renderPriorities();
    renderEntities();
    renderContacts();
    renderInbox();
    renderCalendar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
