"use strict";

const nameIs = (a) => (b) => {
  return a * b;
};

nameIs(5)(2);
