start_ "chrome.exe","http://automationpractice.com/index.php"

'wait(20)
 Do 
 	print "Waiting to My store"
 Loop Until Browser("My Store").Page("My Store").Link("T-shirts_2").Exist @@ script infofile_;_ZIP::ssf77.xml_;_

if Browser("My Store").Page("My Store").Link("Sign out").Exist Then
	Browser("My Store").Page("My Store").Link("Sign out").Click
End If

MyLoginFunction() @@ script infofile_;_ZIP::ssf58.xml_;_

wait(2)
 @@ script infofile_;_ZIP::ssf59.xml_;_
Browser("My account - My Store").Page("My account - My Store").Link("T-shirts").Click @@ script infofile_;_ZIP::ssf81.xml_;_

Do 
 	print "Waiting to Add"
 Loop Until Browser("My Store").Page("My Store").Link("Add to cart").Exist

Browser("My Store").Page("My Store").Link("Add to cart").Click
wait(2)
Browser("My Store").Page("My Store").Link("Proceed to checkout").Click @@ script infofile_;_ZIP::ssf61.xml_;_
wait(2) @@ script infofile_;_ZIP::ssf68.xml_;_
Browser("My Store").Page("My Store").WebElement("Proceed to checkout").Click
Browser("My Store").Page("My Store").WebElement("Proceed to checkout").Click @@ script infofile_;_ZIP::ssf78.xml_;_
Browser("My Store").Page("My Store").WebElement("Proceed to checkout").Click
wait(2)
Browser("My Store").Page("My Store").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf79.xml_;_
Browser("My Store").Page("My Store").WebCheckBox("cgv").Set "ON" @@ script infofile_;_ZIP::ssf66.xml_;_
Browser("My Store").Page("My Store").WebElement("Proceed to checkout").Click

SystemUtil.CloseProcessByName("chrome.exe")
Reporter.ReportEvent micPass, "Buy a t-shirt", "OK"

