var value = db.movies.aggregate([
	{"$match":{"year":1913}},
	{"$unwind":"$genres"},
	{"$match":{"$or":[{"genres":"Drama"},{"genres":"Crime"}]}},
	{"$project":{"_id":0,"title":1,"genres":1,"cast":1}},
	{"$unwind":"$cast"},
	{"$match":{"$or":[{"cast":"Edmund Breon "},{"cast":"Georges Melchior"}]}}
]);