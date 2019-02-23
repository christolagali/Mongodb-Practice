var value = db.employees.aggregate([
	{"$match":{"team":"Orange"}},
	{"$limit":10},
	{"$project":{
		"employee_id":1,
		"_id":0,
		"acl":1,
		"employee_grade":1,
		"team":1
		
	}
	}
])