


Create Table Registration (ID INT Identity(1,1) Primary Key,Name Varchar(100), Email VARCHAR(100), Password VARCHAR(100), PhoneNo VARCHAR(100), IsActive INT, IsApproved INT)

Create Table Article (ID INT Identity(1,1) Primary Key,Title Varchar(100),Content VARCHAR(100), Email VARCHAR(100), Image VARCHAR(100), IsActive INT, IsApproved INT)


Create Table News (ID INT Identity(1,1) Primary Key,Title Varchar(100),Content VARCHAR(100), Email VARCHAR(100), IsActive INT, CreatedOn Datetime)


Create Table Events (ID INT Identity(1,1) Primary Key,Title Varchar(100), Content VARCHAR(100), Email VARCHAR(100), IsActive VARCHAR(100),CreatedOn DateTime)


Create Table Staff (ID INT Identity(1,1) Primary Key,Name Varchar(100), Email VARCHAR(100), Password VARCHAR(100), IsActive INT)


select * from Registration