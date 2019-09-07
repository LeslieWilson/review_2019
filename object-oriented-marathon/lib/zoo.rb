class Zoo
    attr_accessor  :cages, :employees
    def initialize(name, season_opening_date, season_closing_date)
        @name = name
        @season_opening_date = season_opening_date
        @season_closing_date  = season_closing_date
        @cages = []
        @employees = []

        10.times do
            @cages.push(Cage.new)
        end
    end

    def add_employee(name)
        @employees.push(name)

    end

    def open?(date)
        if date >= @season_opening_date && date <= @season_closing_date
            true
        else
            false
    end

    end

    def add_animal(animal)
        cages.each do |cage|
            if cage.empty?
                cage.animal = animal
            else
                return "Your zoo is already at capacity!"
            end

            return animal
        end
    end
end
