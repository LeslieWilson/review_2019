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

# NOTES: HAVING TROUBLE WITH THIS ONE, SECOND ITERATION NOT BRINGING UP NUMBERS TO THEN BE ADDED TOGETHER PER PRESINCT.

  vote_results.each do |key, value|
      precinct = "#{key}"
      value.each do |key, value|
        votes = "#{value}"
          sum = 0

              sum += votes.to_i
  puts sum

    #   puts  "\n #{precinct} had #{sum}"
  end

  end

  # 3) Which precinct had the highest voter turnout? Use the hash you created in Question 2 to return the answer.



  # 4) Output the total number of votes per candidate in the format seen above. Create a new hash where the keys name the candidate and the values start at 0. Iterate over the provided `vote_results` to update the totals.

  # 5) Who was the winning candidate in Precinct 4 and how many votes did they get?

  # 6) How many people voted in total?

  # 7) Who won the election and how many votes did they get? Use the hash you created in Question 4 to return the answer.

  # 8) How many more votes did the winner have as compared to the third place candidate? Use the hash you created in Question 4 and the winning candidate total votes value from Question 7 to complete this question.
