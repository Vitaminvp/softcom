Renders a table with rows dynamically created from an array of objects and a list of property names.
```
Use Object.keys(), Array.prototype.filter(), 
Array.prototype.includes() and Array.prototype.reduce() to 
produce a filteredData array, containing all objects with the 
keys specified in propertyNames. Render a <table> element with a 
set of columns equal to the amount of values in propertyNames. 
Use Array.prototype.map to render each value in the propertyNames 
array as a <th> element. Use Array.prototype.map to render each 
object in the filteredData array as a <tr> element, containing 
a <td> for each key in the object.
```
Notes:
+ This component does not work with nested objects and will break if there are nested objects inside any of the properties specified in propertyNames.