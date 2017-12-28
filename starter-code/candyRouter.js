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
//////////////////////////////////////////////
// router.post('/', function(req, res) {
// 	console.log('post req made');
// 	let candyCane = {'id': 5,'name': 'Candy Cane',
// 					 'color': 'red & white'};
// 	res.json(candyCane);
// 	candies.push(candyCane);
// });

//////////////////////////////////////////////
// router.post('/', function(req, res) {
// 		let newCandy = {
// 			name: req.body.name,
// 			id: req.body.id,
// 			color: req.body.color
// 		};

// 		res.send(newCandy);
// 		newCandy.push(candies);
// });



module.exports = router;




