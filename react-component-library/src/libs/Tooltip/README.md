```
Renders a tooltip component.

Set the state of the component to show: false initially, define an object, style, to 
hold the styles for individual components and their states. Create a method, 
toggleTooltip, which uses this.setState to change the state's show property from true to 
false and vice versa. Bind showTooltip and hideTooltip to the component's context with the 
respective values of true and false. In the render() method, compute if the tooltip should 
be shown or hidden, render the content of the tooltip and bind the onMouseEnter and onMouseLeave 
events to showTooltip and hideTooltip respectively.
```