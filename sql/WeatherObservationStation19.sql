/*Consider and to be two points on a 2D plane where are the respective minimum and maximum values of Northern Latitude (LAT_N) and are the respective minimum and maximum values of Western Longitude (LONG_W) in STATION.
Query the Euclidean Distance between points and and format your answer to display decimal digits.
Input Format
The STATION table is described as follows: */

SELECT ROUND(SQRT(POW(MAX(LAT_N)-MIN(LAT_N),2) + POW(MAX(LONG_W)-MIN(LONG_W),2)), 4) 
FROM station;


SELECT Round(st.lat_n, 4)
FROM station AS st
WHERE (SELECT Count(lat_n) FROM station WHERE lat_n < st.lat_n) = (SELECT Count(lat_n) FROM station WHERE lat_n > st.lat_n);