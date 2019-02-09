Renders a dialog component in a modal, controllable through events.
To use the component, import ModalDialog only once and then display 
it using ModalDialog.show(), passing the JSX templates and data as parameters.

Define modalHandler, a method that will handle showing the modal dialog, 
set state to the default values initially and bind the close and modalClick 
methods to the component's context. Define close and modalClick to toggle the 
visibility of the modal dialog, based on state.closeOnClick. Use the CustomEvent 
API to listen for modal events, that can be dispatched from the static show() 
method, handle listeners appropriately from componentDidMount and componentWillUnmount.

The show() method accepts an argument, that should contain three parameters:

+ title, a string for the dialog's title
+ closeOnClick, true if the modal should close on click or false if it should only close when clicking the X button
+ content, which is the JSX content to be rendered inside the dialog

Finally, in the render() method, use a <div> to wrap everything and render the modal dialog with the content passed to show().

Notes:
+ This component includes a lot of CSS, which might conflict with other CSS in your project. It is recomended for the modal to be a direct child of the body tag.
+ A more up-to-date method with lower compatibility is to use Portals in React 16+.

```
// every time you wanna call the dialog
// content is a jsx element
ModalDialog.show({
  title: 'Hello, world!',
  closeOnClick: true,
  content: <img src="https://github.com/30-seconds/30-seconds-of-react/blob/master/logo.png"/>
});  

```