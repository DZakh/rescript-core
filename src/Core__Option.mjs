// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

function filter(opt, p) {
  if (opt !== undefined && p(Caml_option.valFromOption(opt))) {
    return opt;
  }
  
}

function forEach(opt, f) {
  if (opt !== undefined) {
    return f(Caml_option.valFromOption(opt));
  }
  
}

function getExn(option) {
  if (option !== undefined) {
    return Caml_option.valFromOption(option);
  } else {
    return Js_exn.raiseError("Option.getExn was called on None");
  }
}

function getExnWithMessage(x, message) {
  if (x !== undefined) {
    return Caml_option.valFromOption(x);
  } else {
    return Js_exn.raiseError(message);
  }
}

function mapOr(opt, $$default, f) {
  if (opt !== undefined) {
    return f(Caml_option.valFromOption(opt));
  } else {
    return $$default;
  }
}

function map(opt, f) {
  if (opt !== undefined) {
    return Caml_option.some(f(Caml_option.valFromOption(opt)));
  }
  
}

function flatMap(opt, f) {
  if (opt !== undefined) {
    return f(Caml_option.valFromOption(opt));
  }
  
}

function getOr(opt, $$default) {
  if (opt !== undefined) {
    return Caml_option.valFromOption(opt);
  } else {
    return $$default;
  }
}

function orElse(opt, other) {
  if (opt !== undefined) {
    return opt;
  } else {
    return other;
  }
}

function isSome(x) {
  return x !== undefined;
}

function isNone(x) {
  return x === undefined;
}

function equal(a, b, eq) {
  if (a !== undefined) {
    if (b !== undefined) {
      return eq(Caml_option.valFromOption(a), Caml_option.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === undefined;
  }
}

function compare(a, b, cmp) {
  if (a !== undefined) {
    if (b !== undefined) {
      return cmp(Caml_option.valFromOption(a), Caml_option.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== undefined) {
    return -1;
  } else {
    return 0;
  }
}

var mapWithDefault = mapOr;

var getWithDefault = getOr;

export {
  filter ,
  forEach ,
  getExn ,
  getExnWithMessage ,
  mapOr ,
  mapWithDefault ,
  map ,
  flatMap ,
  getOr ,
  getWithDefault ,
  orElse ,
  isSome ,
  isNone ,
  equal ,
  compare ,
}
/* No side effect */
