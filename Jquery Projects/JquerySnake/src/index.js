const View = require('./view');

$(() => {
  const buttons = {
    up: $('#up'),
    down: $('#down'),
    left: $('#left'),
    right: $('#right')
  };

  let view = new View($('#game'), $('#score'), $('#page-title'), buttons);

  $('#new-game').on('click', () => { 
    view.clearView();
    view = new View($('#game'), $('#score'), $('#page-title'), buttons); 
  });
});