select * from AnonymousDonate;


select * from NamedDonate;



select * from AnonymousDonate a inner join ChainStoreInfo c on a.DonateID=c.DonateID; --11
--DonateID,Amount,ComesFrom,Sponor,ContributionWay,Email2,DonateTime,ServerReceiveTime,DonateID,Amount,ContributionWay
select * from NamedDonate n inner join ChainStoreInfo c on n.DonateID=c.DonateID; --18
-- DonateID, ContributionWay,Amount,Sponsor,DonorName,DonorID,PhoneNumber,Email1,Email2,Email3,Address1,Address2,Address3,Receipt,DonateTime,ServerReceiveTime,DonateID,ContributionWay

--for ChainStore
select  a.Amount,'' as DonorName, '' as PhoneNumber, a.ComesFrom as Address , '' as DonorID, a.Sponsor,a.ContributionWay,a.Email2,A.DonateTime from AnonymousDonate  a inner join ChainStoreInfo c on a.DonateID=c.DonateID
union all
select  n.Amount, n.DonorName,n.PhoneNumber,n.Address1, Convert(char(10),n.DonorID), n.Sponsor,n.ContributionWay,n.Email1,n.DonateTime from NamedDonate n  inner join ChainStoreInfo c on n.DonateID=c.DonateID; 

--for WebATM

select  a.Amount,'' as DonorName, '' as PhoneNumber, a.ComesFrom as Address , '' as DonorID, a.Sponsor,a.ContributionWay,a.Email2,A.DonateTime from AnonymousDonate  a inner join WebATMInfo w on a.DonateID=w.DonateID
union all
select  n.Amount, n.DonorName,n.PhoneNumber,n.Address1, Convert(char(10),n.DonorID), n.Sponsor,n.ContributionWay,n.Email1,n.DonateTime from NamedDonate n  inner join WebATMInfo w on n.DonateID=w.DonateID; 




--for ATM

select  a.Amount,'' as DonorName, '' as PhoneNumber, a.ComesFrom as Address , '' as DonorID, a.Sponsor,a.ContributionWay,a.Email2,A.DonateTime from AnonymousDonate  a inner join ATMInfo atm on a.DonateID=atm.DonateID
union all
select  n.Amount, n.DonorName,n.PhoneNumber,n.Address1, Convert(char(10),n.DonorID), n.Sponsor,n.ContributionWay,n.Email1,n.DonateTime from NamedDonate n  inner join ATMInfo atm on n.DonateID=atm.DonateID; 


--for BarCode

select  a.Amount,'' as DonorName, '' as PhoneNumber, a.ComesFrom as Address , '' as DonorID, a.Sponsor,a.ContributionWay,a.Email2,A.DonateTime from AnonymousDonate  a inner join  BarCodeInfo b on a.DonateID=b.DonateID
union all
select  n.Amount, n.DonorName,n.PhoneNumber,n.Address1, Convert(char(10),n.DonorID), n.Sponsor,n.ContributionWay,n.Email1,n.DonateTime from NamedDonate n  inner join BarCodeInfo b on n.DonateID=b.DonateID; 


--for CreditCard

select  a.Amount,'' as DonorName, '' as PhoneNumber, a.ComesFrom as Address , '' as DonorID, c.CardNumber, a.Sponsor,a.ContributionWay,a.Email2,A.DonateTime from AnonymousDonate  a inner join CardInfo c on a.DonateID=c.DonateID
union all
select  n.Amount, n.DonorName,n.PhoneNumber,n.Address1, Convert(char(10),n.DonorID), c.CardNumber, n.Sponsor,n.ContributionWay,n.Email1,n.DonateTime from NamedDonate n  inner join CardInfo c on n.DonateID=c.DonateID; 


select * from CardInfo;
select * from ChainStoreInfo;
select * from WebATMInfo;
select * from ATMInfo;
select * from BarCodeInfo;