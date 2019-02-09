
```
Renders a file drag and drop component for a single file.

Create a ref called dropRef for this component. Initialize state.drag and state.filename 
to false and '' respectively. The variables dragCounter and state.drag are used to determine 
if a file is being dragged, while state.filename is used to store the dropped file's name. 
Create the handleDrag, handleDragIn, handleDragOut and handleDrop methods to handle drag and 
drop functionality, bind them to the component's context. Each of the methods will handle a 
specific event, the listeners for which are created and removed in componentDidMount and 
componentWillUnmount respectively. handleDrag prevents the browser from opening the dragged 
file, handleDragIn and handleDragOut handle the dragged file entering and exiting the component, 
while handleDrop handles the file being dropped and passes it to this.props.handleDrop. In the 
render() method, create an appropriately styled <div> and use state.drag and state.filename to 
determine its contents and style. Finally, bind the ref of the created <div> to dropRef.
 ```