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

#### Plan

* start at the top of the component tree, start discrete, and abstract one layer at a time while maintaining a functioning implementation in the actual dom (or sales.html).

1. index.js
2. app.js
3. html.js
