Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    resources :recipes do
      resources :ingredients
    end
  end
  root 'homepage#index'

  # IMPORTANT #
  # This `match` must be the *last* route in routes.rb 
  # This sends to react app where react router will choose the component(Not rails routes!)'homepage#index' => index.html.erb empty page(This is where react lives)
  match '*path', to: 'homepage#index', via: :all
end
