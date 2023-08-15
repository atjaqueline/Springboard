DECLARE @var int               -- Declare
SELECT @var = 5                -- Initialization
WHILE @var > 0                 -- condition
BEGIN                          -- Begin
PRINT replicate('* ', @var)    -- Print
SET @var = @var - 1            -- decrement
END 