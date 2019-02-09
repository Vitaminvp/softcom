Renders a carousel component.

```
Initially set state.active to 0 (index of the first item). 
Use an object, style, to hold the styles for the individual components. 
Define a method, setActiveItem, which uses this.setState to change the state's 
active property to the index of the next item. Define another method, changeItem, 
which is called by setActiveItem after updating the state each time and also when 
the component first renders (on ComponentDidMount). In the render() method, 
destructure state, style and props, compute if visibility style should be set to 
visible or not for each carousel item while mapping over and applying the combined 
style to the carousel item component accordingly. Render the carousel items using 
React.cloneElement and pass down rest props along with the computed styles.
 ```