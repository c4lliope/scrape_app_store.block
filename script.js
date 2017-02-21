var assemble = require('./assemble')

var store = require('app-store-scraper')

store.list({
  collection: store.collection.TOP_GROSSING_IOS,
  category: store.category.PRODUCTIVITY,
  num: 10,
})
.then((data) => {
  assemble.current_run.output(data);
  setTimeout(() => process.exit(0), 1000);
})
.catch((data) => {
  console.log(data);
  process.exit(1);
});
