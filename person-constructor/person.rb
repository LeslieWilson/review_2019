class Person
    def initialize(name, last_name = nil)

        if last_name.nil?
            full_name = name.split


        @first_name = full_name[0]

        @last_name = full_name[1]
    else
        @first_name = name
        @last_name = last_name
    end

    end
end

Person.new('leslie','wilson')
