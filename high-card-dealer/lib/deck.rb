require 'pry'
require_relative "card"

SUITS = ['♦', '♣', '♠', '♥']
RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

class Deck
  def initialize
    @cards = build_deck
  end

  def build_deck
    @cards = []
    SUITS.each do |suit|
      RANKS.each do |rank|
        @cards << Card.new(rank, suit)
      end
    end


    @cards.shuffle

  end

  def draw!
      @cards.pop
  end

  def cards
      @cards
  end

  end


  deck = Deck.new
  card = deck.draw!
 
