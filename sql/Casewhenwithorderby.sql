SELECT 
       full_name,
       sport,
       height,
       weight
FROM athletes
ORDER BY 
CASE
  WHEN sport = 'basketball' THEN height
  WHEN sport = 'wrestling' THEN weight
END DESC


---

SELECT
       SUM(sales),
       category
FROM sales
GROUP BY category
HAVING CASE
           WHEN category = 'furniture' THEN SUM(sales) > 100
           WHEN category = 'office' THEN SUM(sales) > 30
           ELSE SUM(sales) > 150
       END


/* The ‘furniture' group must have a minimum aggregate sales of 100, whereas ‘office’ products have a lower minimum of 50. All other product categories must have more than 150 sales to pass the condition of the HAVING clause. */
       