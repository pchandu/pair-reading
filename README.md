# pair-reading
How often do you pick up a book and never end up finishing it? Too often in our case. Pair Reading is a web application built with the MERN stack to help people find the accountability they need to finish their books by finding users reading partners on books they're interested in. 

Check out our live demo here: https://pair-reading.herokuapp.com/#/

The PairReading journey begins upon signup, where users are taken to the onboarding page to select their preferences: the time of day that works best to meet with their pair and the books they're interested in pairing with. The preferences are stylized buttons that change color to indicate whether they are selected or not. The logic implemented for selection is a conditional that checks the status of the onboarding component's state which updates global state for the user upon clicking the "continue" button.
**code snippet for handleBook & handlePreference**
**screenshot of onboarding component**

Once a user finishes onboarding, the user lands on the dashboard, where the main functionality of the app exists. 
**screenshot of dashboard**

The dashboard is broken into 3 modules: user profile (left), recent posts & casual reading of the day (middle), and more external interaction such as scheduling meetings feature and bookclubs (right). 



# team-members: <!-- Alex Archibeque, Kat Chan, Praneeth Chandu, Kevin Su -->
