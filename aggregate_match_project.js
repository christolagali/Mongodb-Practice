var value = db.employees.aggregate(
[
	{
		"$match":{"team":"Orange"}
	},
	{
		"$limit":5
	},
	{
		"$project":{"_id":0,"Name":{"$concat":["$first_name","-","$last_name"]},"team":1,"age":1,"gender":1}
	}
])