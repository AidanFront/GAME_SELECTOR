class GamesController < ApplicationController

	def result
		games = Game.all
		render json: games.to_json
	end

	def info
		gameinfo = Game.find(params[:id])
		render json: gameinfo.to_json(methods: :reviews)
	end

end