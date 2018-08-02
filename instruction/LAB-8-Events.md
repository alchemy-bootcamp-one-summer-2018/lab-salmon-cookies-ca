<!-- markdownlint-disable -->

Lab 8: Events and Data Communication
===

Add a form that allows Pat to add a new store. When the store is added, a new row is added to the table and the
totals are updated.

Use a new branch `events`

## JavaScript

Updated your code to use `let` instead of `var` :)

## Component Files

### Existing Code

You should start by moving your code in `index.js` into two separate files:

1. `store-table.js` populates the `tbody` based on data in `stores`
2. `grand-totals.js` populates the `tfoot` based on either:
    1. Calculating totals from `stores` data
    1. A totals object exported from `stores.js`

### Add Store Form

1. Add `<form>` markup to `sales.html` 
1. Create new component `store-form.js` that exports an `initStoreForm` function that takes a `onStoreAdded` callback function.
    1. Inside that function, subscribe to form `submit` event
    1. Prevent the form from posting (`preventDefault`)
    1. Gather the form data into a new `store` object
    1. Call the `onStoreAdded`
    1. Respond to success or error
1. Call the exported `initStoreForm` function from `index.js` and pass a callback function that logs the new store
1. Validate it works

### Update the Data

1. Add and export a function from `stores.js` that takes a store, augments its data, and adds to stores array.
1. (If you are doing totals in `stores.js`, you will need to update the data their as well)

### Add Update Functions

Augment `store-table.js` and `grand-totals.js` to export an `update<NameofComponent>` function that can be called
to get those components to update their presentation (DOM).

* For table data, you can use the track last method we used in class
* For the totals:
    1. You will need to remove the prior row from the `tfoot` before you append a new one. You can use `tbody.children[0].remove()`.
    1. Recalculate totals object
    1. render the new totals row and append to `tfoot`
    
Clean up duplicate code that is used both for inital render and update
