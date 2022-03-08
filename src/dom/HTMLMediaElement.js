import HTMLElement from "./HTMLElement";

global.HTMLMediaElement = global.HTMLMediaElement || window.HTMLMediaElement || class HTMLMediaElement extends HTMLElement {
  constructor() {
    super();
    throw new TypeError("Illegal constructor");
  }
};

export default class HTMLMediaElement extends global.HTMLMediaElement {}
