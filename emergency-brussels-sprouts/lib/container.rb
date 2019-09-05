class Container
    attr_reader :container, :weight, :maximum_holding_weight, :ingredients


    def initialize(weight, maxweight)
        @weight = weight
        @maximum_holding_weight = maxweight
        @ingredients = []


end




def fill_with_ingredient(ingredient)
available_space = @maximum_holding_weight - @weight

amtOfIngredients =  available_space/ingredient.weight
while amtOfIngredients > 0
    @ingredients << ingredient
    amtOfIngredients -= 1
    @weight += ingredient.weight
end
end


end
