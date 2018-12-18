# Card Maker

App to create decks of cards, each one is customizable in content or style.

It's possible to export a deck to json file for ipotetical deck exchange, and to import them. The imported json deck will be added to the user current decks collection. This option works only with a local backend running, repo: https://github.com/Tezenn/card_maker_backend <br>
I decided to use a small backend to have the possibility to write a file locally on your pc.

Live site: https://modest-bhabha-9ae2df.netlify.com/

I tried to deploy the backend as well, but to be able to write a file, save it and then send it back i would have needed a database as heroku doesn't allow writing file on their server, so for the purpose of the exercise i decided that was not needed, and i suggest you to run locally the small server to have the download json deck / import option available to test.

Technologies used:

react, redux, react router, express.
