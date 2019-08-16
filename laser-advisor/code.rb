# your code, here
hash= {blaster:200,
helium_neon:180,
nuclear_pumped: 170,
krypton:170,
co2:160,
coil:150,
strontium_vapor:140,
ruby:130,
xenon_ion:120,
free_electron:110,
gas_dynamic:95,
nitrogen:0}

puts "how far are you?"
array = []
distance = gets.chomp.to_i
hash.each do |key, value|
if value < distance
        array << value
end
# puts "use the #{laser}!"
end

largestValue= array.max
puts "use the #{hash.key(largestValue)}!".gsub("_", " ")
