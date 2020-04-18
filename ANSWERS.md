- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components provide for easy access to stateful information as well as lifecycle methods available on the React.Component that would not otherwise be available on a functional component. 

- [ ] Name three lifecycle methods and their purposes.

ComponentDidMount() - allows for behavior to be attached to the instance of a component rendering to the screen for the first time. 

ComponentDidUpdate() - allows for behavior to be attached to intances of cmoponents updating and re-rendering on the screen per new data mutation or input.

ComponentDidUnmount() - allows for behavior to be attached to the instance of a component unmounting, or being removed from the screen view. Primarily, it is used to remove active event listeners that could stand to interfere with the applicaton. 

- [ ] What is the purpose of a custom hook?

To create and implement reusable funcitonal behavior throught the application build. 

- [ ] Why is it important to test our apps?

To unsure usability is as expected, and does not fall apart under typical (or a-typical) user interaction when it is shipped to production. 