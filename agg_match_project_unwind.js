var value = db.employees.aggregate([
	{"$match":{"team":"Orange","first_name":"Cheryl","last_name":"Garcia"}},
	{"$limit":10},
	{"$unwind":"$acl"},
	{"$project":{
		"employee_id":1,
		"_id":0,
		"acl":1,
		"employee_grade":1,
		"team":1
		
	}
	}
])