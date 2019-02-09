Renders a textarea component with a character limit.

```
Use the value of the value prop to determine the initial state.content 
and state.characterCount and the value of the limit props to determine the
 value of state.limit. Create a method, handleChange, which trims the 
 event.target.value data if necessary and uses Component.prototype.setState 
 to update state.content and state.characterCount, and bind it to the component's 
 context. In therender() method, use a<div> to wrap both the<textarea> and the <p> 
 element that displays the character count and bind the onChange event of the 
 <textarea> to the handleChange method.
 ```