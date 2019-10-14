class Question < ApplicationRecord
    validates :title, presence: true, length: { minimum:2 }
    validates :description, presence: true, length: { minimum: 2 }
    has_many :answers

end
