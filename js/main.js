    console.log("Up and running!");
var cards = [];
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamond",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamond",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match!");
    createBoard()
  } else {
    alert("Sorry, try again.");
  }
};
var flipCard = function () {
    //console.log("User flipped " + cards[cardId].rank);
    cardId = this.getAttribute("data-id");
    console.log(cardId);
    this.setAttribute("src",cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId]);
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};
var createBoard = function () {
  cardsInPlay = [];
  for (var i = 0; i < cards.length; i++ ) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src","images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click",flipCard);
    document.getElementById("game-board").appendChild(cardElement);

  }
}

createBoard();
