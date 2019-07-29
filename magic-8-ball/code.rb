responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

# Confirm the correct number of responses have been stored by printing the number to the console (`20`)


# puts responses.count

# Ask the user what their question is, and store it as a variable called `question`

#
# puts "what is your question?"
# question = gets.chomp
#
# sample = responses.sample
#
# puts "the answer to #{question} is #{sample}"
#
# Output a random response to the user's question

# Output the number of responses that include the word "yes"

# yeses=0
#
# yesResponses = responses.each do |response|
#      if response.include?("yes") || response.include?('Yes')
#          yeses += 1
#
#
# end
#
# end
#
# puts "the number of responses that include yes is #{yeses}"


# Output the number of responses that include the words "no" or "not"

# nos = 0
#
# noResponses = responses.each do |response|
#     if response.include?("no") || response.include?("not")
#         nos += 1
#
#     end
# end
#
# puts "the number of responses with a no is #{nos}"


# Output the alphabetized list of responses

let sorted = responses.sort()
console.log(`${sorted}`)



# puts responses.sort


# Output the first and last responses from the alphabetized list
# puts responses.shift
# puts responses.pop

# Add 1 response of your choosing to the current list

# newResponse = "hell naw"
# responses << newResponse
# puts responses

# Concat an array of 3 additional responses to the current list
#
# responses += ["NOOO", "NOPE", "NAW"]
#
# puts responses


# Confirm the correct number of responses have been stored by printing the number to the console (`24`)


# puts responses.count
