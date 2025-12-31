select * from( 
select e.*, 
dense_rank() over (partition by department order by salary desc) as rnk
 from employees e) x where x.rnk <= 3;