(function () {
  'use strict';

  var translations = {
    ru: {
      'skip': 'Перейти к содержимому',
      'nav.about': 'О нас',
      'nav.programs': 'Направления',
      'nav.reviews': 'Отзывы',
      'nav.schedule': 'Расписание',
      'nav.register': 'Записаться',

      'hero.title': 'Креативный детский клуб в Нетании',
      'hero.sub': 'Ребёнок становится увереннее, учится выражать себя и лучше понимать других',
      'hero.desc': 'В Eventus Kids мы развиваем речь, эмоциональный интеллект и внутреннюю опору через театр, музыку и творчество.',
      'hero.tagline': 'Не кружок. Среда, в которой ребёнок раскрывается.',
      'hero.location': 'Нетания | Суббота | Маленькие группы',
      'hero.cta': 'Записаться',
      'hero.whatsapp': 'WhatsApp',

      'intro.title': 'Важно',
      'intro.text': 'Мы создаём пространство, в котором ребёнку спокойно, понятно и интересно. Где он может быть собой и постепенно раскрывать себя.',

      'noticed.title': 'Вы это замечали?',
      'noticed.lead': 'Ребёнок:',
      'noticed.1': 'стесняется говорить',
      'noticed.2': 'теряется в новой компании',
      'noticed.3': 'не может сформулировать мысль',
      'noticed.4': 'или, наоборот, слишком эмоционален и не справляется с этим',

      'about.title': 'О нас',
      'about.p1': 'Eventus Kids \u2014 это тёплое и дружеское пространство, где ребёнка не \u00ABучат\u00BB, а помогают раскрыть его сильные стороны.',
      'about.lead': 'У нас ребёнок:',
      'about.b1': 'начинает слышать себя и других',
      'about.b2': 'проявляет себя в разных видах творчества',
      'about.b3': 'чувствует уверенность и принятие',
      'about.p2': 'У нас нет потока и случайных занятий. Каждое занятие \u2014 это продуманная структура, в которой ребёнок постепенно раскрывается.',

      'sessions.title': 'Как проходят занятия',
      'sessions.p1': 'Мы работаем в трёх направлениях: театр, музыка и декоративное искусство.',
      'sessions.p2': 'Они не существуют отдельно. Мы соединяем их в одном процессе, чтобы ребёнок проживал опыт целиком.',
      'sessions.p3': 'Например: то, что ребёнок почувствовал на театральных занятиях, он может выразить через голос на музыке или воплотить в творческой работе на уроке арта.',
      'sessions.p4': 'Это даёт более глубокий результат, чем отдельные кружки.',

      'outcomes.title': 'Что получает ребёнок',
      'outcomes.lead': 'Результат \u2014 не в поделке или выученной песне.',
      'outcomes.sublead': 'Ребёнок:',
      'outcomes.1': 'начинает свободнее говорить',
      'outcomes.2': 'учится формулировать мысли',
      'outcomes.3': 'перестаёт бояться проявляться',
      'outcomes.4': 'лучше понимает свои эмоции',
      'outcomes.5': 'учится слышать других',
      'outcomes.highlight': 'И самое важное \u2014 появляется ощущение: \u00ABя могу\u00BB',

      'programs.title': 'Направления',
      'prog.theater.title': 'Театр',
      'prog.theater.p1': 'Через театральные упражнения ребёнок:',
      'prog.theater.b1': 'раскрепощается',
      'prog.theater.b2': 'учится общаться',
      'prog.theater.b3': 'снимает внутренние зажимы',
      'prog.theater.p2': 'Мы работаем с речью, вниманием и эмоциями. Учимся говорить, слушать и понимать.',

      'prog.music.title': 'Музыка',
      'prog.music.lead': 'Мы:',
      'prog.music.b1': 'развиваем голос',
      'prog.music.b2': 'учимся петь',
      'prog.music.b3': 'знакомимся с нотами',
      'prog.music.b4': 'тренируем слух',
      'prog.music.p1': 'Но главное \u2014 мы делаем из песен мини-представления, где ребёнок проживает музыку, а не просто повторяет её.',

      'prog.art.title': 'Декоративное искусство',
      'prog.art.p1': 'Это не \u00ABподелки ради результата\u00BB.',
      'prog.art.lead': 'Через прикладное творчество ребёнок:',
      'prog.art.b1': 'выражает себя',
      'prog.art.b2': 'рассказывает свою историю',
      'prog.art.b3': 'осмысляет свой опыт',
      'prog.art.p2': 'Работы получаются живыми и личными \u2014 и это чувствуется.',

      'open.title': 'Открытые занятия',
      'open.p1': 'Мы регулярно проводим открытые занятия.',
      'open.lead': 'Родители получают возможность:',
      'open.b1': 'увидеть процесс',
      'open.b2': 'понять, как развивается ребёнок',
      'open.b3': 'провести время вместе',
      'open.p2': 'Это не показательные выступления, а естественный результат нашей совместной работы.',

      'why.title': 'Почему родители выбирают нас?',
      'why.1': 'маленькие группы и внимание к каждому',
      'why.2': 'живая среда без давления',
      'why.3': 'развитие речи, уверенности и эмоционального интеллекта',
      'why.4': 'видимый результат',
      'why.5': 'ребёнок хочет возвращаться',
      'why.closing': 'Это не кружок. Это среда развития.',

      'reviews.title': 'Отзывы',
      'review.1': 'Самое ценное \u2014 что ребёнок стал спокойнее и начал по-другому взаимодействовать с другими детьми. Мы заметили это уже через несколько занятий. И главное \u2014 он хочет сюда возвращаться.',
      'review.2': 'Мне важно, что здесь не просто занятия. Примерно через месяц я увидела, что ребёнок стал более открытым.',
      'review.3': 'Я просто вижу, что ребёнку здесь хорошо. Он с радостью ждёт каждую субботу \u2014 и это для меня главный показатель.',

      'schedule.title': 'Формат',
      'schedule.slot1': '10:00\u201313:00',
      'schedule.slot2': '13:00\u201316:00',
      'schedule.address': 'Нетания, Смилянски, 10',
      'schedule.day': 'Суббота',
      'schedule.note': 'И главное \u2014 мы работаем в субботу. В день, когда у большинства родителей нет удобных детских занятий.',
      'schedule.cta': 'Проведите субботу с пользой и удовольствием \u2014 для ребёнка и для себя.',

      'register.title': 'Запись',
      'register.note1': 'Количество мест в группах ограничено.',
      'register.note2': 'Мы не увеличиваем группы, потому что нам важно внимание к каждому ребёнку.',
      'register.subtitle': 'Оставьте заявку \u2014 мы свяжемся с вами и подберём группу.',

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
      'form.childAgeError': 'Пожалуйста, укажите возраст (3\u201316)',
      'form.timeSlot': 'Предпочтительное время',
      'form.slot1': '10:00\u201313:00',
      'form.slot2': '13:00\u201316:00',
      'form.timeSlotError': 'Пожалуйста, выберите время',
      'form.submit': 'Записаться',
      'form.sending': 'Отправка...',
      'form.successTitle': 'Спасибо!',
      'form.successText': 'Мы свяжемся с вами в ближайшее время.',
      'form.errorText': 'Произошла ошибка. Попробуйте ещё раз.',

      'footer.tagline': 'Креативный детский клуб в Нетании',
      'footer.rights': 'Все права защищены.',
      'page.title': 'Eventus Kids \u2014 Креативный детский клуб в Нетании',
      'page.description': 'Eventus Kids \u2014 креативный детский клуб в Нетании. Развиваем речь, эмоциональный интеллект и уверенность через театр, музыку и творчество.'
    },

    en: {
      'skip': 'Skip to content',
      'nav.about': 'About',
      'nav.programs': 'Programs',
      'nav.reviews': 'Reviews',
      'nav.schedule': 'Schedule',
      'nav.register': 'Sign Up',

      'hero.title': 'Creative Children\'s Club in Netanya',
      'hero.sub': 'Your child becomes more confident, learns to express themselves, and better understands others',
      'hero.desc': 'At Eventus Kids we develop speech, emotional intelligence, and inner resilience through theater, music, and creativity.',
      'hero.tagline': 'Not a class. An environment where children open up.',
      'hero.location': 'Netanya | Saturday | Small groups',
      'hero.cta': 'Sign Up',
      'hero.whatsapp': 'WhatsApp',

      'intro.title': 'Important',
      'intro.text': 'We create a space where a child feels calm, understood, and engaged. Where they can be themselves and gradually open up.',

      'noticed.title': 'Have you noticed this?',
      'noticed.lead': 'Your child:',
      'noticed.1': 'is shy about speaking',
      'noticed.2': 'gets lost in new social settings',
      'noticed.3': 'can\'t articulate their thoughts',
      'noticed.4': 'or, on the contrary, is too emotional and can\'t manage it',

      'about.title': 'About Us',
      'about.p1': 'Eventus Kids is a warm and friendly space where children aren\'t "taught" but are helped to discover their strengths.',
      'about.lead': 'Here your child:',
      'about.b1': 'begins to hear themselves and others',
      'about.b2': 'expresses themselves through different forms of creativity',
      'about.b3': 'feels confidence and acceptance',
      'about.p2': 'We don\'t do assembly-line or random activities. Every session has a thoughtful structure in which the child gradually opens up.',

      'sessions.title': 'How Sessions Work',
      'sessions.p1': 'We work in three areas: theater, music, and decorative arts.',
      'sessions.p2': 'They don\'t exist separately. We combine them into a single process so the child experiences it as a whole.',
      'sessions.p3': 'For example: what a child felt during theater exercises, they can express through their voice in music or bring to life in a creative project during an art lesson.',
      'sessions.p4': 'This produces deeper results than separate classes.',

      'outcomes.title': 'What Your Child Gains',
      'outcomes.lead': 'The result isn\'t a craft project or a memorized song.',
      'outcomes.sublead': 'Your child:',
      'outcomes.1': 'begins to speak more freely',
      'outcomes.2': 'learns to articulate thoughts',
      'outcomes.3': 'stops being afraid to express themselves',
      'outcomes.4': 'better understands their emotions',
      'outcomes.5': 'learns to listen to others',
      'outcomes.highlight': 'And most importantly, a feeling emerges: "I can do this"',

      'programs.title': 'Programs',
      'prog.theater.title': 'Theater',
      'prog.theater.p1': 'Through theater exercises, your child:',
      'prog.theater.b1': 'loosens up',
      'prog.theater.b2': 'learns to communicate',
      'prog.theater.b3': 'releases inner tension',
      'prog.theater.p2': 'We work with speech, attention, and emotions. We learn to speak, listen, and understand.',

      'prog.music.title': 'Music',
      'prog.music.lead': 'We:',
      'prog.music.b1': 'develop the voice',
      'prog.music.b2': 'learn to sing',
      'prog.music.b3': 'get introduced to musical notation',
      'prog.music.b4': 'train the ear',
      'prog.music.p1': 'But the key thing is that we turn songs into mini-performances where the child lives the music rather than just repeating it.',

      'prog.art.title': 'Decorative Arts',
      'prog.art.p1': 'This isn\'t "crafts for the sake of a product."',
      'prog.art.lead': 'Through applied creativity, your child:',
      'prog.art.b1': 'expresses themselves',
      'prog.art.b2': 'tells their story',
      'prog.art.b3': 'makes sense of their experience',
      'prog.art.p2': 'The works come out alive and personal, and you can feel it.',

      'open.title': 'Open Sessions',
      'open.p1': 'We regularly hold open sessions.',
      'open.lead': 'Parents get the opportunity to:',
      'open.b1': 'see the process',
      'open.b2': 'understand how their child is developing',
      'open.b3': 'spend time together',
      'open.p2': 'These aren\'t showcase performances but the natural result of our work together.',

      'why.title': 'Why Parents Choose Us',
      'why.1': 'small groups and attention to each child',
      'why.2': 'a living environment without pressure',
      'why.3': 'development of speech, confidence, and emotional intelligence',
      'why.4': 'visible results',
      'why.5': 'the child wants to come back',
      'why.closing': 'Not a class. A developmental environment.',

      'reviews.title': 'Reviews',
      'review.1': 'The most valuable thing is that our child became calmer and started interacting differently with other kids. We noticed it after just a few sessions. And most importantly, he wants to keep coming back.',
      'review.2': 'What matters to me is that these aren\'t just classes. After about a month, I saw that my child became more open.',
      'review.3': 'I simply see that my child feels good here. He looks forward to every Saturday with excitement, and that\'s the main indicator for me.',

      'schedule.title': 'Format',
      'schedule.slot1': '10:00 AM \u2013 1:00 PM',
      'schedule.slot2': '1:00 PM \u2013 4:00 PM',
      'schedule.address': 'Netanya, Smilanski 10',
      'schedule.day': 'Saturday',
      'schedule.note': 'And most importantly, we operate on Saturdays. The day when most parents don\'t have convenient children\'s activities available.',
      'schedule.cta': 'Spend Saturday with benefit and enjoyment, for your child and for yourself.',

      'register.title': 'Sign Up',
      'register.note1': 'Spots in groups are limited.',
      'register.note2': 'We don\'t expand groups because individual attention to each child matters to us.',
      'register.subtitle': 'Leave a request and we\'ll contact you to find the right group.',

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
      'form.submit': 'Sign Up',
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

  var currentLang = localStorage.getItem('eventus-lang') || 'ru';
  var htmlEl = document.documentElement;
  var navLinks = document.getElementById('nav-links');
  var navBurger = document.getElementById('nav-burger');
  var langToggle = document.getElementById('lang-toggle');
  var registrationForm = document.getElementById('registration-form');
  var formStatus = document.getElementById('form-status');
  var formSuccess = document.getElementById('form-success');

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

  langToggle.addEventListener('click', function () { applyLanguage(currentLang === 'ru' ? 'en' : 'ru'); });
  applyLanguage(currentLang);

  navBurger.addEventListener('click', function () {
    var isOpen = navBurger.getAttribute('aria-expanded') === 'true';
    navBurger.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('.nav__link')) { navBurger.setAttribute('aria-expanded', 'false'); navLinks.classList.remove('is-open'); document.body.style.overflow = ''; }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) { navBurger.setAttribute('aria-expanded', 'false'); navLinks.classList.remove('is-open'); document.body.style.overflow = ''; navBurger.focus(); }
  });

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  (function () {
    var els = document.querySelectorAll('.anim');
    if (prefersReducedMotion.matches) { els.forEach(function (el) { el.classList.add('is-visible'); }); return; }
    var obs = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }); }, { threshold: 0.1 });
    els.forEach(function (el) { obs.observe(el); });
  })();

  function validateField(input) {
    var group = input.closest('.form__group') || input.closest('fieldset');
    var errorEl = group ? group.querySelector('.form__error') : null;
    var valid = true, errorKey = '';
    if (input.type === 'radio') {
      if (!Array.from(registrationForm.querySelectorAll('input[name="time_slot"]')).some(function (r) { return r.checked; })) { valid = false; errorKey = 'form.timeSlotError'; }
    } else if (input.required && !input.value.trim()) {
      valid = false;
      if (input.name === 'parent_name') errorKey = 'form.parentNameError';
      else if (input.name === 'phone') errorKey = 'form.phoneError';
      else if (input.name === 'child_name') errorKey = 'form.childNameError';
      else if (input.name === 'child_age') errorKey = 'form.childAgeError';
    } else if (input.name === 'child_age') {
      var age = parseInt(input.value, 10);
      if (isNaN(age) || age < 3 || age > 16) { valid = false; errorKey = 'form.childAgeError'; }
    }
    if (errorEl) errorEl.textContent = valid ? '' : (translations[currentLang][errorKey] || '');
    input.classList.toggle('is-invalid', !valid);
    return valid;
  }

  if (registrationForm) {
    registrationForm.addEventListener('focusout', function (e) { if (e.target.matches('.form__input, .form__radio')) validateField(e.target); });
    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var inputs = registrationForm.querySelectorAll('.form__input[required], .form__radio[required]');
      var allValid = true, radioDone = false;
      inputs.forEach(function (inp) {
        if (inp.type === 'radio') { if (!radioDone) { if (!validateField(inp)) allValid = false; radioDone = true; } }
        else { if (!validateField(inp)) allValid = false; }
      });
      if (!allValid) return;
      var btn = registrationForm.querySelector('.form__submit');
      btn.disabled = true; btn.textContent = translations[currentLang]['form.sending'];
      formStatus.textContent = ''; formStatus.classList.remove('is-error');
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(registrationForm) })
        .then(function (r) { return r.json(); })
        .then(function (d) {
          if (d.success) { registrationForm.hidden = true; formSuccess.hidden = false; }
          else { formStatus.textContent = translations[currentLang]['form.errorText']; formStatus.classList.add('is-error'); btn.disabled = false; btn.textContent = translations[currentLang]['form.submit']; }
        })
        .catch(function () { formStatus.textContent = translations[currentLang]['form.errorText']; formStatus.classList.add('is-error'); btn.disabled = false; btn.textContent = translations[currentLang]['form.submit']; });
    });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
    target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true });
  });
})();
