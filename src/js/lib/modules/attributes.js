import $ from "../core";

$.prototype.setAttr = function (attributeName, definition) {
  for (let i = 0; i < this.length; i++) {
    if (!attributeName) {
      return this;
    }
    this[i].setAttribute(attributeName, definition);
  }
  return this;
};

$.prototype.removeAttr = function (attributeName) {
  for (let i = 0; i < this.length; i++) {
    if (!attributeName) {
      return this;
    }
    this[i].removeAttribute(attributeName);
  }
  return this;
};
$.prototype.getAttr = function (attributeName) {
  for (let i = 0; i < this.length; i++) {
    if (!attributeName) {
      return this;
    }
    return this[i].getAttribute(attributeName);
  }
  return this;
};

$.prototype.toggleAttr = function (attributeName, definition) {
  for (let i = 0; i < this.length; i++) {
    if (!attributeName) {
     return this;
    }
    if (this[i].hasAttribute(attributeName)) {
      this[i].removeAttribute(attributeName);
    } else {
      this[i].setAttribute(attributeName, definition);
    }
  }
  return this;
};