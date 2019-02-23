var value = db.movies.aggregate([
	{"$match":{"year":1913}},
	{"$unwind":"$genres"},
	{"$project":{"_id":0,"title":1,"genres":1,"cast":1}}
]);