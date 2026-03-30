
1. Successful login with valid credentials

Steps

Open the Bank Demo app.
Enter username admin.
Enter password admin123.
Click Login.

Expected

User is redirected to the dashboard.
Dashboard heading is visible.
Logged-in user indicator appears.
2. Login with invalid username and valid password

Steps

Open login page.
Enter an invalid username.
Enter password admin123.
Click Login.

Expected

Login is rejected.
User remains on login page.
Error message is displayed.
3. Login with valid username and invalid password

Steps

Open login page.
Enter username admin.
Enter an invalid password.
Click Login.

Expected

Login fails.
Error message appears.
No redirect to dashboard.
4. Login with both username and password invalid

Steps

Enter invalid username.
Enter invalid password.
Click Login.

Expected

Authentication fails.
Error is shown.
5. Login with both fields empty

Steps

Open login page.
Leave username blank.
Leave password blank.
Click Login.

Expected

Validation prevents login or login fails with message.
User remains on login page.
6. Login with empty username only

Steps

Leave username blank.
Enter admin123 in password.
Click Login.

Expected

Validation message or failed login.
7. Login with empty password only

Steps

Enter username admin.
Leave password blank.
Click Login.

Expected

Validation message or failed login.
8. Verify Clear button clears both fields

Steps

Enter any text in username.
Enter any text in password.
Click Clear.

Expected

Username field is empty.
Password field is empty.
The login page shows both Login and Clear controls.
9. Verify password is masked

Steps

Enter text in password field.

Expected

Password characters are masked.
Password field type is secure/password.
10. Login using keyboard Enter key

Steps

Enter valid username and password.
Press Enter instead of clicking Login.

Expected

Login succeeds.
Dashboard loads.
11. Verify “Remember me” can be selected

Steps

Open login page.
Check the Remember me option.
Login with valid credentials.

Expected

Checkbox can be toggled.
Login succeeds.
The login page exposes a Remember me option.
12. Verify login fields trim leading/trailing spaces

Steps

Enter admin as username.
Enter admin123 as password.
Click Login.

Expected

Either login succeeds after trimming, or a clear validation/auth error is shown consistently.
Dashboard scenarios
13. Verify dashboard loads after successful login

Steps

Login with valid credentials.
Observe the landing page.

Expected

Dashboard page title is visible.
Welcome message appears.
Summary widgets are displayed.
14. Verify dashboard shows zero-state for new/local-clean session

Steps

Clear browser storage for the app or use a fresh browser profile.
Login.
Observe dashboard cards and sections.

Expected

Total balance is $0.00.
Active accounts is 0.
Total transactions is 0.
Empty-state messages are visible.
15. Verify Quick Actions section is present

Steps

Login.
Scroll to the Quick Actions area.

Expected

Add Account
New Transaction
View All Accounts
are available.
16. Verify navigation links are visible in header/sidebar

Steps

Login.
Inspect app navigation.

Expected

Dashboard link is visible.
Accounts link is visible.
Transactions link is visible.
17. Navigate from Dashboard to Accounts

Steps

Login.
Click Accounts from navigation.

Expected

Accounts page opens.
Accounts-related content is shown.
18. Navigate from Dashboard to Transactions

Steps

Login.
Click Transactions from navigation.

Expected

Transactions page opens.
Transactions-related content is shown.
19. Open Add Account from Quick Actions

Steps

Login.
Click Add Account.

Expected

User is taken to account creation form or modal.
20. Open New Transaction from Quick Actions

Steps

Login.
Click New Transaction.

Expected

User is taken to transaction creation form or modal.
21. Open View All Accounts from Quick Actions

Steps

Login.
Click View All Accounts.

Expected

Accounts list page opens.
22. Verify logout works

Steps

Login.
Click Logout.
Attempt to access dashboard again with browser back button or direct URL.

Expected

User returns to login page.
Protected page is not accessible without re-login.
Account management scenarios
23. Create first account with valid data

Steps

Login.
Open Add Account.
Fill all required fields with valid data.
Save the account.

Expected

Account is created successfully.
Success message appears.
Account appears in Accounts list.
Dashboard active account count increments.
24. Create multiple accounts

Steps

Login.
Create Account A.
Create Account B.
Open Accounts page.

Expected

Both accounts appear in the list.
Dashboard account count matches total created accounts.
25. Create account with all required fields blank

Steps

Open Add Account.
Leave required fields empty.
Click Save/Create.

Expected

Validation errors appear.
Account is not created.
26. Create account with invalid opening balance

Steps

Open Add Account.
Enter a non-numeric or malformed amount.
Submit.

Expected

Validation blocks submission.
27. Create account with negative opening balance

Steps

Open Add Account.
Enter negative amount as opening balance.
Submit.

Expected

