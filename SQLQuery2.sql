select * from AnonymousDonate a inner join CardInfo c on a.DonateID=c.DonateID;


select * from NamedDonate n inner join CardInfo c on n.DonateID=c.DonateID;
select * from NamedDonate n 
select * from NamedDonate n inner join CardInfo c  on n.DonateID=c.DonateID inner join AnonymousDonate a on a.DonateID=c.DonateID;


select * from NamedDonate
union all
select *,'' as 'PhoneNumber','' as 'Email1','' as 'Email3','' as 'Address1','' as 'Address2','' as 'Address3','' as 'Receipt' from AnonymousDonate;

select sum(unionTable.Amount),unionTable.ContributionWay from
(select DonateID,Amount,Sponsor,ContributionWay from NamedDonate 
union all
select DonateID,Amount,Sponsor,ContributionWay from AnonymousDonate) as unionTable
group by unionTable.ContributionWay;


select sum(Amount),ContributionWay from NamedDonate group by ContributionWay;