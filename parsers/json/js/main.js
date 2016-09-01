"use strict";

$(document).ready(function() {

  $(".code-form > textarea").val(`[
    false, true,
    null, 123, -6, 6.022e23, "abc",
    { "xyz": [[]], "def": {} }
]`);

  console.log($("textarea").first().val());

  $(".code-form").submit(function(e) {
    e.preventDefault();
    const query = $(".code-form>textarea").val();
    console.log(query);

    try {
      const tokens = lex(query);
      const ifelse = parse(tokens);
      $(".code-output").text(JSON.stringify(ifelse, null, 4));
      $(".lexer-output").text(tokens.map(t => JSON.stringify(t)).join("\n"));
    } catch (e) {
      $(".code-output").text(e.message);
      $(".lexer-output").empty();
    }
  });

  $(".code-output").empty();
  $(".lexer-output").empty();

});
