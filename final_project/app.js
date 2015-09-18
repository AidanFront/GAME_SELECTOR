var _ = require('underscore');
var $ = require('jquery');

$('#find-game-btn').on('click', function() {
	console.log('click function is working')
    $.ajax({
      url: 'http://localhost:3000/gamesreq',
      type: 'post',
      data: {  
       	numplayers: $('#no_of_players').val(),
        numdifficulty: $('#difficulty').val(),
        numtime: $('#time').val(),
        numstrategy: $('#strategy').val(),
        numcost: $('#cost').val()
      }
    }).done(function(results) {
      console.log('completed ajax call')

      var resultbox = $("#results-box");

      // Loop to append all results
      for (i = 0; i < results.length; i++) {
      	// div for a single result
      	game_result = $('<div class="game-results">')
      		// Objects keys/values
      		game_result.append($('<p class="gamename">').html(results[i].name));
      		game_result.append($('<p class="players gamedetails">').html("Players:" + results[i].minplayers + "-" + results[i].maxplayers ));
      		game_result.append($('<p class="difficulty gamedetails">').html("Difficulty:" + results[i].difficulty ));
          game_result.append($('<p class="strategy gamedetails">').html("strategy:" + results[i].strategy ));
          game_result.append($('<p class="cost gamedetails">').html("Cost:" + results[i].cost ));
          game_result.append($('<p class="popularity gamedetails">').html(results[i].popularity ));
          game_result.append($('<p class="gametime gamedetails">').html("Game Time:" + results[i].gametime));
          game_result.append($('<img class="image gamedetails" src="' + results[i].image + '">'));

        resultbox.append(game_result);
        // location.reload();
      }
    });
  });

// $('#review-btn').on('click', function() {
// 	console.log('click function is working')
//     $.ajax({
//       url: 'http://localhost:3000/request',
//       type: 'post',
//       data: { body: 
//        	$('#no_of_players').val(), 
//        	$('#difficulty').val(), 
//        	$('#time').val() }
//     }).done(function(results) {
//       console.log('completed ajax call')

//       var resultbox = $("#results-box");

//       // Loop to append all results
//       for (i = 0; i < results.length; i++) {
//       	// div for a single result

//       	resultbox.append(game_result);
//       }
//     });
//   });