Validation error is shown or creation is prevented.
28. Create duplicate account name/number scenario

Steps

Create an account with a given unique identifier/name.
Attempt to create another account with the same identifier/name.

Expected

Either duplicate is prevented with a clear message, or app behavior is consistent and documented.
29. Verify newly created account appears on dashboard overview

Steps

Create a valid account.
Return to dashboard.

Expected

Account appears in Accounts Overview.
Active account count reflects the new account.
30. Verify total balance updates after account creation

Steps

Create account with a positive initial balance.
Return to dashboard.

Expected

Total balance increases accordingly.
31. Cancel account creation

Steps

Open Add Account.
Enter values.
Click Cancel/Back if available, or navigate away before save.

Expected

No account is created.
Draft data is not saved unintentionally.
32. Verify accounts persist after refresh

Steps

Create one or more accounts.
Refresh the page.
Reopen Accounts or Dashboard.

Expected

Accounts still exist after refresh because app stores data locally in browser.
33. Verify accounts are gone after local storage/browser data cleanup

Steps

Create accounts.
Clear browser storage/site data.
Reload and login again.

Expected

Previously created accounts are no longer available, consistent with local browser storage behavior.
Transaction scenarios
34. Create a valid transaction for an existing account

Steps

Login.
Ensure at least one account exists.
Open New Transaction.
Select account.
Enter valid amount and transaction details.
Submit.

Expected

Transaction is created successfully.
It appears in Recent Transactions and/or Transactions list.
Transaction count increments.
35. Create transaction with blank required fields

Steps

Open New Transaction.
Leave required fields empty.
Submit.

Expected

Validation errors appear.
Transaction is not created.
36. Create transaction with zero amount

Steps

Open New Transaction.
Enter amount 0.
Submit.

Expected

Validation prevents save, or result is handled consistently.
37. Create transaction with negative amount

Steps

Open New Transaction.
Enter a negative amount.
Submit.

Expected

Validation error appears.
38. Create transaction with non-numeric amount

Steps

Open New Transaction.
Enter alphabetic or invalid numeric format in amount.
Submit.

Expected

Validation error appears.
39. Withdraw amount less than or equal to balance

Steps

Create account with sufficient balance.
Create withdrawal transaction within available balance.
Save.

Expected

Withdrawal succeeds.
Account balance decreases correctly.
40. Withdraw amount greater than available balance

Steps

Create account with low balance.
Attempt withdrawal larger than balance.
Submit.

Expected

Transaction is rejected or marked invalid.
Balance remains unchanged.
41. Deposit transaction increases account balance

Steps

Create an account with known starting balance.
Add a deposit transaction.
Return to dashboard or account details.

Expected

Balance increases by deposit amount.
42. Multiple transactions update totals correctly

Steps

Create account with starting balance.
Add several deposits and withdrawals.
Check final displayed balance and transaction count.

Expected

Final balance equals starting balance plus deposits minus withdrawals.
Total transactions reflects number created.
43. Verify new transaction appears in Recent Transactions on dashboard

Steps

Create a transaction.
Go to dashboard.

Expected

New transaction appears in Recent Transactions.
44. Verify transaction history ordering

Steps

Create several transactions in sequence.
Open Recent Transactions or Transactions page.

Expected

Transactions are displayed in expected order, typically newest first.
45. Verify transaction status is displayed

Steps

Create a valid transaction.
Open dashboard or transactions list.

Expected

A status field/value is visible for the transaction row.
The dashboard table exposes a Status column.
46. Verify transaction is tied to correct account

Steps

Create two accounts.
Add transaction for Account A.
Open transactions/account views.

Expected

Transaction is associated only with Account A.
Account B remains unaffected.
Navigation, persistence, and UX scenarios
47. Direct URL access to dashboard without login

Steps

Open a fresh session.
Navigate directly to /bank/dashboard.

Expected

User is redirected to login or prevented from seeing protected content.
48. Browser refresh on dashboard preserves state

Steps

Login.
Create one account and one transaction.
Refresh dashboard.

Expected

User stays authenticated if session is still valid.
Account and transaction data remain visible due to browser-local persistence.
49. Browser Back behavior after logout

Steps

Login.
Logout.
Click browser Back.

Expected

App should not expose authenticated content without a valid session.
If cached UI appears briefly, refresh should force login.
50. End-to-end happy path

Steps

Open login page.
Login with valid credentials.
Create a new account with valid opening balance.
Verify account appears in account list/dashboard.
Create a valid transaction for that account.
Verify transaction appears in recent/history list.
Verify total balance, transaction count, and account count update correctly.
Logout.

Expected

Entire primary user journey works end to end across login, account creation, transaction creation, dashboard verification, and logout. The Bank Demo app is explicitly positioned for this kind of end-to-end testing