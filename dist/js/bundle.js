'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var profile$1 = {
  'profileName': {
    'en': 'name',
    'es': 'nombre'
  },
  'profileNameContent': {
    'en': 'Rubén Andrés Mendoza Burgos',
    'es': 'Rubén Andrés Mendoza Burgos'
  },
  'profileLocation': {
    'en': 'location',
    'es': 'localización'
  },
  'profileLocationContent': {
    'en': 'Querétaro',
    'es': 'Querétaro'
  },
  'profileNickname': {
    'en': 'nickname',
    'es': 'apodo'
  },
  'profileNicknameContent': {
    'en': 'Ramb Memburg',
    'es': 'Ramb Memburg'
  },
  'profileEducation': {
    'en': 'education',
    'es': 'educación'
  },
  'profileEducationContent': {
    'en': 'AUTONOMOUS UNIVERSITY OF QUERÉTARO',
    'es': 'UNIVERSIDAD AUTÓNOMA DE QUERÉTARO'
  },
  'profileWorkingAt': {
    'en': 'working at',
    'es': 'trabajando en'
  },
  'profileWorkingAtContent': {
    'en': 'deloitte',
    'es': 'deloitte'
  },
  'profileRole': {
    'en': 'role',
    'es': 'rol'
  },
  'profileRoleContent': {
    'en': 'systems engineering analyst',
    'es': 'analista de ingeniería de sistemas'
  },
  'profileMoreStuff': {
    'en': 'more stuff',
    'es': 'más cosas'
  },
  'profileMoreStuffContent': {
    'en': "I'M PASSIONATE ABOUT SCIENCE AND TECHNOLOGY, I ALWAYS WANT TO LEARN NEW THINGS. I LIKE ATHLETICS AND PLAYING VIDEOGAMES. SOME PROGRAMMING LANGUAGES I LIKE AND I FEEL COMFORTABLE WITH ARE JAVASCRIPT, PYTHON, MATLAB, AND C; ALSO I'M CURRENTLY LEARNING CRYSTAL.",
    'es': "SOY APASIONADO POR LA CIENCIA Y LA TECNOLOGÍA, SIEMPRE QUIERO APRENDER COSAS NUEVAS. ME GUSTA EL ATLETISMO Y JUGAR VIDEOJUEGOS. ALGUNOS LENGUAJES DE PROGRAMACIÓN QUE ME GUSTAN Y CON LOS QUE ME SIENTO CÓMODO SON JAVASCRIPT, PYTHON, MATLAB Y C; ACTUALMENTE TAMBIÉN ESTOY APRENDIENDO CRYSTAL."
  }
};
var navbar$1 = {
  'navbarProfile': {
    'en': 'profile',
    'es': 'perfil'
  },
  'navbarExperience': {
    'en': 'experience',
    'es': 'experiencia'
  },
  'navbarProjects': {
    'en': 'projects',
    'es': 'proyectos'
  },
  'navbarContact': {
    'en': 'contact',
    'es': 'contacto'
  }
};

var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    _classCallCheck(this, Navbar);

    this.data = navbar$1;
    this.ui = "<div class=\"window__option\"> <span id=\"navbarProfile\"></span></div><div class=\"window__option\"> <span id=\"navbarExperience\"></span></div><div class=\"window__option\"> <span id=\"navbarProjects\"></span></div><div class=\"window__option\"> <span id=\"navbarContact\"></span></div>";
  }

  _createClass(Navbar, [{
    key: "renderUI",
    value: function renderUI() {
      document.getElementById('navbarOptions').innerHTML = this.ui;
    }
  }, {
    key: "renderData",
    value: function renderData(lang) {
      for (var k in this.data) {
        document.getElementById(k).innerText = this.data[k][lang].toUpperCase();
      }
    }
  }]);

  return Navbar;
}();

var Profile = /*#__PURE__*/function () {
  function Profile() {
    _classCallCheck(this, Profile);

    this.data = profile$1;
    this.ui = "<div class=\"content__profile\"><div class=\"profile__wrapper\"><div class=\"profile__photo\"> <img src=\"./static/img/me.png\"></div><div class=\"profile__info--top\"><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileName\"></span> <span id=\"profileNameContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileLocation\"></span> <span id=\"profileLocationContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileNickname\"></span> <span id=\"profileNicknameContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileWorkingAt\"></span> <span id=\"profileWorkingAtContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileRole\"></span> <span id=\"profileRoleContent\"></span></div><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileEducation\"></span> <span id=\"profileEducationContent\"></span></div></div></div><div class=\"profile__info--bottom\"><div class=\"info__line\"> <span class=\"info__line--property\" id=\"profileMoreStuff\"></span> <span id=\"profileMoreStuffContent\"></span></div></div></div>";
  }

  _createClass(Profile, [{
    key: "renderUI",
    value: function renderUI() {
      document.getElementById('windowContent').innerHTML = this.ui;
    }
  }, {
    key: "renderData",
    value: function renderData(lang) {
      for (var k in this.data) {
        if (k.includes('Content')) {
          document.getElementById(k).innerText = this.data[k][lang].toUpperCase();
        } else {
          document.getElementById(k).innerText = "".concat(this.data[k][lang].toUpperCase(), ":");
        }
      }
    }
  }]);

  return Profile;
}();

var navbar = new Navbar();
var profile = new Profile(); // First render UI

navbar.renderUI();
profile.renderUI(); // Then render data based on selected language

switch (localStorage.getItem('lang')) {
  case 'en':
    navbar.renderData('en');
    profile.renderData('en');
    break;

  case 'es':
    navbar.renderData('es');
    profile.renderData('es');
    break;

  default:
    navbar.renderData('en');
    profile.renderData('en');
    break;
}
