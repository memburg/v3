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

var Profile = /*#__PURE__*/function () {
  function Profile() {
    _classCallCheck(this, Profile);

    this.data = profile$1;
  }

  _createClass(Profile, [{
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

var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    _classCallCheck(this, Navbar);

    this.data = navbar$1;
  }

  _createClass(Navbar, [{
    key: "renderData",
    value: function renderData(lang) {
      for (var k in this.data) {
        document.getElementById(k).innerText = this.data[k][lang].toUpperCase();
      }
    }
  }]);

  return Navbar;
}();

var profile = new Profile();
var navbar = new Navbar();

switch (localStorage.getItem('lang')) {
  case 'en':
    profile.renderData('en');
    navbar.renderData('en');
    break;

  case 'es':
    profile.renderData('es');
    navbar.renderData('es');
    break;

  default:
    profile.renderData('en');
    break;
}
