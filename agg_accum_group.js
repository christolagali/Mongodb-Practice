var value = db.employees.aggregate([
	{"$group":
		{
			"_id":{"team":"$team"},
			"avg_salary":{"$avg":"$employee_compensation.salary"}			
		}
	}
])