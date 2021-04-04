class Recipe < ApplicationRecord
  has_many :ingredients
  has_many :directions
  has_many :likes
  has_many :users, :through => :likes
  validates :name, presence: true
  accepts_nested_attributes_for :ingredients, :directions 
end
