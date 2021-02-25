Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    resources :recipes do
      resources :ingredients
    end
  end
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
