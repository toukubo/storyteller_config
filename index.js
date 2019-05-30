require('dotenv').config()
const env = process.env;
var Config = {}

STORYTELLER_BASE = env.STORYTELLER_BASE


Config.PROJECT=env.storyteller_project == null?'default':env.storyteller_project
Config.PROJECT=PROJECT === ''?'default':PROJECT

Config.PROJECT_BASE = STORYTELLER_BASE + "projects/" + PROJECT +"/"
Config.NOUN_BASE = PROJECT_BASE + "nouns/"
Config.VERB_BASE = STORYTELLER_BASE + "verbs/"
Config.SENTENCE_BASE = PROJECT_BASE + "sentences/"


module.exports = Config

// console.log("Target Project : "+PROJECT)
// console.log("PROJECT_BASE : "+PROJECT_BASE)
// console.log("NOUN_BASE : " + NOUN_BASE)
// console.log("VERB_BASE:"+VERB_BASE)
// console.log("SENTENCE_BASE:" +SENTENCE_BASE)



/// # stack
RESTBASE=env.RESTBASE
BFF=env.microjs
LOGIC=env.nodejs
API_METHOD=env.graphql
BFF_API_CLIENT=env.axios
CLIENT_LANG=env.js


// console.log("RESTBASE : "+RESTBASE)
// console.log("BFF : "+BFF)
// console.log("LOGIC : "+LOGIC)
// console.log("API_METHOD : "+API_METHOD)
// console.log("BFF_API_CLIENT : "+BFF_API_CLIENT)
// console.log("CLIENT_LANG : "+CLIENT_LANG)

//defaulting
RESTBASE=RESTBASE === ''?'local':RESTBASE
BFF=BFF === ''?'microjs':BFF
LOGIC=LOGIC === ''?'nodejs':LOGIC
API_METHOD=API_METHOD === ''?'rest':API_METHOD
BFF_API_CLIENT=BFF_API_CLIENT === ''?'rest':BFF_API_CLIENT
CLIENT_LANG=CLIENT_LANG === ''?'js':CLIENT_LANG


RESTBASE=RESTBASE === ''?'local':RESTBASE
RESTBASE=RESTBASE === ''?'local':RESTBASE

