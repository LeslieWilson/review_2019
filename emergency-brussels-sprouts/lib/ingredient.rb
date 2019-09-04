class Ingredient
    attr_reader :name, :weight
    def initialize(name, weight)
        @name = name
        @weight = weight
        @ingredients = []

end

def self.create_from_grams(name, weight)
    newweight = weight/1000
    Ingredient.new(name,newweight)


end

end
