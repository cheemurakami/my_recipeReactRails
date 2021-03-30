class Api::RecipesController < ApplicationController
  #before_action :authenticate_user!

  def index
    recipes = Recipe.all
    json_response(recipes)
  end

  def show
    recipe = Recipe.find(params[:id])
    recipe_hash = {"name" => recipe.name, "servings" => recipe.number, "ingredients" => recipe.ingredients, "directions" => recipe.directions}
    json_response(recipe_hash)
  end

  def create
    recipe = Recipe.create(recipe_params)
    json_response(recipe)
  end

  def user_recipes
    if current_user
      recipes = current_user.recipes
      json_response(recipes)
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :number, ingredients_attributes: [:ingredients], directions_attributes: [:index, :description], user_id: current_user.id)
  end
end
