transactions = [50_000, -2_000, -25_000, 4_000, -12_000, 5_000, -800, -900, 43_000, -30_000, 15_000, 62_000, -50_000, 42_000]

# Write Ruby code to find out the answers to the following questions. Be sure to make sure that your output and format matches what is given on the assignment page:

# * What is the value of the first transaction?
puts "The first transaction is: #{transactions.first}"


# * What is the value of the second transaction?
puts "The second transaction is:#{transactions[1]}"

# * What is the value of the fourth transaction?
puts "The fourth transaction is:#{transactions[3]}"

# * What is the value of the last transaction?
puts "The last transaction is:
#{transactions[-1]}"

# * What is the value of the second from last transaction?
puts "The second from the last transaction is:#{transactions[-2]}"

# * What is the value of the 5th from last transaction?
puts "The fifth from the last transaction is:#{transactions[-5]}"

# * What is the value of the transaction with index 5?
puts "The transaction with the index of 5 is:#{transactions[5]}"

# * How many transactions are there in total?
puts "The total number of transactions is: #{transactions.length}"

# * How many positive transactions are there in total?

positiveTransaction = 0
transactions.each do|transaction|
    if transaction > 0
        positiveTransaction += 1
    end
end

puts "The total number of positive transactions is:#{positiveTransaction}"

# * How many negative transactions are there in total?

negativeTransactions = 0
transactions.each do |transaction|
    if transaction < 0
        negativeTransactions +=1
    end
end
puts "The total number of negative transactions is:#{negativeTransactions}"

# * What is the largest withdrawal?

puts "The largest withdrawal is:#{transactions.min}"

# * What is the largest deposit?
puts "The largest deposit is:#{transactions.max}"

# * What is the smallest withdrawal?
array = []
transactions.each do |transaction|
    if transaction < 0
        array << transaction

    end
end
puts "The smallest withdrawal is:#{array.sort[-1]}"

# * What is the smallest deposit?
array = []
transactions.each do |transaction|
    if transaction > 0
        array << transaction
    end
end
puts "The smallest deposit is:#{array.sort[0]}"



# * What is the total value of all the transactions?
total = 0
transactions.each do |transaction|
    total += transaction
end
puts "The total value of all the transactions is:#{total}"

# * If Dr. Dre's initial balance was $239,900 in this account, what is the value of his balance after his all of the transactions in our transactions array have been run?
sum = 239900
transactions.each do |transaction|
    sum += transaction
end




puts "Dr. Dre's balance is:#{sum}"

best_records = {
 "Tupac"=>"All Eyez on Me",
 "Eminem"=>"The Marshall Mathers LP",
 "Wu-Tang Clan"=>"Enter the Wu-Tang (36 Chambers)",
 "Led Zeppelin"=>"Physical Graffiti",
 "Metallica"=>"The Black Album",
 "Pink Floyd"=>"The Dark Side of the Moon",
 "Pearl Jam"=>"Ten",
 "Nirvana"=>"Nevermind"
 }

# Write Ruby code to find out the answers to the following questions:

# * How many records are in `best_records`?

puts "Total records: #{best_records.length}"

# * Who are all the artists listed?
puts "All of the artists:#{best_records.keys}"

# * What are all the album names in the hash?
puts "All of the albums:#{best_records.values}"

# * Delete the `Eminem` key-value pair from the list and print an updated list of just the artists.



best_records.delete("Eminem")
puts "List of artists with Eminem deleted: #{best_records}"

# * Add your favorite musician and their best album to the list and print an updated list of all the artists and albums:

best_records["shakira"]="hips don't lie"
puts "My favorite musician added:#{best_records}"

# * True or False: `Nirvana` is included in `best_records`
puts "True or False: `Nirvana` is included:#{best_records.has_key?("Nirvana")}"


# * Change `Nirvana`'s album to another and then print the updated list of Artists and Albums.

best_records['Nirvana']="the walking of my feet"
puts "Nirvana's album updated:#{best_records}"

# * True or False: `Soundgarden` is included in `best_records`?
puts "True or False: `Soundgarden` is included:#{best_records.include?("Soundgarden")}"

# * If `Soundgarden` is not in `best_records` then add a key-value pair for the band and then print the updated list of Artists and Albums.

best_records['soundgarden']="my stupid sunny days"
puts "Soundgarden added if it's not already there:#{best_records} "

# * Which key-value pairs have a key that has a length less than or equal to 6 characters?


keys = best_records.keys
sum = 0
keys.each do |key|
    if key.length <= 6
        sum += 1
    end
end

puts "key-value pairs have a key that has a length less than or equal to 6 characters: #{sum}"




# * Which key-value pairs have a value that is greater than 10 characters?

values = best_records.values
sum = 0
values.each do |value|
    if value.length > 10
        sum += 1
    end
end


puts "key-value pairs have value that has a length greater than 10 characters:#{sum}"
