var express = require('express');
var router = express.Router();
// application is utilizing Express for routing

var _ = require('lodash');
// JavaScript library which provides utility functions for common tasks

var logger = require('../lib/logger');
var log = logger();
// works similarly to console.log

var users = require('../init_data.json').data;
var curId = _.size(users);
// _.size() method gets the size of collection by returning its length for array
// variable named curId for "current ID" ---> value increments as you add users

/** ****************************************************************************** */

/* GET users listing. */
router.get('/', function (req, res) {
	res.json(_.toArray(users));
	// lodash .toArray() method is used to convert a given value into an array. In this case, the user data obj. from init_data.json will be converted.
});

/* Create a new user */
router.post('/', function (req, res) {
	var user = req.body; // set variable to equal data from the request body
	user.id = curId++; // set the user ID value to be the increment of the size of the users array
	if (!user.state) {
		user.state = 'pending';
		// if state isn't set in the req.body, set it as 'pending'
	}
	users[user.id] = user; //once the data is done compiling, add it to the users object
	log.info('Created user', user);
	res.json(user);
});

/* Get a specific user by id */
router.get('/:id', function (req, res, next) {
	var user = users[req.params.id]; // take the ID from the URL parameter

	// if this user does not exist, return a 404 error
	if (!user) {
		return next();
	}
	// otherwise, return the json data for the desired user
	res.json(users[req.params.id]);
});

/* Delete a user by id */
router.delete('/:id', function (req, res) {
	var user = users[req.params.id]; // take the ID from the URL parameter
	delete users[req.params.id]; // delete the user with that ID
	res.status(204);
	// "204 (No Content) status code indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body"

	log.info('Deleted user', user);
	res.json(user);
});

/* Update a user by id */
router.put('/:id', function (req, res, next) {
	var user = req.body;
	// first check if the user ID in the req.body matches the ID in the URL parameter
	if (user.id != req.params.id) {
		return next(new Error('ID paramter does not match body'));
	}
	users[user.id] = user; // sets user with updated information
	log.info('Updating user', user);
	res.json(user);
});

module.exports = router;
