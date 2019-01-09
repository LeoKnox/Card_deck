class Card {
    constructor(val, suit, face) {
      this.value = val;
      this.suit = suit;
      this.face = face;
    }
  
    show() {
      console.log(`*------------------------*`);
      console.log(`| ${this.suit} * ${this.face} * ${this.suit} |`);
      console.log(`*------------------------*`);
    }
  }
  
  class Deck {
    constructor() {
      this.pack = [];
    }
  
    deal() {
      var x = Math.floor(Math.random()*this.pack.length);
      return (this.pack.splice(x,1));
    }
  
    shuffle() {
      var arr = this.pack;
      var n=this.pack.length;
      var i = 0;
  
      while (n) {
        i = Math.floor(Math.random() * n--);
        this.pack.push(this.pack.splice(i,1)[0]);
      }
    }
  
    resetDeck() {
      var face = "";
      var suit = "";
      var val = 0;
      var xyz = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
      for (var x in xyz) {
        for (var y = 1; y<14; y++) {
          if (y == 1) {
            face = 'Ace';
          } else if (y == 11) {
            face = 'Jack';
          } else if (y == 12) {
            face = 'Queen';
          } else if (y == 13) {
            face = 'King';
          } else {
            face = y;
          }
          this.pack.push(new Card(y, xyz[x], face));
        }
      }
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  
    
    getHand(deck) {
      for (var i = 0; i < 2; i++) {
        this.hand.push(deck.deal());
      }
      console.log(this.hand);
    }
  
    hitMe(deck) {
      this.hand.push(deck.deal());
      console.log(this.hand);
    }
  
    discard(x) {
      console.log(this.hand.splice(x,1));
    }
  }