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


--

SELECT
    base.medal,
    sum(CASE WHEN year = 2000 THEN n_medals ELSE 0 END) AS medals_2000,
    sum(CASE WHEN year = 2004 THEN n_medals ELSE 0 END) AS medals_2004,
    sum(CASE WHEN year = 2008 THEN n_medals ELSE 0 END) AS medals_2008,
    sum(CASE WHEN year = 2012 THEN n_medals ELSE 0 END) AS medals_2012,
    sum(CASE WHEN year = 2016 THEN n_medals ELSE 0 END) AS medals_2016,
    sum(n_medals) AS total_medals
FROM
   (SELECT
      year,
      medal,
      count(*) AS n_medals
    FROM
      olympics_athletes_events
    WHERE 
      team = 'China' AND 
      year IN (2000, 2004, 2008, 2012, 2016) AND 
      medal IS NOT null
    GROUP BY 
      year, 
      medal) AS base
GROUP BY
    base.medal
ORDER BY
    total_medals DESC