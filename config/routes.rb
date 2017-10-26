Rails.application.routes.draw do
root 'static_pages#dashboard'

  get 'sessions/new'

  get '/login', to: 'static_pages#login'
  get '/dashboard', to: 'static_pages#dashboard'
  get '/profile', to: 'static_pages#profile'
  get '/settings', to: 'static_pages#settings'
  get '/messenger', to: 'static_pages#messenger'
  get '/signup', to: 'users#new'
  get '/login', to: 'sessions#new'

  get '/index', to: 'static_pages#dashboard'

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users
end
