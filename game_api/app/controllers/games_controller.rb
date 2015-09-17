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
		# @gameresult = @gameresult.where("playtime <= #{@numtime}")
		@gameresult = @gameresult.where("strategy <= #{@numstrategy}+1")
		@gameresult = @gameresult.where("cost < #{@numcost}")

		render json: @gameresult
	end

	def info
		gameinfo = Game.find(params[:id])
		render json: gameinfo.to_json(methods: :reviews)
	end

end