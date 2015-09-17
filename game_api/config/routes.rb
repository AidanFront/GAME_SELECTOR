Rails.application.routes.draw do

  #Get/put commant    # controller : action
  get '/result' => 'games#result'

  get '/game/:id' => 'games#info'

  get '/request' => 'games#result'

  resources :games
  resources :reviews
end
