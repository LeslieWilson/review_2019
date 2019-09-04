class Container
    attr_reader :container, :weight, :maximum_holding_weight, :ingredient


    def initialize(weight, maxweight)
        @weight = weight
        @maxweight = maxweight
        @ingredients = []

end


def fill_with_ingredient(ingredient)

    @container += ingredient
end


end
