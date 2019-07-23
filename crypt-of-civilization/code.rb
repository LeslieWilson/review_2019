

crypt = []

crypt  << "comptrom"

crypt << "scales"

crypt <<  "donald duck"

crypt.push("hello dolly")


extra = ["cheese", "chicken"]

crypt =  crypt + extra



# puts crypt.length
# puts crypt.shift
# puts crypt.last
# puts crypt[0]
# puts crypt[-1]
# puts crypt[1]
# puts crypt[2]
# puts crypt[-2]
# puts crypt.index("scales")
#
#
# crypt.sort_by {|i| item.length}
#
# crypt.sort
# crypt.sort_by {|a,b| b <==> a}
#

# count = 0
# while count < crypt.length
#     puts crypt[count]
#     count +=1
# end
#
#
# crypt.each do |i|
#     puts i
# end

crypt.shift
crypt.pop
crypt.delete("hello dolly")
