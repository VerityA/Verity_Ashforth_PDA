require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1
      #need to have a double == sign to test  for equality
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  #def is spelled incorrectly so ruby will not recognise this as a defined method
  #two parameters should be separated by a comma in the brackets
  if card1.value > card2.value
    return card.name
    #should say card1 rather than card as this is not passed into the method
    #name is not one of the parameters of the Card class, this should say card1 or card1.suit
    #if card1.suit then the line two below show say card2.suit for consistency
  else
    card2
  end
end
end
#one to many ends

def self.cards_total(cards)
  total
  #should start with total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
    #total is an integer. needs to be interpolated into the string to converted to string
    #method is returning too early. will return after the first card and
    #therefore show only the value of the first card.
    #should come after the first end statement
  end
end

#no end statement finishing off the class
