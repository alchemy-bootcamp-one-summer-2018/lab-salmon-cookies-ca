<!-- markdownlint-disable -->


Lab 7: Rendering Dynamic Content
===

Make your sales table data-driven.

Use a new branch `render`

## Module

Use the `'use strict';` and IIFE technique. Don't forget to add each module as a `<script>` in `sales.html`

## Data

Create a `stores.js` module that exports store data. 

Each store has the following properties

- Location/Name
- Key
- The minimum number of customers per hour.
- The maximum number of customers per hour.
- The average number of cookies purchased per customer.
- (sales by hour property - will be added dynamically)

Example Data:

name|min|max|avg|key
---|---|---|---|---
'Pike Place Market'|23|65|6.3|'pike'
'SeaTac Airport'|3|24|1.2|'seatac'
'Seattle Center'|11|38|3.7|'seattlecenter'
'Capitol Hill'|20|38|2.3|'caphill'
'Alki'|2|16|4.6|'alki'

All stores are open from 6am to 8pm

You will need to:

1. Have a static array that defines each store
1. Loop thru stores and add an `hours` property that is an array of values (cookies sold) for each hour
    1. Loop for the number of hours stores are open
      1. Use a random function to produce a number of customers that is between the `min` and `max` for each store
      1. Multiple the customers number by the average cookies purchased per customer

Export the final `stores` array of data

## Rendering

Use the `toDOM` and template literal technique we used in class.

1. Create a table row for each store, and append to `tbody`
1. Go ahead and "hard code" positional indexes in table cells: `<td>store.hours[0]</td><td>store.hours[1]</td>`
1. Totals
    1. Define a totals object that has a location property of "Totals" and an hours property that is an array that will hold the totals for each hour
    1. Loop through the data and calculate the totals for each hour
1. Use the same template to produce table row, but append to `tfoot`
    
    

|                | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm | 7:00pm | Daily Location Total
|------------------------|-------|--------|--------|--------|--------|---------|---------|---------|--------|--------|--------|--------|--------|--------|--------|
| 1st and Pike      |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| SeaTac Airport           |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Seattle Center |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Capitol Hill       |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Alki        |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Totals                 |       |        |        |        |        |         |         |         |        |        |        |        |        |        |

