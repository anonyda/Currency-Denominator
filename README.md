# Currency Denomination Manager

You can enter your money in denominations of 2000, 500, 200, 100, 50, 20, 10, 5, 2 and 1. The application will subtract the bill amount from your cash, and give you the change in least number of notes and coins.
It is assumed that one has infinite supply of notes and coins.
## Try It!

[Here]( https://anonyda.github.io/Currency-Denominator/index.html) is the link!
Hosted on Github Pages

## Working

This app uses the Greedy Approach to return the least number of notes and coins to be returned. We are starting from the largest possible denomination and keep going till our balance is 0.
This reduces the total number of coins and notes required.

Below is the code responsible for it:

```javascript
for(i = 9; i >= 0; i--){ // loop for 10 currencies
    while(bal >= curr[i]){ // check whether the balance is greater
        bal -= curr[i] // subtract from current balance
        currList[k++] = curr[i] // add that denomination to the list
    }
}
```

## Test the Code
You can clone the repository and run the index.html file. 
That's it!


## Languages
This code was written in pure HTML, CSS and Vanilla Javascript. No frameworks or tools used.

Suggestions are welcome.
