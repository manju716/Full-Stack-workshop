select a.name as employee_name  , b.name as manager_name
from employees as a
left join employees as b
on a.manager_id = b.id;