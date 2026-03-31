/* ==========================================================================
   Eventus Kids — Main JavaScript
   Language toggle, scroll animations, testimonials, mobile menu, form
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Translations ---------- */

  const translations = {
    ru: {
      // Skip link
      'skip': 'Перейти к содержимому',

      // Navigation
      'nav.about': 'О нас',
      'nav.programs': 'Направления',
      'nav.teachers': 'Педагоги',
      'nav.reviews': 'Отзывы',
      'nav.schedule': 'Расписание',
      'nav.register': 'Записаться',

      // Hero
      'hero.title': 'Креативный детский клуб в Нетании',
      'hero.subtitle': 'Ребёнок становится увереннее, учится выражать себя и лучше понимать других',
      'hero.cta': 'Записаться',
      'hero.location': 'Нетания | Суббота | Маленькие группы',

      // Intro
      'intro.text': 'Мы создаём пространство, в котором ребёнку спокойно, понятно и интересно. Где он может быть собой и постепенно раскрывать себя.',

      // Noticed
      'noticed.title': 'Вы замечали такое?',
      'noticed.item1': 'стесняется говорить',
      'noticed.item2': 'теряется в новой компании',
      'noticed.item3': 'не может сформулировать мысль',
      'noticed.item4': 'или, наоборот, слишком эмоционален и не справляется с этим',

      // About
      'about.title': 'О нас',
      'about.lead': 'Eventus Kids — это тёплое и дружеское пространство, где ребёнка не «учат», а помогают раскрыть его сильные стороны.',
      'about.benefit1': 'начинает слышать себя и других',
      'about.benefit2': 'проявляет себя в разных видах творчества',
      'about.benefit3': 'чувствует уверенность и принятие',
      'about.closing': 'У нас нет потока и случайных занятий. Каждое занятие — это продуманная структура, в которой ребёнок постепенно раскрывается.',

      // Sessions
      'sessions.title': 'Как устроены занятия',
      'sessions.p1': 'Мы работаем в трёх направлениях: театр, музыка и декоративное искусство.',
      'sessions.p2': 'Они не существуют отдельно. Мы соединяем их в одном процессе, чтобы ребёнок проживал опыт целиком.',
      'sessions.p3': 'Например: то, что ребёнок почувствовал на театральных занятиях, он может выразить через голос на музыке или воплотить в творческой работе на уроке арта.',
      'sessions.p4': 'Это даёт более глубокий результат, чем отдельные кружки.',
      'sessions.theater': 'Театр',
      'sessions.music': 'Музыка',
      'sessions.art': 'Арт',

      // Gains
      'gains.title': 'Что получает ребёнок',
      'gains.lead': 'Результат — не в поделке или выученной песне.',
      'gains.item1': 'начинает свободнее говорить',
      'gains.item2': 'учится формулировать мысли',
      'gains.item3': 'перестаёт бояться проявляться',
      'gains.item4': 'лучше понимает свои эмоции',
      'gains.item5': 'учится слышать других',
      'gains.highlight': 'И самое важное — появляется ощущение: «я могу»',

      // Programs
      'programs.heading': 'Наши направления',
      'program.theater.title': 'Театр',
      'program.theater.p1': 'Через театральные упражнения ребёнок: раскрепощается, учится общаться, снимает внутренние зажимы.',
      'program.theater.p2': 'Мы работаем с речью, вниманием и эмоциями. Учимся говорить, слушать и понимать.',
      'program.music.title': 'Музыка',
      'program.music.p1': 'Мы: развиваем голос, учимся петь, знакомимся с нотами, тренируем слух.',
      'program.music.p2': 'Но главное — мы делаем из песен мини-представления, где ребёнок проживает музыку, а не просто повторяет её.',
      'program.art.title': 'Декоративное искусство',
      'program.art.p1': 'Это не «поделки ради результата».',
      'program.art.p2': 'Через прикладное творчество ребёнок: выражает себя, рассказывает свою историю, осмысляет свой опыт.',
      'program.art.p3': 'Работы получаются живыми и личными — и это чувствуется.',

      // Teachers
      'teachers.title': 'Наши педагоги',
      'teacher.1.name': 'TBD',
      'teacher.1.role': 'TBD',
      'teacher.1.bio': 'TBD',
      'teacher.2.name': 'TBD',
      'teacher.2.role': 'TBD',
      'teacher.2.bio': 'TBD',
      'teacher.3.name': 'TBD',
      'teacher.3.role': 'TBD',
      'teacher.3.bio': 'TBD',

      // Open Sessions
      'open.title': 'Открытые занятия',
      'open.p1': 'Мы регулярно проводим открытые занятия.',
      'open.p2': 'Родители получают возможность: увидеть процесс, понять, как развивается ребёнок, провести время вместе.',
      'open.p3': 'Это не показательные выступления, а естественный результат нашей совместной работы.',

      // Why Us
      'why.title': 'Почему выбирают нас',
      'why.item1': 'маленькие группы и внимание к каждому',
      'why.item2': 'живая среда без давления',
      'why.item3': 'развитие речи, уверенности и эмоционального интеллекта',
      'why.item4': 'видимый результат',
      'why.item5': 'ребёнок хочет возвращаться',
      'why.closing': 'Это не кружок. Это среда развития.',

      // Testimonials
      'reviews.title': 'Отзывы родителей',
      'review.1': '\u00ABСамое ценное — что ребёнок стал спокойнее и начал по-другому взаимодействовать с другими детьми. Мы заметили это уже через несколько занятий. И главное — он хочет сюда возвращаться.\u00BB',
      'review.2': '\u00ABМне важно, что здесь не просто занятия. Примерно через месяц я увидела, что ребёнок стал более открытым.\u00BB',
      'review.3': '\u00ABЯ просто вижу, что ребёнку здесь хорошо. Он с радостью ждёт каждую субботу — и это для меня главный показатель.\u00BB',

      // Schedule
      'schedule.title': 'Расписание и адрес',
      'schedule.addressLabel': 'Адрес:',
      'schedule.address': 'Нетания, Смилянски, 10',
      'schedule.dayLabel': 'День:',
      'schedule.day': 'Суббота',
      'schedule.slot1Label': 'Утренняя группа:',
      'schedule.slot1': '10:00–13:00',
      'schedule.slot2Label': 'Дневная группа:',
      'schedule.slot2': '13:00–16:00',
      'schedule.note': 'И главное — мы работаем в субботу. В день, когда у большинства родителей нет удобных детских занятий.',
      'schedule.ctaText': 'Проведите субботу с пользой и удовольствием — для ребёнка и для себя.',

      // Registration
      'register.title': 'Записаться',
      'register.subtitle': 'Мы свяжемся с вами и подберём группу',
      'register.note1': 'Количество мест в группах ограничено.',
      'register.note2': 'Мы не увеличиваем группы, потому что нам важно внимание к каждому ребёнку.',

      // Form fields
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
      'form.message': 'Сообщение (необязательно)',
      'form.messagePh': 'Комментарий или вопрос',
      'form.submit': 'Отправить заявку',
      'form.sending': 'Отправка...',
      'form.successTitle': 'Спасибо!',
      'form.successText': 'Мы свяжемся с вами в ближайшее время.',
      'form.errorText': 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.',

      // Footer
      'footer.phone': '+972-XX-XXX-XXXX',
      'footer.rights': 'Все права защищены.',

      // Page
      'page.title': 'Eventus Kids — Креативный детский клуб в Нетании',
      'page.description': 'Eventus Kids — креативный детский клуб в Нетании. Развиваем речь, эмоциональный интеллект и уверенность через театр, музыку и творчество.'
    },

    en: {
      // Skip link
      'skip': 'Skip to content',

      // Navigation
      'nav.about': 'About',
      'nav.programs': 'Programs',
      'nav.teachers': 'Teachers',
      'nav.reviews': 'Reviews',
      'nav.schedule': 'Schedule',
      'nav.register': 'Sign Up',

      // Hero
      'hero.title': 'Creative Children\'s Club in Netanya',
      'hero.subtitle': 'Your child becomes more confident, learns to express themselves, and better understands others',
      'hero.cta': 'Sign Up',
      'hero.location': 'Netanya | Saturday | Small groups',

      // Intro
      'intro.text': 'We create a space where a child feels calm, understood, and engaged. Where they can be themselves and gradually open up.',

      // Noticed
      'noticed.title': 'Have you noticed this?',
      'noticed.item1': 'is shy about speaking',
      'noticed.item2': 'gets lost in new social settings',
      'noticed.item3': 'can\'t articulate their thoughts',
      'noticed.item4': 'or, on the contrary, is too emotional and can\'t manage it',

      // About
      'about.title': 'About Us',
      'about.lead': 'Eventus Kids is a warm and friendly space where children aren\'t \'taught\' but are helped to discover their strengths.',
      'about.benefit1': 'begins to hear themselves and others',
      'about.benefit2': 'expresses themselves through different forms of creativity',
      'about.benefit3': 'feels confidence and acceptance',
      'about.closing': 'We don\'t do assembly-line or random activities. Every session has a thoughtful structure in which the child gradually opens up.',

      // Sessions
      'sessions.title': 'How Sessions Work',
      'sessions.p1': 'We work in three areas: theater, music, and decorative arts.',
      'sessions.p2': 'They don\'t exist separately. We combine them into a single process so the child experiences it as a whole.',
      'sessions.p3': 'For example: what a child felt during theater exercises, they can express through their voice in music or bring to life in a creative project during an art lesson.',
      'sessions.p4': 'This produces deeper results than separate classes.',
      'sessions.theater': 'Theater',
      'sessions.music': 'Music',
      'sessions.art': 'Art',

      // Gains
      'gains.title': 'What Your Child Gains',
      'gains.lead': 'The result isn\'t a craft project or a memorized song.',
      'gains.item1': 'begins to speak more freely',
      'gains.item2': 'learns to articulate thoughts',
      'gains.item3': 'stops being afraid to express themselves',
      'gains.item4': 'better understands their emotions',
      'gains.item5': 'learns to listen to others',
      'gains.highlight': 'And most importantly, a feeling emerges: \'I can do this.\'',

      // Programs
      'programs.heading': 'Our Programs',
      'program.theater.title': 'Theater',
      'program.theater.p1': 'Through theater exercises, your child loosens up, learns to communicate, and releases inner tension.',
      'program.theater.p2': 'We work with speech, attention, and emotions. We learn to speak, listen, and understand.',
      'program.music.title': 'Music',
      'program.music.p1': 'We develop the voice, learn to sing, get introduced to musical notation, and train the ear.',
      'program.music.p2': 'But the key thing is that we turn songs into mini-performances where the child lives the music rather than just repeating it.',
      'program.art.title': 'Decorative Arts',
      'program.art.p1': 'This isn\'t \'crafts for the sake of a product.\'',
      'program.art.p2': 'Through applied creativity, your child expresses themselves, tells their story, and makes sense of their experience.',
      'program.art.p3': 'The works come out alive and personal, and you can feel it.',

      // Teachers
      'teachers.title': 'Our Teachers',
      'teacher.1.name': 'TBD',
      'teacher.1.role': 'TBD',
      'teacher.1.bio': 'TBD',
      'teacher.2.name': 'TBD',
      'teacher.2.role': 'TBD',
      'teacher.2.bio': 'TBD',
      'teacher.3.name': 'TBD',
      'teacher.3.role': 'TBD',
      'teacher.3.bio': 'TBD',

      // Open Sessions
      'open.title': 'Open Sessions',
      'open.p1': 'We regularly hold open sessions.',
      'open.p2': 'Parents get the opportunity to see the process, understand how their child is developing, and spend time together.',
      'open.p3': 'These aren\'t showcase performances but the natural result of our collaborative work.',

      // Why Us
      'why.title': 'Why Parents Choose Us',
      'why.item1': 'small groups and attention to each child',
      'why.item2': 'a living environment without pressure',
      'why.item3': 'development of speech, confidence, and emotional intelligence',
      'why.item4': 'visible results',
      'why.item5': 'the child wants to come back',
      'why.closing': 'This isn\'t a class. This is a developmental environment.',

      // Testimonials
      'reviews.title': 'Parent Reviews',
      'review.1': '\u201CThe most valuable thing is that our child became calmer and started interacting differently with other kids. We noticed it after just a few sessions. And most importantly, he wants to keep coming back.\u201D',
      'review.2': '\u201CWhat matters to me is that these aren\'t just classes. After about a month, I saw that my child became more open.\u201D',
      'review.3': '\u201CI simply see that my child feels good here. He looks forward to every Saturday with excitement, and that\'s the main indicator for me.\u201D',

      // Schedule
      'schedule.title': 'Schedule & Location',
      'schedule.addressLabel': 'Address:',
      'schedule.address': 'Netanya, Smilanski 10',
      'schedule.dayLabel': 'Day:',
      'schedule.day': 'Saturday',
      'schedule.slot1Label': 'Morning group:',
      'schedule.slot1': '10:00 AM \u2013 1:00 PM',
      'schedule.slot2Label': 'Afternoon group:',
      'schedule.slot2': '1:00 PM \u2013 4:00 PM',
      'schedule.note': 'And most importantly, we operate on Saturdays. The day when most parents don\'t have convenient children\'s activities available.',
      'schedule.ctaText': 'Spend Saturday with benefit and enjoyment, for your child and for yourself.',

      // Registration
      'register.title': 'Sign Up',
      'register.subtitle': 'We\'ll contact you to find the right group',
      'register.note1': 'Spots in groups are limited.',
      'register.note2': 'We don\'t expand groups because individual attention to each child matters to us.',

      // Form fields
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
      'form.message': 'Message (optional)',
      'form.messagePh': 'Comment or question',
      'form.submit': 'Submit request',
      'form.sending': 'Sending...',
      'form.successTitle': 'Thank you!',
      'form.successText': 'We\'ll contact you shortly.',
      'form.errorText': 'An error occurred. Please try again.',

      // Footer
      'footer.phone': '+972-XX-XXX-XXXX',
      'footer.rights': 'All rights reserved.',

      // Page
      'page.title': 'Eventus Kids \u2014 Creative Children\'s Club in Netanya',
      'page.description': 'Eventus Kids \u2014 creative children\'s club in Netanya. We develop speech, emotional intelligence, and confidence through theater, music, and creativity.'
    }
  };

  /* ---------- State ---------- */

  let currentLang = localStorage.getItem('eventus-lang') || 'ru';

  /* ---------- DOM References ---------- */

  const htmlEl = document.documentElement;
  const header = document.getElementById('site-header');
  const navLinks = document.getElementById('nav-links');
  const navBurger = document.getElementById('nav-burger');
  const langToggle = document.getElementById('lang-toggle');
  const registrationForm = document.getElementById('registration-form');
  const formStatus = document.getElementById('form-status');
  const formSuccess = document.getElementById('form-success');

  /* ---------- Language Toggle ---------- */

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('eventus-lang', lang);
    htmlEl.setAttribute('lang', lang);

    // Update page title and meta description
    document.title = translations[lang]['page.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translations[lang]['page.description']);

    // Swap text content for all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    // Swap placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Re-translate any visible error messages
    var errorSpans = document.querySelectorAll('.form__error');
    errorSpans.forEach(function (el) {
      if (el.textContent) {
        var key = el.getAttribute('data-error-key');
        if (key && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update lang toggle active state
    const langOptions = langToggle.querySelectorAll('.lang-toggle__option');
    langOptions.forEach(function (opt) {
      opt.classList.toggle('lang-toggle__option--active', opt.getAttribute('data-lang') === lang);
    });
  }

  langToggle.addEventListener('click', function () {
    var newLang = currentLang === 'ru' ? 'en' : 'ru';
    applyLanguage(newLang);
  });

  // Apply saved language on load
  applyLanguage(currentLang);

  /* ---------- Sticky Navigation ---------- */

  function handleScroll() {
    var scrolled = window.scrollY > 50;
    header.classList.toggle('scrolled', scrolled);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- Mobile Menu ---------- */

  navBurger.addEventListener('click', function () {
    var isOpen = navBurger.getAttribute('aria-expanded') === 'true';
    navBurger.setAttribute('aria-expanded', String(!isOpen));
    navBurger.setAttribute('aria-label', isOpen
      ? (currentLang === 'ru' ? 'Открыть меню' : 'Open menu')
      : (currentLang === 'ru' ? 'Закрыть меню' : 'Close menu'));
    navLinks.classList.toggle('is-open', !isOpen);

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close menu on link click
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('.nav__link')) {
      navBurger.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // Close menu on Escape
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
    if (prefersReducedMotion.matches) {
      // Show everything immediately
      document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  initScrollAnimations();

  /* ---------- Testimonials Carousel ---------- */

  var testimonials = document.querySelectorAll('.testimonial');
  var dots = document.querySelectorAll('.testimonials__dot');
  var prevBtn = document.querySelector('.testimonials__prev');
  var nextBtn = document.querySelector('.testimonials__next');
  var currentSlide = 0;
  var autoplayInterval = null;
  var carouselContainer = document.querySelector('.testimonials__carousel');

  function showSlide(index) {
    testimonials.forEach(function (t, i) {
      t.classList.toggle('testimonial--active', i === index);
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('testimonials__dot--active', i === index);
      d.setAttribute('aria-selected', String(i === index));
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % testimonials.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(nextSlide, 7000);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  if (nextBtn) nextBtn.addEventListener('click', function () { nextSlide(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', function () { prevSlide(); startAutoplay(); });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      showSlide(parseInt(dot.getAttribute('data-index'), 10));
      startAutoplay();
    });
  });

  // Pause on hover/focus
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);
    carouselContainer.addEventListener('focusin', stopAutoplay);
    carouselContainer.addEventListener('focusout', startAutoplay);
  }

  // Keyboard navigation for carousel
  document.querySelector('.testimonials__controls')?.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { prevSlide(); startAutoplay(); }
    if (e.key === 'ArrowRight') { nextSlide(); startAutoplay(); }
  });

  startAutoplay();

  /* ---------- Form Validation & Submission ---------- */

  function validateField(input) {
    var group = input.closest('.form__group') || input.closest('.form__fieldset');
    var errorEl = group ? group.querySelector('.form__error') : null;
    var valid = true;
    var errorKey = '';

    if (input.type === 'radio') {
      var radios = registrationForm.querySelectorAll('input[name="time_slot"]');
      var checked = Array.from(radios).some(function (r) { return r.checked; });
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
      if (isNaN(age) || age < 3 || age > 16) {
        valid = false;
        errorKey = 'form.childAgeError';
      }
    }

    if (errorEl) {
      errorEl.textContent = valid ? '' : (translations[currentLang][errorKey] || '');
    }
    input.classList.toggle('is-invalid', !valid);

    return valid;
  }

  if (registrationForm) {
    // Live validation on blur
    registrationForm.addEventListener('focusout', function (e) {
      if (e.target.matches('.form__input, .form__radio')) {
        validateField(e.target);
      }
    });

    registrationForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate all required fields
      var inputs = registrationForm.querySelectorAll('.form__input[required], .form__radio[required]');
      var allValid = true;
      var radioValidated = false;

      inputs.forEach(function (input) {
        if (input.type === 'radio') {
          if (!radioValidated) {
            if (!validateField(input)) allValid = false;
            radioValidated = true;
          }
        } else {
          if (!validateField(input)) allValid = false;
        }
      });

      if (!allValid) return;

      // Show sending state
      var submitBtn = registrationForm.querySelector('.form__submit');
      submitBtn.disabled = true;
      submitBtn.textContent = translations[currentLang]['form.sending'];
      formStatus.textContent = '';
      formStatus.classList.remove('is-error');

      // Submit to Web3Forms
      var formData = new FormData(registrationForm);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
        .then(function (response) { return response.json(); })
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

  /* ---------- Smooth Scroll for Anchor Links ---------- */

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var targetId = link.getAttribute('href').slice(1);
    var target = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();
    var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 72;
    var top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: top, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });

    // Move focus for accessibility
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });

})();
