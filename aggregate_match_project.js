var value = db.employees.aggregate(
[
	{
		"$match":{"team":"Orange"}},
	{
		"$project":{"_id":0,"team":1,"age":1,"gender":1}
	}
])