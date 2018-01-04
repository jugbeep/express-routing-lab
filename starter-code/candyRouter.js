var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{"id":1,
				"name":"Chewing Gum",
				"color":"Red"
				},
				{
				"id":2,
				"name":"Pez",
				"color":"Green"
				},
				{
				"id":3,
				"name":"Marshmallow",
				"color":"Pink"
				},
				{
				"id":4,
				"name":"Candy Stick",
				"color":"Blue"
				}];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	console.log('candies request made');
	res.json(candies)
});

router.get('/:id', function(req, res) {
	console.log('id request made');
	var id = req.params.id;
	res.send(candies[id-1]);
});

router.post('/', function(req, res) {
		let newCandy = {
			name: req.body.name,
			id: req.body.id,
			color: req.body.color
		};

		candies.push(newCandy);
		res.redirect('/candies');
});

router.put('/:id', function(req, res) {
	let changedCandy = {
			id: req.body.id,
			name: req.body.name,
			color: req.body.color
		};
	let id = req.params.id;
	console.log(id);
	candies.splice(id-1, 1, changedCandy);
	res.redirect('/candies');
});

router.delete('/:id', function(req, res) {
	let deleted = req.params.id;
	candies.pop(deleted);
	res.redirect('/candies');
})



module.exports = router;




