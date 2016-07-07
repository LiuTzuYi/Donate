select * from NamedDonate n inner join CardInfo c on n.DonateID=c.DonateID
union all
select *,'a','a','a','a','a','a','a' from AnonymousDonate a inner join CardInfo c on a.DonateID=c.DonateID;