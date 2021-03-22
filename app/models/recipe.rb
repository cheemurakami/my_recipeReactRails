class Recipe < ApplicationRecord
  has_many :ingredients
  has_many :directions
  validates :name, presence: true
  accepts_nested_attributes_for :ingredients, :directions
end
