"use strict";

$(document).ready(function() {

  $(".ifelse-form > textarea").val(`if(){
  if(){}elseif(){}else{}
}elseif(){
	if(){}else{}
}elseif(){
	if(){}
}else{
  if(){}elseif(){}
}`);

  console.log($("textarea").first().val());

  $(".ifelse-form").submit(function(e) {
    e.preventDefault();
    const query = $(".ifelse-form>textarea").val();
    console.log(query);

    try {
      const tokens = lex(query);
      const ifelse = parse(tokens);
      $(".ifelse-output").text(JSON.stringify(ifelse, null, 4));
      $(".lexer-output").text(tokens.map(t => JSON.stringify(t)).join("\n"));
    } catch (e) {
      $(".ifelse-output").text(e.message);
      $(".lexer-output").empty();
    }
  });

  $(".ifelse-output").empty();
  $(".lexer-output").empty();

});
