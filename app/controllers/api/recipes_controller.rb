class Api::RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    json_response(recipes)
  end
end
