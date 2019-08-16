#  Write Ruby<->English answers here as comments in your code

# 1)
# * numbers is an array
# numbers.each do |number|
#   puts 3 * number
# end

# -For every element called 'number' in the array 'numbers', print out 'number multiplied by three'

# 2)
# * names is an array
# names.each do |name|
#   puts name.length
# end

# -For every element called 'name' in the array 'names' print out the number of letters found in name

# 3)
# * numbers is an array
# sum = 0
# numbers.each do |number|
#   sum += number
# end
# puts sum

# -Keep a sum that starts at zero, and
# for every element called 'number' in the array 'numbers' print out that number added to a sum. when there are no more numbers print the sum of all the numbers.

# 4)
# * hash is a hash
# hash.each do |name, age|
#   puts "#{name} is #{age} years old."
# end

# -For every value called 'name' and every key called 'age' in the hash  'hash', print a sentence that interpolates each name and age pair found in the hash. for example a list of sentences like 'leslie is 13 years old', 'johnny is 12 years old', etc.

# 5)
# * account is a hash
# sum = 0
# account.each do |transaction, value|
#   sum += value
# end
# puts "The value the account is #{sum}"


# First start a sum at 0. For every key 'transaction' with a value 'value' in the hash 'account', add the value to the sum, and print a sentence that says 'the value of the account is (whatever the sum of all transaction values is)'

# 6)
# * addresses is a hash
# addresses.each do |name, address|
#   puts "#{name} lives on #{address}"
# end

# -For every  key 'name' and every value 'address' in the hash 'addresses', print a sentence that interpolates the printed names and addresses.

# Write Ruby code to find out the answers to the following questions:
array = [28214, 63061, 49928, 98565, 31769, 42316, 23674, 3540, 34953, 70282, 22077, 94710, 50353, 17107, 73683, 33287, 44575, 83602, 33350, 46583]

# * What is the sum of all the numbers in `array`?

sum = 0
array.each do |number|
    sum += number
end
puts "your sum is #{sum}"

# * How would you print out each value of the array?

array.each do |value|
    puts value
end

# * What is the sum of all of the even numbers?
sum = 0
array.each do |number|
    if number % 2 == 0
        sum +=  number
    end
end

    puts ("your sum of even numbers is #{sum}")

# * What is the sum of all of the odd numbers?

sum = 0
array.each do|number|
    if number % 2 != 0
        sum += number
    end
end
puts ("your sum of odd numbers is #{sum}")
# * What is the sum of all the numbers divisble by 5?

sum = 0
array.each do |number|
    if number %5 == 0
        sum += number
    end
end
puts ("your sum of numbers divisible by 5 is #{sum}")


# * What is the sum of the squares of all the numbers in the array?
sum = 0
array.each do |number|
    square = number * number
    sum += square
end
puts ("your sum of squares is #{sum}")
# Write Ruby code using .each to build the described code. You can create your own data if you want to test it out in irb!

# * For every element 'phone_number' in the array 'phone_numbers' print out the phone number if it is a MA area code.
    ma_area_codes = [617, 508, 857]
    phone_numbers = [6175556789, 5088471234, 4132345678, 6174329876, 8575557777, 1235434545]
#

    codesString =ma_area_codes.to_s

    phone_numbers.each do |number|
    ma_area_codes.each do |code|
    if number.to_s.include?(code.to_s)
            puts ("#{number}")

        end
    end
end

array2 = ["joanie", "annamarie", "muriel", "drew", "reva", "belle", "amari", "aida", "kaylie", "monserrate", "jovan", "elian", "stuart", "maximo", "dennis", "zakary", "louvenia", "lew", "crawford", "caitlyn"]

# Write Ruby code to find out the answers to the following questions:

# * How would you print out each name backwards in `array`?

array2.each do|name|
    puts name.reverse
end

# * What are the total number of characters in the names in `array`?
sum = 0
array2.each do |name|
    characters = name.length
    sum += characters
end

puts ("sum of characters is #{sum}")

# * How many names in `array` are less than 5 characters long?
sum = 0
array2.each do |name|
    if name.length < 5
        sum += 1
    end
end
puts ("#{sum} names have less than five characters")

# * How many names in `array` end in a vowel?

sum = 0
array2.each do |name|
    lastLetter = name[-1]
    if lastLetter == "a" || lastLetter == "e" ||lastLetter =="i" || lastLetter== "o" || lastLetter == "u"
        sum += 1

end
end
puts ("#{sum} is how many end in a vowel")
# * How many names in `array` are more than 5 characters long?
sum = 0
array2.each do |name|
    if name.length > 5
        sum += 1
end
end

puts ("#{sum} is the names with more than 5 characters")


# * How many names in `array` are exactly 5 characters in length?

sum = 0

array2.each do |name|
    if name.length === 5
        sum += 1
    end
end
puts  ("#{sum} is the number of names exactly 5 characters in length")
