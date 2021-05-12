'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var profile$1 = {
  'profileName': {
    'en': 'NAME',
    'es': 'NOMBRE'
  },
  'profileNameContent': {
    'en': 'RUBÉN ANDRÉS MENDOZA BURGOS',
    'es': 'RUBÉN ANDRÉS MENDOZA BURGOS'
  },
  'profileLocation': {
    'en': 'LOCATION',
    'es': 'LOCALIZACIÓN'
  },
  'profileLocationContent': {
    'en': 'QUERETARO, MEXICO',
    'es': 'QUERÉTARO, MÉXICO'
  },
  'profileNickname': {
    'en': 'PSEUDONYM',
    'es': 'PSEUDÓNIMO'
  },
  'profileNicknameContent': {
    'en': 'RAMB MEMBURG',
    'es': 'RAMB MEMBURG'
  },
  'profileEducation': {
    'en': 'EDUCATION',
    'es': 'EDUCACIÓN'
  },
  'profileEducationContent': {
    'en': 'AUTONOMOUS UNIVERSITY OF QUERÉTARO',
    'es': 'UNIVERSIDAD AUTÓNOMA DE QUERÉTARO'
  },
  'profileMoreStuff': {
    'en': 'MORE STUFF',
    'es': 'MÁS COSAS'
  },
  'profileMoreStuffContent': {
    'en': "I'M PASSIONATE ABOUT SCIENCE AND TECHNOLOGY, I ALWAYS WANT TO LEARN NEW THINGS. I LIKE ATHLETICS AND PLAYING VIDEOGAMES. SOME PROGRAMMING LANGUAGES I LIKE AND I FEEL COMFORTABLE WITH ARE JAVASCRIPT, PYTHON, MATLAB, AND C; ALSO I'M CURRENTLY LEARNING CRYSTAL.",
    'es': "SOY APASIONADO POR LA CIENCIA Y LA TECNOLOGÍA, SIEMPRE QUIERO APRENDER COSAS NUEVAS. ME GUSTA EL ATLETISMO Y JUGAR VIDEOJUEGOS. ALGUNOS LENGUAJES DE PROGRAMACIÓN QUE ME GUSTAN Y CON LOS QUE ME SIENTO CÓMODO SON JAVASCRIPT, PYTHON, MATLAB Y C; ACTUALMENTE TAMBIÉN ESTOY APRENDIENDO CRYSTAL."
  }
};
var navbar$1 = {
  'navbarProfile': {
    'en': 'PROFILE',
    'es': 'PERFIL'
  },
  'navbarExperience': {
    'en': 'EXPERIENCE',
    'es': 'EXPERIENCIA'
  },
  'navbarProjects': {
    'en': 'PROJECTS',
    'es': 'PROYECTOS'
  },
  'navbarContact': {
    'en': 'CONTACT',
    'es': 'CONTACTO'
  }
};
var experience$1 = {
  'experienceCompany-1': {
    'en': 'DELOITTE',
    'es': 'DELOITTE'
  },
  'experienceDate-1': {
    'en': ' 06/20-TODAY',
    'es': ' 06/20-HOY'
  },
  'experienceRole-1': {
    'en': 'SYSTEMS ENGINEERING ANALYST',
    'es': 'ANALISTA DE INGENIERÍA EN SISTEMAS'
  },
  'experienceDesc-1': {
    'en': 'CURRENTLY WORKING FOR DISNEY; CARRYING OUT AUTOMATION AND MANUAL TESTING, GUARANTEING THE QUALITY OF A MOBILE APPLICATION, ALL THROUGH THE USE OF DIFFERENT TECHNOLOGIES SUCH AS NODEJS, APPIUM AND WEBDRIVERIO. I ALSO MADE AUTOMATION AND MANUAL TESTING FOR TWO DIFFERENT WEB APPLICATIONS, I USED TECHNOLOGIES LIKE JAVA AND SELENIUM.',
    'es': 'ACTUALMENTE TRABAJANDO PARA DISNEY; REALIZANDO AUTOMATIZACIÓN Y PRUEBAS MANUALES, GARANTIZANDO LA CALIDAD DE UNA APLICACIÓN MÓVIL, TODO ESTO MEDIANTE EL USO DE DIFERENTES TECNOLOGÍAS COMO NODEJS, APPIUM Y WEBDRIVERIO. TAMBIÉN HICE AUTOMATIZACIÓN Y PRUEBAS MANUALES PARA DOS DIFERENTES APLICACIONES WEB, UTILICÉ TECNOLOGÍAS COMO JAVA Y SELENIUM.'
  },
  'experienceCompany-2': {
    'en': 'DELOITTE',
    'es': 'DELOITTE'
  },
  'experienceDate-2': {
    'en': ' 02/20-06/20',
    'es': ' 02/20-06/20'
  },
  'experienceRole-2': {
    'en': 'QUALITY ASSURANCE TRAINEE',
    'es': 'BECARIO DE ASEGURAMIENTO DE CALIDAD'
  },
  'experienceDesc-2': {
    'en': 'I LEARNT AUTOMATION TESTING TOOLS SUCH AS SELENIUM AND APPIUM, ISTQB PRINCIPLES, ORAL SPEECH AND COMMUNICATION TECHNIQUES; AND DEVELOPMENT METHODOLOGIES SUCH AS WATERFALL AND SCRUM.',
    'es': 'APRENDÍ HERRAMIENTAS DE PRUEBA DE AUTOMATIZACIÓN COMO SELENIUM Y APPIUM, PRINCIPIOS ISTQB, TÉCNICAS DE HABLA ORAL Y COMUNICACIÓN; Y METODOLOGÍAS DE DESARROLLO COMO WATERFALL Y SCRUM.'
  },
  'experienceCompany-3': {
    'en': 'UNAM-LAVIS',
    'es': 'UNAM-LAVIS'
  },
  'experienceDate-3': {
    'en': ' 09/18-01/20',
    'es': ' 09/18-01/20'
  },
  'experienceRole-3': {
    'en': 'DEVELOPER & RESEARCHER',
    'es': 'DESARROLLADOR E INVESTIGADOR'
  },
  'experienceDesc-3': {
    'en': 'AS PART OF MY SOCIAL SERVICE AND VOLUNTEERING I HAD THE OPPORTUNITY TO DEVELOP 3D VISUALISATION AND IMAGE PROCESSING SOFTWARE RELATED TO NEUROSCIENCE AND BIOMECHANICS USING TECHNOLOGIES SUCH AS UNITY, MATLAB, HTML, CSS, AND JAVASCRIPT.',
    'es': 'COMO PARTE DE MI SERVICIO SOCIAL Y DE VOLUNTARIADO, TUVE LA OPORTUNIDAD DE DESARROLLAR SOFTWARE DE VISUALIZACIÓN 3D Y PROCESAMIENTO DE IMÁGENES RELACIONADO CON NEUROCIENCIA Y BIOMECÁNICA USANDO TECNOLOGÍAS COMO UNITY, MATLAB, HTML, CSS Y JAVASCRIPT.'
  }
};
var projects$1 = {
  'projectDesc-1': {
    'en': 'CHEEMS IS A PROGRAMMING LANGUAGE STILL UNDER CONSTRUCTION AND WRITTEN IN JAVASCRIPT. JUST FOR THE MEMES, IT IS A MEMELANG.',
    'es': 'CHEEMS ES UN LENGUAJE DE PROGRAMACIÓN AÚN EN CONSTRUCCIÓN Y ESCRITO EN JAVASCRIPT. SOLO PARA LOS MEMES, ES UN MEMELANG.'
  },
  'projectDesc-2': {
    'en': 'DUOLINGO KILLER IS AN AUTOMATION WORK CREATED TO BEAT DUOLINGO. WRITTEN IN PYTHON, USING SELENIUM AND THE PAGE OBJECT MODEL DESIGN PATTERN.',
    'es': 'DUOLINGO KILLER ES UN TRABAJO DE AUTOMATIZACIÓN CREADO PARA VENCER A DUOLINGO. ESCRITO EN PYTHON, UTILIZANDO SELENIUM Y EL PATRÓN DE DISEÑO PAGE OBJECT MODEL.'
  },
  'projectDesc-3': {
    'en': 'A SET OF IMAGE PROCESSING ALGORITHMS WRITTEN IN PURE JAVASCRIPT, THESE ALGORITHMS ARE MEANT TO RUN ON WEB BROWSER SINCE WEB CANVAS IS IMPLEMENTED.',
    'es': 'UN CONJUNTO DE ALGORITMOS DE PROCESAMIENTO DE IMÁGENES ESCRITOS EN JAVASCRIPT PURO, ESTOS ALGORITMOS ESTÁN PENSADOS PARA EJECUTARSE EN EL NAVEGADOR WEB PORQUE QUE SE IMPLEMENTA EL WEB CANVAS.'
  }
};

