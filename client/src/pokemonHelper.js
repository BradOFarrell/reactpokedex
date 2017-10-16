const dex = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina", "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew", "chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion", "totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl", "ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa", "igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom", "marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom", "sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking", "misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar", "steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel", "teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery", "delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan", "porygon", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank", "blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi", "treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp", "swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly", "cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry", "taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit", "masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask", "shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass", "skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham", "electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin", "swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal", "spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu", "altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish", "crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas", "milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius", "chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl", "huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum", "metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup", "empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune", "shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon", "burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi", "cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny", "mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor", "bronzong", "bonsly", "mime-jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp", "munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk", "toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile", "magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss", "yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass", "dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus", "victini", "snivy", "servine", "serperior", "tepig", "pignite", "emboar", "oshawott", "dewott", "samurott", "patrat", "watchog", "lillipup", "herdier", "stoutland", "purrloin", "liepard", "pansage", "simisage", "pansear", "simisear", "panpour", "simipour", "munna", "musharna", "pidove", "tranquill", "unfezant", "blitzle", "zebstrika", "roggenrola", "boldore", "gigalith", "woobat", "swoobat", "drilbur", "excadrill", "audino", "timburr", "gurdurr", "conkeldurr", "tympole", "palpitoad", "seismitoad", "throh", "sawk", "sewaddle", "swadloon", "leavanny", "venipede", "whirlipede", "scolipede", "cottonee", "whimsicott", "petilil", "lilligant", "basculin", "sandile", "krokorok", "krookodile", "darumaka", "darmanitan", "maractus", "dwebble", "crustle", "scraggy", "scrafty", "sigilyph", "yamask", "cofagrigus", "tirtouga", "carracosta", "archen", "archeops", "trubbish", "garbodor", "zorua", "zoroark", "minccino", "cinccino", "gothita", "gothorita", "gothitelle", "solosis", "duosion", "reuniclus", "ducklett", "swanna", "vanillite", "vanillish", "vanilluxe", "deerling", "sawsbuck", "emolga", "karrablast", "escavalier", "foongus", "amoonguss", "frillish", "jellicent", "alomomola", "joltik", "galvantula", "ferroseed", "ferrothorn", "klink", "klang", "klinklang", "tynamo", "eelektrik", "eelektross", "elgyem", "beheeyem", "litwick", "lampent", "chandelure", "axew", "fraxure", "haxorus", "cubchoo", "beartic", "cryogonal", "shelmet", "accelgor", "stunfisk", "mienfoo", "mienshao", "druddigon", "golett", "golurk", "pawniard", "bisharp", "bouffalant", "rufflet", "braviary", "vullaby", "mandibuzz", "heatmor", "durant", "deino", "zweilous", "hydreigon", "larvesta", "volcarona", "cobalion", "terrakion", "virizion", "tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect", "chespin", "quilladin", "chesnaught", "fennekin", "braixen", "delphox", "froakie", "frogadier", "greninja", "bunnelby", "diggersby", "fletchling", "fletchinder", "talonflame", "scatterbug", "spewpa", "vivillon", "litleo", "pyroar", "flabebe", "floette", "florges", "skiddo", "gogoat", "pancham", "pangoro", "furfrou", "espurr", "meowstic", "honedge", "doublade", "aegislash", "spritzee", "aromatisse", "swirlix", "slurpuff", "inkay", "malamar", "binacle", "barbaracle", "skrelp", "dragalge", "clauncher", "clawitzer", "helioptile", "heliolisk", "tyrunt", "tyrantrum", "amaura", "aurorus", "sylveon", "hawlucha", "dedenne", "carbink", "goomy", "sliggoo", "goodra", "klefki", "phantump", "trevenant", "pumpkaboo", "gourgeist", "bergmite", "avalugg", "noibat", "noivern", "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "volcanion"]
const SE = 2 // Super Effective 
const rr = 1 // Regular Effective 
const NV = 0.5 // Not Very Effective
const XX = 0 // Immune
const types = [
// Note: this is by defense, not attack. The IRL game's grid is by attack.
//           NM FR WT EL GS IC FG PO GD FL PS BG RC GH DG DK ST FA NO
["normal",   rr,rr,rr,rr,rr,rr,SE,rr,rr,rr,rr,rr,rr,XX,rr,rr,rr,rr,rr],
["fire",     rr,NV,SE,rr,NV,NV,rr,rr,SE,rr,rr,NV,SE,rr,rr,rr,NV,NV,rr],
["water",    rr,NV,NV,SE,SE,NV,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,NV,rr,rr],
["electric", rr,rr,rr,NV,rr,rr,rr,rr,SE,NV,rr,rr,rr,rr,rr,rr,NV,rr,rr],
["grass",    rr,SE,NV,NV,NV,SE,rr,SE,NV,SE,rr,SE,rr,rr,rr,rr,rr,rr,rr],
["ice",      rr,SE,rr,rr,rr,NV,SE,rr,rr,rr,rr,rr,SE,rr,rr,rr,SE,rr,rr],
["fighting", rr,rr,rr,rr,rr,rr,rr,rr,rr,SE,SE,NV,NV,rr,rr,NV,rr,SE,rr],
["poison",   rr,rr,rr,rr,NV,rr,NV,NV,SE,rr,SE,NV,rr,rr,rr,rr,rr,NV,rr],
["ground",   rr,rr,SE,XX,SE,SE,rr,NV,rr,rr,rr,rr,NV,rr,rr,rr,rr,rr,rr],
["flying",   rr,rr,rr,SE,NV,SE,NV,rr,XX,rr,rr,NV,SE,rr,rr,rr,rr,rr,rr],
["psychic",  rr,rr,rr,rr,rr,rr,NV,rr,rr,rr,NV,SE,rr,SE,rr,SE,rr,rr,rr],
["bug",      rr,SE,rr,rr,NV,rr,NV,rr,NV,SE,rr,rr,SE,rr,rr,rr,rr,rr,rr],
["rock",     NV,NV,SE,rr,SE,rr,SE,NV,SE,NV,rr,rr,rr,rr,rr,rr,SE,rr,rr],
["ghost",    XX,rr,rr,rr,rr,rr,XX,NV,rr,rr,rr,NV,rr,SE,rr,SE,rr,rr,rr],
["dragon",   rr,NV,NV,NV,NV,SE,rr,rr,rr,rr,rr,rr,rr,rr,SE,rr,rr,SE,rr],
["dark",     rr,rr,rr,rr,rr,rr,SE,rr,rr,rr,XX,SE,rr,NV,rr,NV,rr,SE,rr],
["steel",    NV,SE,rr,rr,NV,NV,SE,XX,SE,NV,NV,NV,NV,rr,NV,rr,NV,NV,rr],
["fairy",    rr,rr,rr,rr,rr,rr,NV,SE,rr,rr,rr,NV,rr,rr,XX,NV,SE,rr,rr],
["none",     rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr]]

