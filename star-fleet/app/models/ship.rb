class Ship < ActiveRecord::Base
    has_many :crewmembers
end
