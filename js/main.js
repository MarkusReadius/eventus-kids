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

      'hero.title': 'Детский клуб в Нетании',
      'hero.subtitle': 'Театр, музыка и творчество. Речь, уверенность, эмоции. По субботам, в маленьких группах.',
      'hero.cta': 'Записаться',
      'hero.whatsapp': 'Написать в WhatsApp',

      'strip.day': 'Суббота',
      'strip.location': 'Нетания',
      'strip.groups': 'Маленькие группы',
      'strip.ages': 'Возраст 4-12',

      'programs.title': 'Чем мы занимаемся',
      'programs.subtitle': 'Театр, музыка и арт работают вместе. Не три отдельных кружка, а один связный процесс.',
      'programs.cta': 'Записаться',
      'program.theater.title': 'Театр',
      'program.theater.desc': 'Ребёнок раскрепощается, учится общаться и выражать свои мысли через сценические упражнения.',
      'program.music.title': 'Музыка',
      'program.music.desc': 'Голос, слух, ритм. Песни превращаются в мини-спектакли, которые дети проживают, а не просто поют.',
      'program.art.title': 'Декоративное искусство',
      'program.art.desc': 'Не поделки по шаблону. Ребёнок рассказывает свою историю через прикладное творчество.',

      'outcomes.title': 'Что меняется у детей',
      'outcomes.item1': 'Свободнее говорят',
      'outcomes.item2': 'Могут объяснить, что чувствуют',
      'outcomes.item3': 'Не боятся выступать',
      'outcomes.item4': 'Лучше понимают себя и других',
      'outcomes.item5': 'Умеют слушать',
      'outcomes.item6': 'Появляется уверенность: «я могу»',

      'about.title': 'Про нас',
      'about.p1': 'Eventus Kids работает по субботам в Нетании. У нас маленькие группы, знакомые педагоги и спокойная атмосфера.',
      'about.p2': 'Занятия построены так, что театр, музыка и арт дополняют друг друга. Ребёнок не прыгает между кружками, а проходит один цельный процесс.',
      'about.p3': 'Можно прийти на разовое занятие или взять абонемент.',
      'about.cta': 'Записаться',

      'reviews.title': 'Отзывы родителей',
      'review.1': 'Самое ценное, что ребёнок стал спокойнее и начал по-другому общаться с другими детьми. Мы заметили это уже через несколько занятий. И главное, он сам хочет сюда возвращаться.',
      'review.2': 'Мне важно, что здесь не просто занятия. Примерно через месяц я увидела, что ребёнок стал более открытым.',
      'review.3': 'Я просто вижу, что ребёнку здесь хорошо. Он с радостью ждёт каждую субботу, и для меня это главный показатель.',

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
      'schedule.note': 'Работаем по субботам. В день, когда обычно сложно найти хорошие занятия для детей.',
      'schedule.cta': 'Записаться',

      'register.title': 'Записаться',
      'register.subtitle': 'Оставьте заявку, и мы свяжемся с вами, чтобы подобрать группу.',

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

      'hero.title': 'Children\'s Club in Netanya',
      'hero.subtitle': 'Theater, music, and art. Speech, confidence, emotions. Saturdays, small groups.',
      'hero.cta': 'Sign Up',
      'hero.whatsapp': 'Message on WhatsApp',

      'strip.day': 'Saturday',
      'strip.location': 'Netanya',
      'strip.groups': 'Small groups',
      'strip.ages': 'Ages 4-12',

      'programs.title': 'What we do',
      'programs.subtitle': 'Theater, music, and art work together. Not three separate classes, but one connected process.',
      'programs.cta': 'Sign Up',
      'program.theater.title': 'Theater',
      'program.theater.desc': 'Kids open up, learn to communicate, and express themselves through stage exercises.',
      'program.music.title': 'Music',
      'program.music.desc': 'Voice, rhythm, ear training. Songs turn into mini-shows that kids experience, not just perform.',
      'program.art.title': 'Decorative Arts',
      'program.art.desc': 'Not cookie-cutter crafts. Kids tell their own stories through hands-on creative work.',

      'outcomes.title': 'What changes in kids',
      'outcomes.item1': 'Speak more freely',
      'outcomes.item2': 'Can explain what they feel',
      'outcomes.item3': 'Not afraid to perform',
      'outcomes.item4': 'Better understand themselves and others',
      'outcomes.item5': 'Know how to listen',
      'outcomes.item6': 'Real confidence: \'I can do this\'',

      'about.title': 'About us',
      'about.p1': 'Eventus Kids runs on Saturdays in Netanya. Small groups, familiar teachers, calm atmosphere.',
      'about.p2': 'Sessions are built so that theater, music, and art feed into each other. Your child goes through one connected process, not three separate activities.',
      'about.p3': 'You can come for a single session or get a subscription.',
      'about.cta': 'Sign Up',

      'reviews.title': 'Parent reviews',
      'review.1': 'The biggest change is that our child became calmer and started interacting differently with other kids. We noticed it after just a few sessions. And he actually wants to keep coming back.',
      'review.2': 'What matters to me is that this isn\'t just another activity. After about a month, I noticed my child becoming more open.',
      'review.3': 'I just see that my child feels good here. He looks forward to every Saturday, and for me that says everything.',

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
      'schedule.note': 'We run on Saturdays. The day when it\'s usually hard to find good activities for kids.',
      'schedule.cta': 'Sign Up',

      'register.title': 'Sign Up',
      'register.subtitle': 'Leave your details and we\'ll get back to you to find the right group.',

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
