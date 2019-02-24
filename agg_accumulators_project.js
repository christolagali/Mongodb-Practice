var value = db.stocks.aggregate([
	{"$match":{"trades.ticker":"MDB"}},
	{"$project":
		{
			"max_price":{"$max":"$trades.price"}
		}
	}
])