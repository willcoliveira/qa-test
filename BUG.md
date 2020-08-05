# One Mineral QA Test Challenge

### Bug Tracking Report

#### ID-01 - TYPO in Page Title - "Factoriall"
Type: Bug
Priority: Minor
Severity: Minor

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify that Factorial page has a typo in its title. 

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Verify page title

##### Actual Result
Page title has a typo - "Factoriall"

##### Expected Result
Page title should be "Factorial"

##### Additional Information
See more details on recorded video and screenshots here: ...



#### ID-02 - Incorrect redirect for Terms and Conditions and Privacy Links
Type: Bug
Priority: Medium
Severity: Average

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify that user is redirect to an incorrect link when clicking on Terms and Conditions or Privacy Links. 

HREF reference is wrong for both cases. Terms and conditions is using Privacy one and Privacy is using Terms and Conditions one.

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Click on Terms and Conditions link
3 - Verify Privacy page information and url
4 - Go back to home page
5 - Click on Privacy link
6 - Verify Terms and Conditions page information and its url reference.

##### Actual Result
Terms and Conditions and Privacy Links are redirecting users incorrectly. 

##### Expected Result
Terms and Conditions and Privacy Links should redirect users to a correct pages. 
Termns and Conditions - redirect to http://test.getgrex.com/terms
Privacy - redirect to http://test.getgrex.com/privacy

##### Additional Information
See more details on recorded video and screen shots: ...



#### ID-03 - There is no feedback about the maximum value for a factorial integer

Type: Bug
Priority: Medium
Severity: Average

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify that user is not able to understand about what is the maximum value to insert in factorial calculator.

For example, if users try to use 971 as a number, there is no feedback after click to calculate the value. However if user try to use 970, it is possible to see a feedback message regarding a infitinity value - "The factorial of 970 is: Infinity"

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Insert 971 or more as an integer
3 - Click to calculate
4 - Verify there is no error messages or feedbacks

##### Actual Result
User is not able to see any feedback or error message when trying to add a value bigger than 971. 

##### Expected Result
User should be able to see a feedback or error message when trying to add values bigger than  971. Like the ones that the application current shows for 970 for example. 

##### Additional Information
It is possible to see an error 500 on console when trying to calculate a value bigger than 910. The feedback is not clear.

> ```bash
>Failed to load resource: the server responded with a status of 500 (INTERNAL SERVER ERROR) --- factorial:1
> ```

#### ID-04 - There is an additional "wrong" information for successful calls

Type: Bug
Priority: Minor
Severity: Average

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify an additional wrong information on console when user is able to calculate the factorial.
> ```bash
>Hello! I am in the done part of the ajax call
> ```

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Insert an integer up to 970
3 - Click to calculate
4 - Open console browser
5 - Verify an additional information after the value results "Hello! I am in the done part of the ajax call"

##### Actual Result
Application is generating an additional information after successful calls.

##### Expected Result
Application should remove the additional information for successful calls.

##### Additional Information
Plase see more information, video recorded and screenshots here: ...



#### ID-05 - Change Input number field to number type

Type: Bug
Priority: Medium
Severity: Average

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify that input integer field is using a text type. So on that way user is able to insert an incorrect values like strings in this field.

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Click to inspect "Enter a integer" field.
3 - Verify selector is equal type=text

##### Actual Result
Insert value field is using type=text

##### Expected Result
Insert value field should use type=number

##### Additional Information
Plase see more information, video recorded and screenshots here: ...




#### ID-06 - Results value is not clear when using a number bigger than 971 on the second attempt

Type: Bug
Priority: Medium
Severity: Average

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify that results value is not clear when user insert a number bigger than 970 after a sucessful call.

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Insert an integer up to 970.
3 - Click to calculate
4 - Verify a result for this factorial calculation.
5 - Repeat steps 2-3 using a number bigger than 970.
6 - Verify results value is not clear and it is still using the last successfull result.

##### Actual Result
Result value is not clear after a second call using a value bigger than 971.

##### Expected Result
Remove the error 500 from api for numbers bigger than 971, clear the cache and show an user feedback after this attempt.  

##### Additional Information
Plase see more information, video recorded and screenshots here: ...



#### ID-07 - There is no character limits for value input field

Type: Bug
Priority: Medium
Severity: High

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify that there is no character value limit for input number field so user is able to insert a long value for this field. 

Also, when using a number with 30 characters it is possible to see a long time to execute the query. On that way, memory leak could crash this applications.

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Insert an integer bigger than 40 characters.
3 - Open the browser console
4 - Veirfy a long time to finish the query

##### Actual Result
Applications is trying to calculate the big numbers.

##### Expected Result
Application should not allow user to insert numbers bigger than (it will be necessary to check the requirements). Blocking the memory leak.

##### Additional Information
Plase see more information, video recorded and screenshots here: ...



#### ID-08 - Terms and Conditions and Privacy Content is not updated
Type: Security and Legal Bug
Priority: High
Severity: High

##### Environment:
Macbook Pro 15 2018
Browser - Google Chrome Version 84.0.4147.105
PROD -  http://test.getgrex.com/

##### Description
It was possible to verify that terms and conditions and privacy contetens are not correctly at this moment. So there are not rules to follow for these conditions. On that way user not understand about all the legal information related to factorial page. 

User could receive a tax to pay because is using this app but as terms and conditions is not clear, there is no way to understand about that.

##### Reproduction Route - Steps to reproduce
1 - Visit http://test.getgrex.com/
2 - Click on Terms and Conditions link
3 - Verify Privacy page information is not updated or any relevant information placed there.
4 - Go back to home page
5 - Click on Privacy link
6 - Verify Terms and Conditions page information is not updated or any relevant information placed there.

##### Actual Result
Terms and Conditions and Privacy Links are not updated.

##### Expected Result
Terms and Conditions and Privacy Links should be updated to include all the legal information about using this application.

##### Additional Information
See more details on recorded video and screen shots: ...

