
select city,(select cast(City_Local as nvarchar) from category for xml path('')) as city_local from Category;




-- SELECT m.OrderID ,
--              left(m.productIDs,  len(m.productIDs)-1) as productIDsFinal
--from (SELECT OrderID,
--           (SELECT cast(ProductID AS NVARCHAR ) + ',' from [Order Details]
--            where OrderID = ord.OrderID
--            FOR XML PATH('')) as productIDs
--           from orders ord
--           GROUP BY orderid) M --這個M 是第一個SELECT 的來源檔ALIAS NAME
--ORDER by M.OrderID