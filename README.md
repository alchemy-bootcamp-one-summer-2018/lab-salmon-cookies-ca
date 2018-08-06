<!-- markdownlint-disable -->


# Lab Salmon Cookie

## TODO

### Layout

* proper coloring of table
* Elements 100% width
* Proper layering of elements
* Better color diversification
* Real content
* Better product descriptions

### Data manipulation

* put sig figs into every calculation, or maybe just use all whole numbers
* improve schema for storing totals? is stats array with totals object the best way to do it?
* separate the 5 parameter function that does totals of totals
* improve functions in general (see better.js in 'unused' folder)

### Events

* TBD

### Components

#### Notes

* Each component has a template method, a render method, and a dom. template -> render -> dom. 
* Template gets its data from the API, which is a data store and will eventually represent an actual database implementation. It is not a component.
* html.js is the re-used method for all of the rendering.
* app.js is the holding container for all of the rendered components
* index.js writes directly to sales.html. It gets its input from app.js, and it once again uses html.js (which the containers use too).

* It seems like the pattern for components is:
    * import/export from/to "module" (will eventually be import/export statements in ES6, but who cares)
    * a template function that preps a DOM node, with help from html.js
    * a class with props, at minimum with a render method that calls the template and sends it to a parent component (either a container-like component such as a table which contains rows or the ultimate container, the app.js)
    * not sure why the template doesn't belong to the class too... particularly if you just have one class and one template per component
    * data comes in at app.js right now. however, it might make sense to split table and counter off, give that a parent element like 'display', and make data only go through there. then, split store form off, and make eventlisteners come up through there.

#### Plan

* start at the top of the component tree, start discrete, and abstract one layer at a time while maintaining a functioning implementation in the actual dom (or sales.html.

1. index.js
2. app.js
3. html.js

#### TODO

* make store-table-row take data from api (like store-counter)
* make store-table take the store-table-rows
* make the table work for stores and totals
* fill out store-form
* fill out store-api
* make table update dynamically


#### Stretch goals

* make styling better
* make other pages into components
* 