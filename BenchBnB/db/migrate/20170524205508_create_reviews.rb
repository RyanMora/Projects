class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :body, null: false, default: ""
      t.integer :rating, null: false

      t.timestamps null: false
    end
  end
end
