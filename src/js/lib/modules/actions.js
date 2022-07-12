import $ from "../core";

$.prototype.html = function(content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

$.prototype.eq = function(i) {
  let swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
};

$.prototype.index = function() {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  const  findMyindex = (item) => {
    return item == this[0];
  };
  return childs.findIndex(findMyindex);
};

$.prototype.find = function(selector) {
  let numbersOfItems = 0; 
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }
    numbersOfItems += arr.length;
  }

  this.length = numbersOfItems;
  const objLength = Object.keys(this).length;

  for (; numbersOfItems < objLength; numbersOfItems++) {
    delete this[numbersOfItems];
  }
  return this;
};

$.prototype.closest = function(selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    if (!this[i].closest(selector)) {
      continue;
    }
    this[i] = this[i].closest(selector);
    counter++;
  }
  if (counter == 0) {
    return this;
  }
  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  return this;
};

$.prototype.siblings = function() {
  let numbersOfItems = 0;
  let counter = 0;

  const copyObj = Object.assign({}, this);

  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    
    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      this[counter] = arr[j];
      counter++;
    }
    numbersOfItems += arr.length - 1;
  }

  this.length = numbersOfItems;
  const objLength = Object.keys(this).length;

  for (; numbersOfItems < objLength; numbersOfItems++) {
    delete this[numbersOfItems];
  }
  return this;
};