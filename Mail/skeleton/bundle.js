/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

let Router = __webpack_require__(1);
let Compose = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./compose\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let Inbox = __webpack_require__(2);
let Sent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./sent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

let routes = {
  compose: Compose,
  inbox: Inbox,
  sent: Sent
}

document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  router = new Router(content, routes);
  router.start();
  window.location.hash = '#inbox';
  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      let name = navItem.innerText.toLowerCase();
      location.hash = name;
    });
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Router {
  constructor(node, routes){
    this.node = node;
    this.routes = routes;
  }

  start(){
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render(){
    this.node.innerHTML = "";
    let component = this.activeRoute();
    if(component){
      this.node.appendChild(component.render());
    }
  }

  activeRoute(){
    let hash = window.location.hash.substr(1);
    let component = this.routes[hash];
    return component;
  }
}

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const MessageStore = __webpack_require__(3);

module.exports = {
  renderMessage(message){
    let messageEl = document.createElement("li");
    messageEl.className = "message";
    messageEl.innerHTML = `
    <span class="from">${message.from}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `;
    return messageEl;
  },
  render(){
    let container = document.createElement("ul");
    container.className = "messages";
    let messages = MessageStore.getInboxMessages();
    messages.forEach(message => {
      container.appendChild(this.render(message));
    });
    return container;
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const user = "2cool4u123@gmail.com";

class Message {
  constructor(from = user, to = "", subject = "", body = ""){
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

let messages = JSON.parse(localStorage.getItem('messages'));
let messageDraft = new Message();

if(!messages){
  messages = {
    sent: [
      {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
      {to: "person@mail.com", subject: "Questionaire", body: "Take this free quiz win $1000 dollars"}
    ]
  };
}

const MessageStore = {
  getInboxMessages(){
    return messages.inbox.slice();
  },
  getInboxMessages(){
    return messages.sent.slice();
  },
  getMessageDraft(){
    return messageDraft;
  },
  sendDraft(){
    messages.sent.push(messageDraft);
    messageDraft = new Message();
    localStorage.setItem('messages', JSON.stringify(messages));
  },
  updateDraftField(field, value){
    messageDraft[field] = value;
  }
};

module.exports = MessageStore;


/***/ })
/******/ ]);