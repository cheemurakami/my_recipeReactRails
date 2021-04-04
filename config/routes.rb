Rails.application.routes.draw do
  devise_for :users
  
  devise_scope :user do
    get "/signed_in" => "sessions#signed_in"
  end

  namespace :api do
    resources :recipes do
      resources :ingredients
    end
    resources :likes, only: [:create, :destroy]
  end

  get "api/user_recipes" => "api/recipes#user_recipes"

  root 'homepage#index'

  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb 
  # This sends to react app where react router will choose the component(Not rails routes!)'homepage#index' => index.html.erb empty page(This is where react lives)
  match '*path', to: 'homepage#index', via: :all
end