var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    _classCallCheck(this, Navbar);

    this.data = navbar$1;
    this.ui = "<div class=\"window__option\"> <span id=\"navbarProfile\"></span></div><div class=\"window__option\"> <span id=\"navbarExperience\"></span></div><div class=\"window__option\"> <span id=\"navbarProjects\"></span></div><div class=\"window__option\"> <span id=\"navbarContact\"></span></div>";
    this.tabs = {
      profile: null,
      experience: null,
      projects: null,
      contact: null
    };
  }

  _createClass(Navbar, [{
    key: "renderUI",
    value: function renderUI() {
      document.getElementById('navbarOptions').innerHTML = this.ui;
    }
  }, {
    key: "setListeners",
    value: function setListeners() {
      this.tabs.profile = document.getElementById('navbarProfile');
      this.tabs.contact = document.getElementById('navbarContact');
      this.tabs.projects = document.getElementById('navbarProjects');
      this.tabs.experience = document.getElementById('navbarExperience');
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';

      for (var k in this.data) {
        document.getElementById(k).innerText = this.data[k][lang];
      }
    }
  }]);

  return Navbar;
}();

var Profile = /*#__PURE__*/function () {
  function Profile() {
    _classCallCheck(this, Profile);

    this.bar = "<div class=\"window__close\"></div><div class=\"window__title\"><span id=\"windowTitle\"></span></div>";
    this.ui = "<div class=\"content__profile\"><div class=\"profile__info--top\"><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileName\"></span> <span id=\"profileNameContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileNickname\"></span> <span id=\"profileNicknameContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileEducation\"></span> <span id=\"profileEducationContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileLocation\"></span> <span id=\"profileLocationContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileMoreStuff\"></span> <span id=\"profileMoreStuffContent\"></span></div></div></div>";
  }

  _createClass(Profile, [{
    key: "renderUI",
    value: function renderUI() {
      document.getElementById('windowBar').innerHTML = this.bar;
      document.getElementById('windowContent').innerHTML = this.ui;
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';
      document.getElementById('windowTitle').innerHTML = navbar$1.navbarProfile[lang];

      for (var k in profile$1) {
        document.getElementById(k).innerText = profile$1[k][lang];
      }
    }
  }]);

  return Profile;
}();

