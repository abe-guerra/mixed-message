// Random insult Generator (I don't like your [element] and [element2], you [element3)



//If its a BUILD characteristic 
let buildInsults = [
'nasty plump build',
'chubby build',
'stocky build',
'overweight build',
'fat build',
'pudgy build',
'sad build',
'slender weak build',
'lanky build',
'skinny build',
'skeleton like build'
]




// If its a HEIGHT characteristic

let heightInsults = [
'short body and',
'awkwardly tall and',
'sadly petite and',
'boring average height and',
'tiny weak body and',
'extremely short disappointing body and',
'extremely tall unproportionate body and',
'towering weak body and'
]


let buildRand = Math.floor(Math.random() * buildInsults.length + 1)
let heightRand = Math.floor(Math.random() * heightInsults.length + 1)
let endingRand = Math.floor(Math.random() * endingInsults.length + 1)



var insults = "abortion amateur animal anorak ape ape-covered-in-human-flesh apefucker arse arsebreath arsecunt arseface arsehole arse-licker ass assaholic assbag assbutt ass-clown asscunt assface assfag assfucker asshat asshole ass-kisser ass-licker assmonkey assmouth assmunch ass-nugget ass-sucker asstard asswagon assweed asswipe aunt-fucker baby backwoodsman badass badgerfucker bag-of-dicks Bag-whore-ballkicker ballsack bandit bangsat barbarian Barbie-fucker bastard Bawtboy bean-head beast beetlehead beginner beldame bell-end berk bespawler beta Beta-cuck bimbo birdbrain birdfucker bitch bitchass bitch-ass-motherfucker bitch-boy bitchcunt bitchdicksucker bitchface bitchfucker bitchtits bitchwad bitchwhore bitchzilla biznatch blackguard blaggard blockhead blubber gut bluntie bogeyman bonehead boob booby boomer bootlicker boozer Bot boyfucker bozo brainlet Brandon brickfucker brickhead brotherfucker buffoon bugfucker"


let endingInsults = insults.split(" ")




console.log(endingInsults.length)