class Bench < ActiveRecord::Base
  validates :description, :lat, :long, presence: true

  has_many :reviews
  has_many :favorites
  has_many :favorite_users,
    through: :favorites,
    source: :user

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:long])
        .where("long < ?", bounds[:northEast][:long])
  end

  def average_rating
    reviews.average(:rating)
  end
end
