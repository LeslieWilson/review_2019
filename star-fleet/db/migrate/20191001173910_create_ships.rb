class CreateShips < ActiveRecord::Migration[5.2]
def change
    create_table :ships do |t|
    t.string :name
    t.string :location
    t.string :ship_class
  end
end
end
