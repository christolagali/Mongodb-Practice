var value = db.stocks.aggregate([
	{"$match":{"trades.ticker":"MDB"}},
	{"$limit":10},
	{"$project":
		{
			"_id":0,
			"id":1,
			"trades":{"$slice":["$trades",-3]},
		}
	}
]).pretty()