:: backup
:: backup files to google drive
:: robocopy synchronize syntax: robocopy <src> <dst> /MIR [/XD <dir to exclude>]

set dest=C:\Users\bburns\Google Drive\@Projects\yr\@backup

cd ..

robocopy . "%dest%" /MIR /XD .git /XD node_modules
