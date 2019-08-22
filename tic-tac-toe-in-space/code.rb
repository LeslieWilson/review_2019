board_a = [
  ['x', 'o', 'x'],
  ['x', nil, 'o'],
  ['x', 'o', nil]
]


    def print_grid(board)
        separator = "---------------"
        board.each_with_index do |space, index|
            space.each_with_index do |spot, index|

                # puts "#{spot} and #{index}"

                if
                    spot == nil
                    puts "nil"
                    index == 1
                    puts "#{spot}\n"
                elsif
                    index == 2
                    puts "#{spot}\n"
                else
                puts "#{spot}"

            end
        end
    end
end



 # end
 # end
 #
 # puts "#{board[0]} \n"
 # puts separator
 # puts "#{board[1]} \n"
 # puts separator
 # puts "#{board[2]} "
 # end


print_grid(board_a)


# Board.each_with_index do |space, index| if index >1 puts seperater space.each_with_index do |spot,index| if index == 1 print "#(spot) |" etc..... End end