/*
The above, but rotated for attack rather than defense. Reference only.
 //           NM FR WT EL GS IC FG PO GD FL PS BG RC GH DG DK ST FA NO
 ["normal",   rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,NV,XX,rr,rr,NV,rr,rr],
["fire",     rr,NV,NV,rr,SE,SE,rr,rr,rr,rr,rr,SE,NV,rr,NV,rr,SE,rr,rr],
["water",    rr,SE,NV,rr,NV,rr,rr,rr,SE,rr,rr,rr,SE,rr,NV,rr,rr,rr,rr],
["electric", rr,rr,SE,NV,NV,rr,rr,rr,XX,SE,rr,rr,rr,rr,NV,rr,rr,rr,rr],
["grass",    rr,NV,SE,rr,NV,rr,rr,NV,SE,NV,rr,NV,SE,rr,NV,rr,NV,rr,rr],
["ice",      rr,NV,NV,rr,SE,NV,rr,rr,SE,SE,rr,rr,rr,rr,SE,rr,NV,rr,rr],
["fighting", SE,rr,rr,rr,rr,SE,rr,NV,rr,NV,NV,NV,SE,XX,rr,SE,SE,NV,rr],
["poison",   rr,rr,rr,rr,SE,rr,rr,NV,NV,rr,rr,rr,NV,NV,rr,rr,XX,SE,rr],
["ground",   rr,SE,rr,SE,NV,rr,rr,SE,rr,XX,rr,NV,SE,rr,rr,rr,SE,rr,rr],
["flying",   rr,rr,rr,NV,SE,rr,SE,rr,rr,rr,rr,SE,NV,rr,rr,rr,NV,rr,rr],
["psychic",  rr,rr,rr,rr,rr,rr,SE,SE,rr,rr,NV,rr,rr,rr,rr,XX,NV,rr,rr],
["bug",      rr,NV,rr,rr,SE,rr,NV,NV,rr,NV,SE,rr,rr,NV,rr,SE,NV,NV,rr],
["rock",     rr,SE,rr,rr,rr,SE,NV,rr,NV,SE,rr,SE,rr,rr,rr,rr,NV,rr,rr],
["ghost",    XX,rr,rr,rr,rr,rr,rr,rr,rr,rr,SE,rr,rr,SE,rr,NV,rr,rr,rr],
["dragon",   rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,SE,rr,NV,XX,rr],
["dark",     rr,rr,rr,rr,rr,rr,NV,rr,rr,rr,SE,rr,rr,SE,rr,NV,rr,NV,rr],
["steel",    rr,NV,NV,NV,rr,SE,rr,rr,rr,rr,rr,rr,SE,rr,rr,rr,NV,SE,rr],
["fairy",    rr,NV,rr,rr,rr,rr,SE,NV,rr,rr,rr,rr,rr,SE,SE,NV,rr,rr,rr],
["none",     rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr,rr]]
*/

class Oak{
    dexToName(num){
        const checkValue = dex[num-1];
        if(checkValue)
            return checkValue
        else 
            return "";
    }
    nameToDex(name){
        const checkValue = dex.indexOf(name)+1;
        if(checkValue != -1)
            return checkValue
        else 
            return 0;
    }
    dexToSprite(num){
        return "../sprites/"+num+".png";
    }
    getTypeEffectiveness(typeString){
        let output;        
        types.forEach((el)=>{
            if(el[0] === typeString){
                output = el.slice(1);
            }
        });
        return output;
    }
    getHybridType(typeString1, typeString2){
        const type1 = this.getTypeEffectiveness(typeString1)        
        const type2 = this.getTypeEffectiveness(typeString2)        
        let output = [];
        for(let i = 0; i < type1.length; i++){
            output.push(type1[i]*type2[i]);
        }
        return output;
    }
    getAttackModifier(attackTypeStr, defenseArray){
        let output;
        for(let i = 0; i < types.length; i++){
            if(types[i][0] === attackTypeStr){
                output = defenseArray[i];
            }
        }
        return output;
    }
    getBestAttackModifier(attack1, attack2, defense1, defense2){
        // Choose the best of two attack options vs hybrid defense
        const hybridDefense = this.getHybridType(defense1, defense2)
        const modifier1 = this.getAttackModifier(attack1, hybridDefense)
        if(attack2 === "none"){
            return modifier1;
        } else {
            const modifier2 = this.getAttackModifier(attack2, hybridDefense)
            if(modifier2 > modifier1){
                return modifier2;
            } else {
                return modifier1;
            }    
        }
    }
}

export default new Oak();