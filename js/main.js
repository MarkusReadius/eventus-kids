/* ==========================================================================
   Eventus Kids — Main JavaScript (v2)
   Language toggle, scroll animations, mobile menu, form
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Translations ---------- */

  var translations = {
    ru: {
      'skip': 'Перейти к содержимому',

      'nav.programs': 'Направления',
      'nav.about': 'О нас',
      'nav.reviews': 'Отзывы',
      'nav.schedule': 'Расписание',
      'nav.register': 'Записаться',

      'hero.title': 'Креативный детский клуб в Нетании',
      'hero.subtitle': 'Развиваем речь, уверенность и эмоциональный интеллект через театр, музыку и творчество',
      'hero.cta': 'Записаться на пробное занятие',
      'hero.whatsapp': 'Написать в WhatsApp',

      'strip.day': 'Суббота',
      'strip.location': 'Нетания',
      'strip.groups': 'Маленькие группы',
      'strip.ages': 'Возраст 4–12',

      'programs.title': 'Три направления — один процесс',
      'programs.subtitle': 'Мы соединяем театр, музыку и арт в единый процесс, чтобы ребёнок развивался целиком',
      'programs.cta': 'Попробовать бесплатно',
      'program.theater.title': 'Театр',
      'program.theater.desc': 'Раскрепощение, общение, работа с речью, вниманием и эмоциями',
      'program.music.title': 'Музыка',
      'program.music.desc': 'Голос, слух, ноты — и мини-представления, где ребёнок проживает музыку',
      'program.art.title': 'Декоративное искусство',
      'program.art.desc': 'Ребёнок выражает себя, рассказывает свою историю через прикладное творчество',

      'outcomes.title': 'Что получает ребёнок',
      'outcomes.item1': 'Начинает свободнее говорить',
      'outcomes.item2': 'Учится формулировать мысли',
      'outcomes.item3': 'Перестаёт бояться проявляться',
      'outcomes.item4': 'Лучше понимает свои эмоции',
      'outcomes.item5': 'Учится слышать других',
      'outcomes.item6': 'Появляется ощущение: «я могу»',

      'about.title': 'Тёплое пространство, где ребёнок раскрывается',
      'about.p1': 'Eventus Kids — это не кружок и не школа. Это среда, где ребёнку спокойно, понятно и интересно.',
      'about.p2': 'Каждое занятие — продуманная структура. Нет потока и случайных активностей. Маленькие группы, внимание к каждому.',
      'about.p3': 'Мы помогаем раскрыть сильные стороны ребёнка через три вида творчества, объединённых в один процесс.',
      'about.cta': 'Записаться',

      'reviews.title': 'Что говорят родители',
      'review.1': 'Самое ценное — что ребёнок стал спокойнее и начал по-другому взаимодействовать с другими детьми. Мы заметили это уже через несколько занятий. И главное — он хочет сюда возвращаться.',
      'review.2': 'Мне важно, что здесь не просто занятия. Примерно через месяц я увидела, что ребёнок стал более открытым.',
      'review.3': 'Я просто вижу, что ребёнку здесь хорошо. Он с радостью ждёт каждую субботу — и это для меня главный показатель.',

      'teachers.title': 'Наши педагоги',
      'teacher.1.name': 'TBD',
      'teacher.1.role': 'TBD',
      'teacher.2.name': 'TBD',
      'teacher.2.role': 'TBD',
      'teacher.3.name': 'TBD',
      'teacher.3.role': 'TBD',

      'schedule.title': 'Расписание и адрес',
      'schedule.slot1Label': 'Утренняя группа',
      'schedule.slot1': '10:00–13:00',
      'schedule.slot2Label': 'Дневная группа',
      'schedule.slot2': '13:00–16:00',
      'schedule.dayLabel': 'День:',
      'schedule.day': 'Суббота',
      'schedule.addressLabel': 'Адрес:',
      'schedule.address': 'Нетания, Смилянски, 10',
      'schedule.note': 'Мы работаем в субботу — в день, когда у большинства родителей нет удобных детских занятий.',
      'schedule.cta': 'Записаться',

      'register.title': 'Записаться',
      'register.subtitle': 'Оставьте заявку — мы свяжемся и подберём группу',

      'form.parentName': 'Имя родителя',
      'form.parentNamePh': 'Ваше имя',
      'form.parentNameError': 'Пожалуйста, введите ваше имя',
      'form.phone': 'Телефон',
      'form.phonePh': '+972...',
      'form.phoneError': 'Пожалуйста, введите номер телефона',
      'form.childName': 'Имя ребёнка',
      'form.childNamePh': 'Имя ребёнка',
      'form.childNameError': 'Пожалуйста, введите имя ребёнка',
      'form.childAge': 'Возраст ребёнка',
      'form.childAgePh': 'Возраст',
      'form.childAgeError': 'Пожалуйста, укажите возраст (3–16)',
      'form.timeSlot': 'Предпочтительное время',
      'form.slot1': '10:00–13:00',
      'form.slot2': '13:00–16:00',
      'form.timeSlotError': 'Пожалуйста, выберите время',
      'form.submit': 'Отправить заявку',
      'form.sending': 'Отправка...',
      'form.successTitle': 'Спасибо!',
      'form.successText': 'Мы свяжемся с вами в ближайшее время.',
      'form.errorText': 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.',

      'footer.tagline': 'Креативный детский клуб в Нетании',
      'footer.rights': 'Все права защищены.',

      'page.title': 'Eventus Kids — Креативный детский клуб в Нетании',
      'page.description': 'Eventus Kids — креативный детский клуб в Нетании. Развиваем речь, эмоциональный интеллект и уверенность через театр, музыку и творчество.'
    },

    en: {
      'skip': 'Skip to content',

      'nav.programs': 'Programs',
      'nav.about': 'About',
      'nav.reviews': 'Reviews',
      'nav.schedule': 'Schedule',
      'nav.register': 'Sign Up',

      'hero.title': 'Creative Children\'s Club in Netanya',
      'hero.subtitle': 'We develop speech, confidence, and emotional intelligence through theater, music, and creativity',
      'hero.cta': 'Book a free trial session',
      'hero.whatsapp': 'Message on WhatsApp',

      'strip.day': 'Saturday',
      'strip.location': 'Netanya',
      'strip.groups': 'Small groups',
      'strip.ages': 'Ages 4–12',

      'programs.title': 'Three disciplines — one process',
      'programs.subtitle': 'We combine theater, music, and art into a single process so your child develops as a whole',
      'programs.cta': 'Try for free',
      'program.theater.title': 'Theater',
      'program.theater.desc': 'Confidence, communication, working with speech, attention, and emotions',
      'program.music.title': 'Music',
      'program.music.desc': 'Voice, ear training, notation — and mini-performances where your child lives the music',
      'program.art.title': 'Decorative Arts',
      'program.art.desc': 'Your child expresses themselves and tells their story through applied creativity',

      'outcomes.title': 'What Your Child Gains',
      'outcomes.item1': 'Begins to speak more freely',
      'outcomes.item2': 'Learns to articulate thoughts',
      'outcomes.item3': 'Stops being afraid to express themselves',
      'outcomes.item4': 'Better understands their emotions',
      'outcomes.item5': 'Learns to listen to others',
      'outcomes.item6': 'A feeling emerges: \'I can do this\'',

      'about.title': 'A warm space where children open up',
      'about.p1': 'Eventus Kids is not a class or a school. It\'s an environment where a child feels calm, understood, and engaged.',
      'about.p2': 'Every session has a thoughtful structure. No assembly-line or random activities. Small groups, attention to each child.',
      'about.p3': 'We help children discover their strengths through three creative disciplines combined into one process.',
      'about.cta': 'Sign Up',

      'reviews.title': 'What Parents Say',
      'review.1': 'The most valuable thing is that our child became calmer and started interacting differently with other kids. We noticed it after just a few sessions. And most importantly, he wants to keep coming back.',
      'review.2': 'What matters to me is that these aren\'t just classes. After about a month, I saw that my child became more open.',
      'review.3': 'I simply see that my child feels good here. He looks forward to every Saturday with excitement, and that\'s the main indicator for me.',

      'teachers.title': 'Our Teachers',
      'teacher.1.name': 'TBD',
      'teacher.1.role': 'TBD',
      'teacher.2.name': 'TBD',
      'teacher.2.role': 'TBD',
      'teacher.3.name': 'TBD',
      'teacher.3.role': 'TBD',

      'schedule.title': 'Schedule & Location',
      'schedule.slot1Label': 'Morning group',
      'schedule.slot1': '10:00 AM \u2013 1:00 PM',
      'schedule.slot2Label': 'Afternoon group',
      'schedule.slot2': '1:00 PM \u2013 4:00 PM',
      'schedule.dayLabel': 'Day:',
      'schedule.day': 'Saturday',
      'schedule.addressLabel': 'Address:',
      'schedule.address': 'Netanya, Smilanski 10',
      'schedule.note': 'We operate on Saturdays — the day when most parents don\'t have convenient children\'s activities available.',
      'schedule.cta': 'Sign Up',

      'register.title': 'Sign Up',
      'register.subtitle': 'Leave a request and we\'ll contact you to find the right group',

      'form.parentName': 'Parent name',
      'form.parentNamePh': 'Your name',
      'form.parentNameError': 'Please enter your name',
      'form.phone': 'Phone',
      'form.phonePh': '+972...',
      'form.phoneError': 'Please enter a phone number',
      'form.childName': 'Child\'s name',
      'form.childNamePh': 'Child\'s name',
      'form.childNameError': 'Please enter child\'s name',
      'form.childAge': 'Child\'s age',
      'form.childAgePh': 'Age',
      'form.childAgeError': 'Please enter age (3\u201316)',
      'form.timeSlot': 'Preferred time',
      'form.slot1': '10:00 AM \u2013 1:00 PM',
      'form.slot2': '1:00 PM \u2013 4:00 PM',
      'form.timeSlotError': 'Please select a time slot',
      'form.submit': 'Submit request',
      'form.sending': 'Sending...',
      'form.successTitle': 'Thank you!',
      'form.successText': 'We\'ll contact you shortly.',
      'form.errorText': 'An error occurred. Please try again.',

      'footer.tagline': 'Creative children\'s club in Netanya',
      'footer.rights': 'All rights reserved.',

      'page.title': 'Eventus Kids \u2014 Creative Children\'s Club in Netanya',
      'page.description': 'Eventus Kids \u2014 creative children\'s club in Netanya. We develop speech, emotional intelligence, and confidence through theater, music, and creativity.'
    }
  };

  /* ---------- State ---------- */
  var currentLang = localStorage.getItem('eventus-lang') || 'ru';

  /* ---------- DOM ---------- */
  var htmlEl = document.documentElement;
  var header = document.getElementById('site-header');
  var navLinks = document.getElementById('nav-links');
  var navBurger = document.getElementById('nav-burger');
  var langToggle = document.getElementById('lang-toggle');
  var registrationForm = document.getElementById('registration-form');
  var formStatus = document.getElementById('form-status');
  var formSuccess = document.getElementById('form-success');

  /* ---------- Language Toggle ---------- */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('eventus-lang', lang);
    htmlEl.setAttribute('lang', lang);

    document.title = translations[lang]['page.title'];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translations[lang]['page.description']);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) el.setAttribute('placeholder', translations[lang][key]);
    });

    document.querySelectorAll('.form__error').forEach(function (el) {
      if (el.textContent) {
        var key = el.getAttribute('data-error-key');
        if (key && translations[lang][key]) el.textContent = translations[lang][key];
      }
    });

    langToggle.querySelectorAll('.lang-toggle__option').forEach(function (opt) {
      opt.classList.toggle('lang-toggle__option--active', opt.getAttribute('data-lang') === lang);
    });
  }

  langToggle.addEventListener('click', function () {
    applyLanguage(currentLang === 'ru' ? 'en' : 'ru');
  });

  applyLanguage(currentLang);

  /* ---------- Mobile Menu ---------- */
  navBurger.addEventListener('click', function () {
    var isOpen = navBurger.getAttribute('aria-expanded') === 'true';
    navBurger.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('.nav__link')) {
      navBurger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      navBurger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
      document.body.style.overflow = '';
      navBurger.focus();
    }
  });

  /* ---------- Scroll Animations ---------- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function initScrollAnimations() {
    var elements = document.querySelectorAll('.anim');
    if (prefersReducedMotion.matches) {
      elements.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    elements.forEach(function (el) { observer.observe(el); });
  }

  initScrollAnimations();

  /* ---------- Form Validation & Submission ---------- */
  function validateField(input) {
    var group = input.closest('.form__group') || input.closest('.form__fieldset');
    var errorEl = group ? group.querySelector('.form__error') : null;
    var valid = true;
    var errorKey = '';

    if (input.type === 'radio') {
      var checked = Array.from(registrationForm.querySelectorAll('input[name="time_slot"]')).some(function (r) { return r.checked; });
      if (!checked) { valid = false; errorKey = 'form.timeSlotError'; }
    } else if (input.required && !input.value.trim()) {
      valid = false;
      var name = input.name;
      if (name === 'parent_name') errorKey = 'form.parentNameError';
      else if (name === 'phone') errorKey = 'form.phoneError';
      else if (name === 'child_name') errorKey = 'form.childNameError';
      else if (name === 'child_age') errorKey = 'form.childAgeError';
    } else if (input.name === 'child_age') {
      var age = parseInt(input.value, 10);
      if (isNaN(age) || age < 3 || age > 16) { valid = false; errorKey = 'form.childAgeError'; }
    }

    if (errorEl) errorEl.textContent = valid ? '' : (translations[currentLang][errorKey] || '');
    input.classList.toggle('is-invalid', !valid);
    return valid;
  }

  if (registrationForm) {
    registrationForm.addEventListener('focusout', function (e) {
      if (e.target.matches('.form__input, .form__radio')) validateField(e.target);
    });

    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var inputs = registrationForm.querySelectorAll('.form__input[required], .form__radio[required]');
      var allValid = true;
      var radioValidated = false;

      inputs.forEach(function (input) {
        if (input.type === 'radio') {
          if (!radioValidated) { if (!validateField(input)) allValid = false; radioValidated = true; }
        } else {
          if (!validateField(input)) allValid = false;
        }
      });

      if (!allValid) return;

      var submitBtn = registrationForm.querySelector('.form__submit');
      submitBtn.disabled = true;
      submitBtn.textContent = translations[currentLang]['form.sending'];
      formStatus.textContent = '';
      formStatus.classList.remove('is-error');

      fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(registrationForm) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.success) {
            registrationForm.hidden = true;
            formSuccess.hidden = false;
          } else {
            formStatus.textContent = translations[currentLang]['form.errorText'];
            formStatus.classList.add('is-error');
            submitBtn.disabled = false;
            submitBtn.textContent = translations[currentLang]['form.submit'];
          }
        })
        .catch(function () {
          formStatus.textContent = translations[currentLang]['form.errorText'];
          formStatus.classList.add('is-error');
          submitBtn.disabled = false;
          submitBtn.textContent = translations[currentLang]['form.submit'];
        });
    });
  }

  /* ---------- Smooth Scroll ---------- */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var targetId = link.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 64;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

})();
