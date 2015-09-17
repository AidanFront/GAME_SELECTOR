Rails.application.routes.draw do

  #Get/put commant    # controller : action
  get '/result' => 'games#result'

  get '/game/:id' => 'games#info'

  post '/gamesreq' => 'games#gamesreq'

  resources :games
  resources :reviews
end
