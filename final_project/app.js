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

      // Append item
      var append_result = function(result) {
        game_result = $('<div class="game-results">')
        game_result.append($('<p class="gamename">').html(result[0].name));
        game_result.append($('<p class="players gamedetails">').html("Players: " + result[0].minplayers + "-" + result[0].maxplayers ));    
        game_result.append($('<p class="difficulty gamedetails">').html("Difficulty: " + result[0].difficulty ));
        game_result.append($('<p class="strategy gamedetails">').html("strategy: " + result[0].strategy ));
        game_result.append($('<p class="cost gamedetails">').html("Cost: $" + result[0].cost ));
        game_result.append($('<p class="gametime gamedetails">').html("Game Time: " + result[0].gametime + "mins"));
        game_result.append($('<p class="popularity gamedetails">').html(result[0].popularity ));
        game_result.append($('<img class="image" src="' + result[0].image + '">'));
        resultbox.append(game_result);
      };

        var BestMatch_array = []

        var lowestmatch_num = 0
        var MatchName = ""

      // Find the lowest match number and add to bestmatch_array
      var make_array = function(lowestmatch_num, MatchName, loc_key) {
        for (i = 0; i < results.bestmatch.length ;i++ ) {

            // if I find a match with less use that 
            if (lowestmatch_num > results.bestmatch[i].match) {
              lowestmatch_num = results.bestmatch[i].match;
              MatchName = results.bestmatch[i].name;
              loc_key = i;
            };
        };
        results.bestmatch.splice(loc_key,1);
        BestMatch_array.push(MatchName);
        // send it back to next best match item
        if (results.bestmatch.length > 0) {
          findbestmatch();
        }
      }

      // Go through each item in the bestmatch hash
      var findbestmatch = function() {
        lowestmatch_num = results.bestmatch[0].match; //Start with first entry
        MatchName = results.bestmatch[0].name; 
        loc_key = 0;
        make_array(lowestmatch_num, MatchName, loc_key);
      };
      
      // Make the array of best match
      findbestmatch()
        
      // Append result in order of best match
      for (i = 0 ; i < results.gameresult.length; i++) {
        MatchName =BestMatch_array[i];
        var result = $.grep(results.gameresult, function(e){ return e.name == MatchName ; });
        append_result(result)
      };

      // Put up title
      resultTitle = document.getElementById("results-line");
      resultTitle .className = "";

    });
  });
