

def print_puzzle(word,guesses = [])
    word.each_char do |char|
    if guesses.include?(char)
        print"#{char}"
    else
        print "_"

end
end
end

print_puzzle("blah",["a","h"] )
