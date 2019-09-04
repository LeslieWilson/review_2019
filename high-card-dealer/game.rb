require 'pry'

# Note: we only need `require_relative` if we end up calling a class by name in our file's logic. As such, you may have to add more `require_relative` statements accordingly.
require_relative "lib/deck"
require_relative "lib/hand"
require_relative "lib/card"
#GAME START

  deck = Deck.new
  player1hand = Hand.new
  player2hand = Hand.new
  card = deck.draw!
  player1hand.hand << deck.draw!
  player1hand.hand << deck.draw!
  player2hand.hand << deck.draw!
  player2hand.hand << deck.draw!
  binding.pry


# def dealPlayerOne
#  hand << deck.draw!
#  hand << deck.draw!
#
# end
#
# def dealPlayerOne
#  hand << deck.draw!
#  hand << deck.draw!
# end
