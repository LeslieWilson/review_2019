require 'pry'


available_items = ["old paperback book", "potato", "red onion"]



puts "hey there whats your name?"
name = gets.chomp
puts "ok #{name} heres what you can buy"
available_items.each do |item|
    puts "#{item}"
end
puts "what do you want to buy?"

input= ""


souq_cart = []


while true
    puts "what do  you want to buy? type finished when done"


    input= gets.chomp.downcase

    if input ==  "finished"
        break
    elsif  available_items.include?(input)
        souq_cart << input
    else
        puts "we don't have that item, try again or say finished"


end
end
puts "ok you are buying : "

souq_cart.each do |item|
    puts "* #{item}"
end
