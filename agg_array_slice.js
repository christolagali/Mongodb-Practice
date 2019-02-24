var value = db.movies.aggregate([
	{"$match":{"title":"Juve Against Fantomas"}},
	{
		"$project":{
			"_id":0,
			"title":1,
			"cast_slice":{"$slice":["$cast",1,2]}
		}
	}
])