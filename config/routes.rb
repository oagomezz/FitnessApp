Rails.application.routes.draw do
  resources :exercises
  devise_for :users
  resources :workouts
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
