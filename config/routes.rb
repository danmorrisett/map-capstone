Rails.application.routes.draw do

    root 'states#index'
    get 'auth/twitter/callback', to: 'sessions#create'
    get 'signout', to: 'sessions#destroy', as: 'signout'
    get 'auth/failure', to: redirect('/')
    post 'index', to: 'states#index'


  resources :maps
  end
