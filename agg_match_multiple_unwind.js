var value = db.movies.aggregate([
	{"$match":{"year":1913}},
	{"$project":{"_id":0,"title":1,"type":1,"genres":1}}
]);