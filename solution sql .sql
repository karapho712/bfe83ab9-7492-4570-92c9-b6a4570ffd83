-- Show all employees
SELECT * FROM employees;

-- Show all employees where job_title = "Manager"
SELECT * FROM employees WHERE job_title = 'Manager';


-- Show name, salary, department where deparment is sales or marketing
SELECT name, salary, department 
FROM employees 
WHERE department = 'Sales' OR department = 'Marketing';

-- Calculate average salary where joined 5 years ago
SELECT AVG(salary) AS average_salary
FROM employees
WHERE joined_date >= DATE_SUB(NOW(), INTERVAL 5 YEAR);

-- Show employees base on sales limit 5 desc
SELECT *
FROM employees e
JOIN sales_data s ON e.employee_id = s.employee_id
ORDER BY s.sales DESC
LIMIT 5;


-- Show all name, salary, average department salary all employees where their departement make more average salary
SELECT e.name, e.salary, avg_salary_department.avg_department_salary
FROM employees e
JOIN (
    SELECT department, AVG(salary) AS avg_department_salary
    FROM employees
    GROUP BY department
) AS avg_salary_department ON e.department = avg_salary_department.department
WHERE avg_salary_department.avg_department_salary > (
    SELECT AVG(salary) FROM employees
);

-- question no 7
SELECT name, sales
FROM sales_data
JOIN employees ON sales_data.employee_id = employees.employee_id
ORDER BY sales DESC;
		 
		 
-- no 8 StoreProcedur
DELIMITER //

CREATE PROCEDURE GetDataDepartment(IN dept_name VARCHAR(100))
BEGIN
    SELECT name, salary
    FROM employees
    WHERE department = dept_name;
END //

DELIMITER ;

CALL GetDataDepartment('Marketing')