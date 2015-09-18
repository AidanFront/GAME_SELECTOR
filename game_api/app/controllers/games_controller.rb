class GamesController < ApplicationController

	def result
		games = Game.all
		render json: games.to_json(methods: :reviews)
		# rai
	end

	def gamesreq
		@numplayers = params[:numplayers]
		@numdifficulty = params[:numdifficulty]
        @numtime = params[:numtime]
        @numstrategy = params[:numstrategy]
        @numcost = params[:numcost]
		
		@gameresult = Game.where("maxplayers >= #{@numplayers}")
		@gameresult = @gameresult.where("minplayers <= #{@numplayers}") 
		@gameresult = @gameresult.where("difficulty <= #{@numdifficulty}+1")
		@gameresult = @gameresult.where("gametime <= #{@numtime}+15")
		@gameresult = @gameresult.where("strategy <= #{@numstrategy}+1")
		@gameresult = @gameresult.where("cost < #{@numcost}")

		@bestmatch = []
		@gameresult.each do |item|
			@match = (item.difficulty - @numdifficulty.to_i).abs
			@match = @match  + (item.strategy - @numstrategy.to_i).abs
			@match_hash = { name: item.name, match: @match, popularity: item.popularity }
			@bestmatch.push(@match_hash)
		end

		@data = {
			gameresult: @gameresult,
			bestmatch: @bestmatch
		}
		render json: @data
	end

	def info
		gameinfo = Game.find(params[:id])
		render json: gameinfo.to_json(methods: :reviews)
	end

end