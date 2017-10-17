require('dotenv').config();
var mongoose = require('mongoose');
var Schema = require("./schema.js");

mongoose.connect(process.env.MONGODB_URI); 
const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("database has been connected!");
});

// Define schema we're working with
var UserModel = Schema.UserModel;
var PartyModel = Schema.PartyModel;
var PokemonModel = Schema.PokemonModel;

// First we clear the database of existing students and projects.
UserModel.remove({}, function (err) {
    console.log(err);
});
PartyModel.remove({}, function (err) {
    console.log(err);
});
PokemonModel.remove({}, function (err) {
    console.log(err);
});

// Create starter Pokemon
const pikachu = new PokemonModel({
    dexNumber: 25,        
    baseStat: 320,        
    type1: "electric",
    type2: "none"})

const bulbasaur = new PokemonModel({
    dexNumber: 1,        
    baseStat: 318,        
    type1: "grass",
    type2: "poison"});
    
const charmander = new PokemonModel({
    dexNumber: 4,        
    baseStat: 309,        
    type1: "fire",
    type2: "none"});

const squirtle = new PokemonModel({
    dexNumber: 7,        
    baseStat: 309,        
    type1: "water",
    type2: "none"});

// Create starter party
const defaultParty = new PartyModel({
    team: [pikachu, bulbasaur, charmander, squirtle],
    winStreak: 0 });

const mistyParty = new PartyModel({
    team: [squirtle],
    winStreak: 0 });

// Default Users
const ash = new UserModel({
    username: "ashketchum",
    badges: 0,
    party: defaultParty
});

const misty = new UserModel({
    username: "mistycerulean",
    badges: 0,
    party: mistyParty
});

console.log("SAMPLE DATA (not yet saved)");
console.log(ash)
console.log(defaultParty);
console.log(misty)
console.log(mistyParty);

// Save the results on their own
ash.save(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(ash);
});
misty.save(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(misty);
});

// Disconnect from database
db.close();