class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
        t.belongs_to :question, null:false
        t.string :description, null:false

        t.timestamps
    end
  end
end
