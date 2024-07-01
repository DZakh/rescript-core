// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Test from "./Test.mjs";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Core__Int from "../src/Core__Int.mjs";
import * as PervasivesU from "rescript/lib/es6/pervasivesU.js";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

var eq = Caml_obj.equal;

function $$catch(f) {
  try {
    f();
    return PervasivesU.failwith("no exception raised");
  }
  catch (raw_err){
    var err = Caml_js_exceptions.internalToOCamlException(raw_err);
    if (err.RE_EXN_ID === Js_exn.$$Error) {
      return err._1;
    }
    throw err;
  }
}

Test.run([
      [
        "IntTests.res",
        13,
        20,
        50
      ],
      "range - positive, increasing"
    ], Core__Int.range(3, 6, undefined), eq, [
      3,
      4,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        14,
        20,
        50
      ],
      "range - negative, increasing"
    ], Core__Int.range(-3, -1, undefined), eq, [
      -3,
      -2
    ]);

Test.run([
      [
        "IntTests.res",
        15,
        20,
        51
      ],
      "range - cross-zero, incresing"
    ], Core__Int.range(-1, 2, undefined), eq, [
      -1,
      0,
      1
    ]);

Test.run([
      [
        "IntTests.res",
        16,
        20,
        42
      ],
      "range - start == end"
    ], Core__Int.range(3, 3, undefined), eq, []);

Test.run([
      [
        "IntTests.res",
        17,
        20,
        50
      ],
      "range - positive, decreasing"
    ], Core__Int.range(3, 1, undefined), eq, [
      3,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        18,
        20,
        50
      ],
      "range - negative, decreasing"
    ], Core__Int.range(-1, -3, undefined), eq, [
      -1,
      -2
    ]);

Test.run([
      [
        "IntTests.res",
        21,
        13,
        51
      ],
      "range - positive, increasing, step 2"
    ], Core__Int.range(3, 6, {
          step: 2
        }), eq, [
      3,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        27,
        13,
        51
      ],
      "range + positive, increasing, step 2"
    ], Core__Int.range(3, 7, {
          step: 2
        }), eq, [
      3,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        33,
        13,
        51
      ],
      "range + positive, increasing, step 2"
    ], Core__Int.range(3, 8, {
          step: 2
        }), eq, [
      3,
      5,
      7
    ]);

Test.run([
      [
        "IntTests.res",
        39,
        13,
        51
      ],
      "range - negative, increasing, step 2"
    ], Core__Int.range(-6, -3, {
          step: 2
        }), eq, [
      -6,
      -4
    ]);

Test.run([
      [
        "IntTests.res",
        45,
        13,
        51
      ],
      "range - positive, increasing, step 0"
    ], $$catch(function () {
          return Core__Int.range(3, 6, {
                      step: 0
                    });
        }), eq, new RangeError("Incorrect range arguments"));

Test.run([
      [
        "IntTests.res",
        50,
        20,
        50
      ],
      "range - start == end, step 0"
    ], Core__Int.range(3, 3, {
          step: 0
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        52,
        13,
        52
      ],
      "range + positive, increasing, step -1"
    ], Core__Int.range(3, 6, {
          step: -1
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        58,
        13,
        51
      ],
      "range + positive, decreasing, step 1"
    ], Core__Int.range(6, 3, {
          step: 1
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        64,
        13,
        52
      ],
      "range + positive, decreasing, step -2"
    ], Core__Int.range(6, 3, {
          step: -2
        }), eq, [
      6,
      4
    ]);

Test.run([
      [
        "IntTests.res",
        70,
        13,
        52
      ],
      "range + positive, increasing, step -2"
    ], Core__Int.range(6, 2, {
          step: -2
        }), eq, [
      6,
      4
    ]);

Test.run([
      [
        "IntTests.res",
        76,
        13,
        52
      ],
      "range + positive, increasing, step -2"
    ], Core__Int.range(6, 1, {
          step: -2
        }), eq, [
      6,
      4,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        82,
        13,
        52
      ],
      "range + negative, decreasing, step -2"
    ], Core__Int.range(-3, -6, {
          step: -2
        }), eq, [
      -3,
      -5
    ]);

Test.run([
      [
        "IntTests.res",
        88,
        13,
        62
      ],
      "range - positive, increasing, step 2, inclusive"
    ], Core__Int.range(3, 6, {
          step: 2,
          inclusive: true
        }), eq, [
      3,
      5
    ]);

