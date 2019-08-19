

game=[
{par: 5, strokes:7},
{par:4, strokes:5},
{par:3, strokes:3},
{par:4, strokes:4},
{par:4, strokes:4},
{par:3, strokes:2}
]

strokeSum = 0
parSum = 0


game.each do |hole|
strokeSum += game[:strokes]
parSum += game[:par]
end


puts "#{strokeSum} is total strokes and #{parSum} is total pars. you were "
