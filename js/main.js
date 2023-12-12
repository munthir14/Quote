const arrQuotes = [
   {
    'person' : 'Oscar Wilde',
    'quote': 'Be yourself; everyone else is already taken.'
   },

   {
    'person' : 'Albert Einstein',
    'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
   },
   {
    'person' : 'Frank Zappa',
    'quote': 'So many books, so little time.'
   },
   {
    'person' : 'Marcus Tullius Cicero',
    'quote': 'A room without books is like a body without a soul.'
   },
   {
    'person' : 'Bernard M. Baruch',
    'quote': 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.'
   },
  
];

function generateQuote (){
   
   

 




   const random = Number.parseInt(Math.random()*arrQuotes.length + 1);
   document.querySelector('#quoteOutput').textContent = `\"${arrQuotes[random].quote}\"`;
   document.querySelector('#authorOutput').textContent = `--${arrQuotes[random].person}`;
   console.log(Math)


  }
