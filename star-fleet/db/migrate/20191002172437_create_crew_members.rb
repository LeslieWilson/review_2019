class CreateCrewMembers < ActiveRecord::Migration[5.2]
  def change
      create_table :crew_members do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :specialty_division, null: false
      t.belongs_to :ship, null:false
    end
  end
end
