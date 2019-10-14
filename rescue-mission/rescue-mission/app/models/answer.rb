class Answer < ApplicationRecord
    validates :description, presence:true, length: { minimum:2 }
    belongs_to :question
end
