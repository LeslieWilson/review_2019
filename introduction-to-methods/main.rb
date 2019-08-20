# randomly generate a color symbol
require 'colorize'
require 'rubygems'
require 'bundler/setup'


def random_color
    String.colors.sample


#     case rand_num
#     when 1
#         return :green
#     when 2
#         return :blue
#     when 3
#         return :yellow
#     when 4
#         return :orange
#     when 5
#         return :white
# end
end

def randomly_colorize(name)
    puts name.colorize(random_color)
end
puts "whats your name ill colorize"
name = gets.chomp

randomly_colorize(name)




# randomly colorize a string

# randomly colorize each character in a string