var Experience = /*#__PURE__*/function () {
  function Experience() {
    _classCallCheck(this, Experience);

    this.bar = "<div class=\"window__close\"></div><div class=\"window__title\"><span id=\"windowTitle\"></span></div>";
    this.ui = "<div class=\"content__experience\"><div class=\"experience__container\"><div class=\"experice__company\"> <span id=\"experienceCompany-1\"></span><span id=\"experienceDate-1\"></span></div><div class=\"experice__role\"> <span id=\"experienceRole-1\"></span></div><div class=\"experice__desc\"> <span id=\"experienceDesc-1\"></span></div></div><div class=\"experience__container\"><div class=\"experice__company\"> <span id=\"experienceCompany-2\"></span><span id=\"experienceDate-2\"></span></div><div class=\"experice__role\"> <span id=\"experienceRole-2\"></span></div><div class=\"experice__desc\"> <span id=\"experienceDesc-2\"></span></div></div><div class=\"experience__container\"><div class=\"experice__company\"> <span id=\"experienceCompany-3\"></span><span id=\"experienceDate-3\"></span></div><div class=\"experice__role\"> <span id=\"experienceRole-3\"></span></div><div class=\"experice__desc\"> <span id=\"experienceDesc-3\"></span></div></div></div>";
  }

  _createClass(Experience, [{
    key: "renderUI",
    value: function renderUI() {
      document.getElementById('windowBar').innerHTML = this.bar;
      document.getElementById('windowContent').innerHTML = this.ui;
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';
      document.getElementById('windowTitle').innerHTML = navbar$1.navbarExperience[lang];

      for (var k in experience$1) {
        document.getElementById(k).innerText = experience$1[k][lang];
      }
    }
  }]);

  return Experience;
}();

