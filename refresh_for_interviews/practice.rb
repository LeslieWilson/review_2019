# More advanced project: https://learn.launchacademy.com/teams/alumni/curricula/on-campus-boston-26/lesson_groups/week_1:_advanced_oop/lessons/high-card-dealer
#
# Basic objects Ruby:



# Square:
#
# Make a square class that takes the length of a side as the only argument.


# class Square
#   def initialize(length)
#     @length = length
#   end
#
#   def perimeter
#     4*@length
#   end
#
#   def area
#     @length * @length
#   end
#
# end
#
# newsquare = Square.new(5)
#
# puts newsquare.perimeter
# puts newsquare.area




#
# Make a perimeter method that returns the perimeter of the square. 4 * side length


#
# Make an area method that returns the area of the square.
#


class Rectangle
    def initialize(height, width=nil)
      @height = height
      @width = width
      if @width == nil
        @width = @height
    end
  end

    def perimeter
      2*(@height + @width)
    end


    def area
      @height*@width
    end
end

newrec = Rectangle.new(3)
puts newrec.perimeter


#
# Make a rectangle class that takes an optional 2 arguments: height and width - if one argument is given, expect height and width to be the same.
#
# Make a perimeter method that returns the perimeter of the rectangle.

# Make an area method that returns the area of the rectangle.
#
# Reading for javascript:
#
# https://learn.launchacademy.com/teams/alumni/curricula/ignition-boston-26/lesson_groups/week_4:_javascript_and_o_o_p/lessons/intro-to-oop-in-js
#
# Basic Object Javascript:
#
# Make a Leslie object with object literal notation.

let leslie = {
  last_name = "wilson",
  first_name = "leslie",
  height= 56,
  weight= 7709,
 fullname(){
   return this.firstname + " " = this.lastname
 }

}

console.log(leslie)
console.log(leslie.fullname())
#
# Give yourself a first_name and last_name.
#
# Give yourself a height and weight.
#
# Give yourself a function that returns your full name (first name and last name put together) https://learn.launchacademy.com/teams/alumni/curricula/ignition-boston-26/lesson_groups/week_4:_javascript_and_o_o_p/lessons/model-a-person-in-js
#
# Log your height and full name to the console.
#
#
# Square:
#
# Make a square object that has just a side-length.
#
# Give that square a function that computes the area.
#
# Give that square a function that computes the perimeter.
#
# Log the area and perimeter to the console.
#
#
# Something worth reading more advanced javascript looping:
#
# https://learn.launchacademy.com/teams/alumni/curricula/ignition-boston-26/lesson_groups/week_4:_javascript_and_o_o_p/lessons/iterating-with-js-objects