Test.run([
      [
        "IntTests.res",
        94,
        13,
        62
      ],
      "range + positive, increasing, step 2, inclusive"
    ], Core__Int.range(3, 7, {
          step: 2,
          inclusive: true
        }), eq, [
      3,
      5,
      7
    ]);

Test.run([
      [
        "IntTests.res",
        100,
        13,
        62
      ],
      "range + positive, increasing, step 2, inclusive"
    ], Core__Int.range(3, 8, {
          step: 2,
          inclusive: true
        }), eq, [
      3,
      5,
      7
    ]);

Test.run([
      [
        "IntTests.res",
        106,
        13,
        62
      ],
      "range - negative, increasing, step 2, inclusive"
    ], Core__Int.range(-6, -3, {
          step: 2,
          inclusive: true
        }), eq, [
      -6,
      -4
    ]);

Test.run([
      [
        "IntTests.res",
        112,
        13,
        62
      ],
      "range - positive, increasing, step 0, inclusive"
    ], $$catch(function () {
          return Core__Int.range(3, 6, {
                      step: 0,
                      inclusive: true
                    });
        }), eq, new RangeError("Incorrect range arguments"));

Test.run([
      [
        "IntTests.res",
        118,
        13,
        54
      ],
      "range - start == end, step 0, inclusive"
    ], Core__Int.range(3, 3, {
          step: 0,
          inclusive: true
        }), eq, [3]);

Test.run([
      [
        "IntTests.res",
        124,
        13,
        63
      ],
      "range + positive, increasing, step -1, inclusive"
    ], Core__Int.range(3, 6, {
          step: -1,
          inclusive: true
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        130,
        13,
        62
      ],
      "range + positive, decreasing, step 1, inclusive"
    ], Core__Int.range(6, 3, {
          step: 1,
          inclusive: true
        }), eq, []);

Test.run([
      [
        "IntTests.res",
        136,
        13,
        63
      ],
      "range + positive, decreasing, step -2, inclusive"
    ], Core__Int.range(6, 3, {
          step: -2,
          inclusive: true
        }), eq, [
      6,
      4
    ]);

Test.run([
      [
        "IntTests.res",
        142,
        13,
        63
      ],
      "range + positive, increasing, step -2, inclusive"
    ], Core__Int.range(6, 2, {
          step: -2,
          inclusive: true
        }), eq, [
      6,
      4,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        148,
        13,
        63
      ],
      "range + positive, increasing, step -2, inclusive"
    ], Core__Int.range(6, 1, {
          step: -2,
          inclusive: true
        }), eq, [
      6,
      4,
      2
    ]);

Test.run([
      [
        "IntTests.res",
        154,
        13,
        63
      ],
      "range + negative, decreasing, step -2, inclusive"
    ], Core__Int.range(-3, -6, {
          step: -2,
          inclusive: true
        }), eq, [
      -3,
      -5
    ]);

Test.run([
      [
        "IntTests.res",
        160,
        20,
        27
      ],
      "clamp"
    ], Core__Int.clamp(undefined, undefined, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        161,
        20,
        35
      ],
      "clamp - < min"
    ], Core__Int.clamp(50, undefined, 42), eq, 50);

Test.run([
      [
        "IntTests.res",
        162,
        20,
        35
      ],
      "clamp - > min"
    ], Core__Int.clamp(40, undefined, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        163,
        20,
        35
      ],
      "clamp - < max"
    ], Core__Int.clamp(undefined, 50, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        164,
        20,
        35
      ],
      "clamp - > max"
    ], Core__Int.clamp(undefined, 40, 42), eq, 40);

Test.run([
      [
        "IntTests.res",
        165,
        20,
        42
      ],
      "clamp - < min, < max"
    ], Core__Int.clamp(50, 60, 42), eq, 50);

Test.run([
      [
        "IntTests.res",
        166,
        20,
        42
      ],
      "clamp - < min, > max"
    ], Core__Int.clamp(50, 40, 42), eq, 50);

Test.run([
      [
        "IntTests.res",
        167,
        20,
        42
      ],
      "clamp - > min, < max"
    ], Core__Int.clamp(40, 60, 42), eq, 42);

Test.run([
      [
        "IntTests.res",
        168,
        20,
        42
      ],
      "clamp - > min, > max"
    ], Core__Int.clamp(40, 40, 42), eq, 40);

Test.run([
      [
        "IntTests.res",
        170,
        20,
        44
      ],
      "Int.equal optimization"
    ], false, eq, false);

export {
  eq ,
  $$catch ,
}
/*  Not a pure module */
