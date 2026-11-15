(function () {
  'use strict';
  try {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('nav');
    function setMenu(open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    if (toggle && nav) {
      toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
      nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    }

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    var form = document.getElementById('contact-form');
    var status = document.getElementById('form-status');
    var EMAIL = 'clintech25digital@gmail.com'; // replace with your real address
    if (form) {
      var rules = {
        name: function (v) { return v.trim().length >= 2 ? '' : 'Enter your full name.'; },
        email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address.'; },
        message: function (v) { return v.trim().length >= 10 ? '' : 'Write at least 10 characters.'; }
      };
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = true;
        Object.keys(rules).forEach(function (k) {
          var field = form.elements[k];
          var msg = rules[k](field.value);
          form.querySelector('.err[data-for="' + k + '"]').textContent = msg;
          field.setAttribute('aria-invalid', msg ? 'true' : 'false');
          if (msg && ok) { field.focus(); }
          if (msg) ok = false;
        });
        if (!ok) { status.textContent = ''; return; }
        var body = 'Name: ' + form.name.value + '\nEmail: ' + form.email.value +
                   '\nService: ' + form.service.value + '\n\n' + form.message.value;
        window.location.href = 'mailto:' + EMAIL + '?subject=' +
          encodeURIComponent('ClinTech enquiry: ' + form.service.value) +
          '&body=' + encodeURIComponent(body);
        status.textContent = 'Your email app is opening with your enquiry. Press send there to finish.';
        form.reset();
      });
    }
  } catch (err) {
    console.error('ClinTech script error:', err);
  }
})();
