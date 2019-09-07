class Cage
    attr_accessor :animal
    def initialize
        @animal = nil
end

def empty?
    if @animal == nil
        true
    else
        false

    end
end

end
