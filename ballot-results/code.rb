require 'pry'
vote_results =
  {
    "Precinct 1" => {
      'Mary Sue' => 218,
      'Sally Jane' => 455,
      'Billy Joe' => 185
    },
    "Precinct 2" => {
      'Mary Sue' => 229,
      'Sally Jane' => 41,
      'Billy Joe' => 35
    },
    "Precinct 3" => {
      'Mary Sue' => 297,
      'Sally Jane' => 423,
      'Billy Joe' => 488
    },
    "Precinct 4" => {
    'Mary Sue' => 283,
    'Sally Jane' => 171,
    'Billy Joe' => 353
    }
  }

  # 1) Generate the voting totals by Precinct and Candidate as shown in the directions.

vote_results.each do |key, value|
    precinct = "#{key}"
    puts  "\n** In #{precinct}**"
    value.each do |key, value|
        person  = "#{key}"
        numberVotes = "#{value}"
        puts "#{person} got #{value} votes"
end
end


  # 2) How many people voted in each precinct? Create a new hash where the keys name the precinct and the values start at 0. Iterate over the provided `vote_results` to update the totals.


vote_totals = {"Precinct 1" => 0, "Precinct 2" => 0, "Precinct 3" => 0, "Precinct 4" => 0}

vote_results.each do |precinct, candidate|
  candidate.each do |name, votes|
    vote_totals[precinct] += votes

  end
end

vote_totals.each  do |precinct, votecount|
    puts "#{precinct} had #{votecount} votes"
end

  # 3) Which precinct had the highest voter turnout? Use the hash you created in Question 2 to return the answer.

votes = []
 vote_totals.each do |precinct, votecount|
     votes <<  votecount
 end
 largestVote = votes.max

largestVotingPrescinct = vote_totals.key(largestVote)

puts "#{largestVotingPrescinct} has the most votes with #{largestVote} VOTES"



  # 4) Output the total number of votes per candidate in the format seen above. Create a new hash where the keys name the candidate and the values start at 0. Iterate over the provided `vote_results` to update the totals.

  votes_per_candidate =
     {'Mary Sue' => 0,'Sally Jane' => 0,'Billy Joe' => 0}

vote_results.each do |precinct, candidate|
    candidate.each do |name, votecount|
        numberOfVotes =  "#{votecount}"

        votes_per_candidate[name] += votecount

end
end
puts votes_per_candidate

votes_per_candidate.each  do |key, value|
    puts "#{key} had #{value} votes"
end

  # 5) Who was the winning candidate in Precinct 4 and how many votes did they get?
array=[]
  precinctFour = vote_results["Precinct 4"]
  precinctFour.each do |key, value|
      array << value

       end
largestNumber = array.max
name = precinctFour.key(largestNumber)
 puts "#{name} got #{largestNumber} so they won precinct 4"


  # 6) How many people voted in total?
  sum = 0
 vote_totals.each do |precinct, votes|
     sum += votes
 end
 puts "#{sum} people voted  in total"

  # 7) Who won the election and how many votes did they get? Use the hash you created in Question 4 to return the answer.

  array = []
  votes_per_candidate.each do |person, votes|
      array << votes

  end
  mostVotes = array.max
  winner = votes_per_candidate.key(mostVotes)
puts "#{winner} got the most votes #{mostVotes}"


  # 8) How many more votes did the winner have as compared to the third place candidate? Use the hash you created in Question 4 and the winning candidate total votes value from Question 7 to complete this question.

array= []
votes_per_candidate.each do |person, votes|
    array<< votes
end

    lesserScore = array.min
    thirdPlaceCandidate = votes_per_candidate.key(lesserScore)

difference = mostVotes - lesserScore

puts "#{winner} beat #{thirdPlaceCandidate} by #{difference}"
