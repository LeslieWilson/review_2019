# numbers = [1,2,4]
#
# numbers.each { |n| puts n}
#
#
# hash = {bacon:300, coconut:200}
#
# hash.each{ |key,value| puts "#{key} price is #{value}"}
#
#
# animals = ["cat", "bird", "mouse"]
#
# animals.each_with_index { |animal, idx| puts "we have an #{animal} with index #{idx}"}
#
#
# 20.times { puts "hello"}
#
# 10.times { |i| puts "hello #{i}"}
#
# (1..10).each {  |i| puts i}
#
#
# n = 0
#
# while n < 10
#   puts n
#   n+=1
# end
#
#
# bottle = 0
# until bottle == 10
#   bottle += 1
# end
#
# 10.times do |i|
#   next unless i.even?
#   puts "hello #{i}"
# end
#
#
# (0...10).select(&:even?)
#
# numbers = [1,3,2,4,3]
#
# numbers.each do |n|
#   break if n > 10
#   puts n
#   end
#
#   1.upto(5) { |i| puts i}

def fizz_buzz(n)

(1..n).each_with_index do |n, idx|
  if n % 5 == 0
    puts "fizzbuzz"
    elsif n.odd?
    puts "fizz"
  elsif n.even?
      puts "buzz"

end
end
end


fizz_buzz(30)
