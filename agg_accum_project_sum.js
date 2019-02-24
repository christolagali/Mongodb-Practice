var value = db.stocks.aggregate([
	{"$match":{"trades.ticker":"MDB","trades.action":"buy"}},
	{"$project":
		{
			"Total_purchase":{"$sum":"$trades.price"}
		}
	}
])