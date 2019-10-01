class CreateShips < ActiveRecord::Migration[5.2]
  def change
      create_table :ships do |t|
      t.string :starship_name, null:false
      t.string :starship_class, null:false
      t.string :starship_location, null:false
  end
end
end
