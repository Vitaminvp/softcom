Renders a tabbed menu and view component.
```
Define TabItem as a middleware, pass it to the Tab and remove unnecessary 
nodes expect for TabItem by identifying the function's name in props.children. 
Use Array.prototype.map on the collected nodes to render the tab-menu and tab-view. 
Define changeTab, which will be executed when clicking a <button> from the tab-menu. 
changeTab executes the passed callback, onTabClick and updates state.bindIndex, 
which in turn causes a re-render, evaluating the style and className of the tab-view 
items and tab-menu buttons according to their index.
```