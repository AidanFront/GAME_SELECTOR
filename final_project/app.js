var _ = require('underscore');
var $ = require('jquery');

$('#find-game-btn').on('click', function() {
	console.log('click function is working')
    $.ajax({
      url: 'http://localhost:3000/request',
      type: 'get',
      data: { body: 
       	$('#no_of_players').val(), 
       	$('#difficulty').val(), 
       	$('#time').val() }
    }).done(function(results) {
      console.log('completed ajax call')

      var resultbox = $("#results-box");

      // Loop to append all results
      for (i = 0; i < results.length; i++) {
      	// div for a single result
      	game_result = $('<div class="game-results">')
      		// Objects keys/values
      		game_result.append($('<p class="gamename">').html(results[i].name));
      		game_result.append($('<p class="players">').html("Players:" + results[i].minplayers + "-" + results[i].maxplayers ));
      		game_result.append($('<p class="playtime">').html("Game Time:" + results[i].playtime));
      		game_result.append($('<p>').html(results[i].name));
      	resultbox.append(game_result);
      }
    });
  });
