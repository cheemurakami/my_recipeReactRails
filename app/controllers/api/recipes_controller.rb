class Api::RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    json_response(recipes)
  end

  def show
    recipe = Recipe.find(params[:id])
    json_response(recipe)
  end

  def create
    recipe = Recipe.create(recipe_params)
    json_response(recipe)
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :number, ingredients_attributes: [:ingredients])
  end
end
