# Reactpokedex
This is a a full stack pokedex app built in react, using a public Pokemon API: https://pokeapi.co/

The application will allow users to browse a complete Pokedex of the first 272 Pokemon, add Pokemon to a party, and use their party in a simplified battle system. The battle system uses a single base stat and type advantages similar to Pokemon Go. Players can add Pokemon to their party after encountering them in the Pokedex.

# Wireframes
![](https://i.imgur.com/cAF2VqY.jpg)

The default page will load a random Pokedex entry. The user may also click 'random' to load another random Pokedex entry. All Pokedex entries (except for the first and last entry) will have "next" and "previous" buttons. Users can also search by name or number, which will return the closest-matching result, similar to Google's "I'm Feeling Lucky" function. An unsable input will show them Ditto.

The user can click "Catch" on any Pokemon to add it to their party. They can view their party on the user tab. On the user tab they can also click any Pokemon's button to examine it and "Delete" it from their party. Pokemon added to the party can be used in the battle tab.

On the battle tab, a random Pokemon will be displayed next to a grid containing the user's party. The user selects the Pokemon they think would win in a fight and the fight will play out and resolve automatically. If they win, they gain a badge, if they lose, the Pokemon is removed from the party. Combat results are calculated by taking the base stat (which will be based on EXP yield) from both Pokemon and also applying modifiers based on type advantage and randomly-occuring critical hits. Battle will playout in the client-side, using CSS.

# Entity Relationship Diagram
![](https://i.imgur.com/DCYFeJs.jpg)

A user's profile (which contains badges and current party) will be stored on the server. The party consists of six Pokemon, which are a simplified version of the Pokemon objects found on the API. These Pokemon will be primarily used in the battle feature. 

# External Links:
* [Trello board with user stories](https://trello.com/b/OajpLWGV/reactpokedex)
* [Hosted Heroku page](http://kantokalos.herokuapp.com/)