/* Two nested queries: The first one is select hacker_id, challenge_id, Max(score) as score from Submissions, and then the second query to select hacker_id, name, and sum(score) as total_score from the first table joining the Hackers table. */

select m.hacker_id, h.name, sum(score) as total_score from
(select hacker_id, challenge_id, max(score) as score
from Submissions group by hacker_id, challenge_id) as m
join Hackers as h
on m.hacker_id = h.hacker_id
group by m.hacker_id, h.name
having total_score > 0
order by total_score desc, m.hacker_id;