var Projects = /*#__PURE__*/function () {
  function Projects() {
    _classCallCheck(this, Projects);

    this.bar = "<div class=\"window__close\"></div><div class=\"window__title\"><span id=\"windowTitle\"></span></div>";
    this.ui = "<div class=\"content__projects\"><div class=\"project__container\"><div class=\"project__name\">CHEEMS LANG <span id=\"projectLang-1\">JAVASCRIPT</span></div><div class=\"project__repo\"><span id=\"projectRepo-1\"><a href=\"https://github.com/cheems-lang/cheems\">GITHUB</a></span></div><div class=\"project__desc\"><span id=\"projectDesc-1\"></span></div></div><div class=\"project__container\"><div class=\"project__name\">DUOLINGO KILLER <span id=\"projectLang-1\">PYTHON</span></div><div class=\"project__repo\"><span id=\"projectRepo-2\"><a href=\"https://github.com/memburg/duolingo-killer\">GITHUB</a></span></div><div class=\"project__desc\"><span id=\"projectDesc-2\"></span></div></div><div class=\"project__container\"><div class=\"project__name\">IMAGE PROCESSING ALGORITHMS <span id=\"projectLang-1\">JAVASCRIPT</span></div><div class=\"project__repo\"><span id=\"projectRepo-3\"><a href=\"https://github.com/memburg/image-processing-algorithms\">GITHUB</a></span></div><div class=\"project__desc\"><span id=\"projectDesc-3\"></span></div></div></div>";
  }

  _createClass(Projects, [{
    key: "renderUI",
    value: function renderUI() {
      document.getElementById('windowBar').innerHTML = this.bar;
      document.getElementById('windowContent').innerHTML = this.ui;
    }
  }, {
    key: "renderData",
    value: function renderData() {
      var lang = ['en', 'es'].includes(localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';
      document.getElementById('windowTitle').innerHTML = navbar$1.navbarProjects[lang];

      for (var k in projects$1) {
        document.getElementById(k).innerText = projects$1[k][lang];
      }
    }
  }]);

  return Projects;
}();

var navbar = new Navbar();
var profile = new Profile();
var experience = new Experience();
var projects = new Projects(); // First render UI

navbar.renderUI();
profile.renderUI();
navbar.renderData();
profile.renderData(); // Set event listeners

navbar.setListeners();
navbar.tabs.profile.addEventListener('click', function () {
  profile.renderUI();
  profile.renderData();
});
navbar.tabs.experience.addEventListener('click', function () {
  experience.renderUI();
  experience.renderData();
});
navbar.tabs.projects.addEventListener('click', function () {
  projects.renderUI();
  projects.renderData();
});
navbar.tabs.contact.addEventListener('click', function () {
  projects.renderUI();
  projects.renderData();
});
