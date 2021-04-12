# Fibonacci API

Scenario: There is a need for a Rest (or Rest-like) API that can receive an index "n" and returns the Fibonacci value that corresponds to the given index, and you have been tasked with implementing the first version of this API.

Examples: the first values of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, ..., so, if we were to give the API the index n=3, we should get the response value "2", and if we request n=6, we should get "8" as the response, and so on.

## Installation

```bash
Clone the repository
npm install
npm start
```

## Thought Process

In the first commit, make the API structure.

Then perform the server initialization, previously installing express.

Once working on port 3001, I proceeded to implement the fibonacci function and the controller which uses the indicated function to verify if the received parameter is a number and then return the result

Regarding the app.js I define the path in which I am going to receive the GET call and I respond with the result that the controller returns in json format

To verify the operation of the call to the api use postman which returned the results correctly

## Optimizations

I thought about performing the fibonacci function with recursion but then I remembered that there are cases (like this one) that the complexity is less when using a for loop, that is why I made the decision to do it this way.

Being an app that is not in production, it was not contemplated to use a routes file as well as middleware. Already in those instances I would recommend completing the development with those validations and structure.