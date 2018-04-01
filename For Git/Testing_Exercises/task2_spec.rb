require('minitest/autorun')
require_relative('task2.rb')


class Task2Test < MiniTest::Test

  def setup
    @card1 = Card.new("ace", 1)
    @card2 = Card.new("jack", 11)
    @card_game = CardGame.new()
  end

def test_check_for_ace_is_ace
  assert_equal(true, @card_game.checkforAce(@card1))
end

def test_check_for_ace_is_not_ace
  assert_equal(false, @card_game.checkforAce(@card2))
end

def test_highest_card_returns_jack_correct
  assert_equal(@card2, @card_game.highest_card(@card1, @card2))
end

def test_highest_card_returns_jack_incorrect
  assert_equal(@card2, @card_game.highest_card(@card2, @card1))
end

def test_cards_total
  cards = [@card1, @card2]
  assert_equal("You have a total of 12", CardGame.cards_total(cards))
end

end
