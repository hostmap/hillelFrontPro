"use strict";

const nameIs = (a) => (b) => {
  return a * b;
};

nameIs(2)(3);
