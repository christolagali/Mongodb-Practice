var value = db.movies.aggregate([
	{"$match":{"year":1913,"title":"Juve Against Fantomas"}},
	{
		"$project":{
			"_id":0,
			"title":1,
			"First_Cast":{"$arrayElemAt":["$cast",0]},
			"Last_Cast":{"$arrayElemAt":["$cast",3]}
		}
	}
])