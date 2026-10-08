# APISIMULATOR

A application that uses asynchronous API calls using Promises and implements error handling to make sure the application can handle unexpected issues.

## Reflections

- Its important to handle errors for each individual API call rather than just   at the end of a promise chain because one .catch() at the end tells you something failed but not but it doesnt tell you watch exactly failed and what to do. If you handle it individually you will know what failed and what to do.

- A custom error class improves debugging and error identification because a custom error class can give you the type of failure and extra information.