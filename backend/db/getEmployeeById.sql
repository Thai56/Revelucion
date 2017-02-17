select e.id,e.first_name,e.last_name, e.points as employee_points, a.time_specified, a.time_expected, a.title as assignment, t.points, t.title as task, t.completed
from employees as e
join assignments as a on e.id = a.employee_id
join tasks as t on t.assignments_id = a.id
where e.id = $1 and t.completed = false;
