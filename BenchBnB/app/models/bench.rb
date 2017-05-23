class Bench < ApplicationRecord
  validates :description, :lat, :long, presence: true
end
