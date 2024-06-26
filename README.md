# DJS05 Project: Building a Redux-Inspired Store for a Tally App

In this challenge, I was required to venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. My primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, I had to use subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## File Structure

-   model (Folder):

    -   [actions.js](https://github.com/haleigh27/HALVAL360_FTO2401_GroupA1_Haleigh-Valentine_DJS05/blob/main/model/actions.js) - Contains the action creators for the the different action types.
    -   [reducers.js](https://github.com/haleigh27/HALVAL360_FTO2401_GroupA1_Haleigh-Valentine_DJS05/blob/main/model/reducers.js) - Contains the reducer function which is called in the dispatch function to update the state.
    -   [store.js](https://github.com/haleigh27/HALVAL360_FTO2401_GroupA1_Haleigh-Valentine_DJS05/blob/main/model/store.js) - Contains the subscribers and states arrays. As well as the getState, dispatch and subscribe functions.

-   scripts.js - Contains code to log the state to the console based on the senarios in the user stories.
-   index.html

## Run the code

-   Ensure that the "Live Server" extention is installed on VS Code.
-   Run the code with live server and inspect the console to see the logged states.

## Overview of approach.

-   I created the store by defining the actions I wanted to execute in actions.js in the model folder.
-   I then wrote the reducer function using a switch statement in the function body.
-   I wrote the code in store.js which defines the initial state as well as the getState(), dispatch() and subscribe() functions.
-   Lastly I compiled the index.html and the scripts.js to call the functions with the necessary arguments.

## Challenges faced and how I overcame them.

-   I initially had a difficult time understanding the concepts from the video expanation. Once I typed out the code for the to-do-app example I was able to go through it and see the big picture as well as what each individual function did and entailed. This finally allowed me to gain a good understanding of the concepts, allowing me to complete the assignment.

</br>

## DJS05 Project Brief:

### Objective

Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.

Observer Pattern resource from Refactoring Guru: https://refactoring.guru/design-patterns/observer

### User Stories (Gherkin Syntax)

Your challenge will encompass the following scenarios, tested through your store's implementation:

#### SCENARIO 1: Initial State Verification

```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

#### SCENARIO 2: Incrementing the Counter

```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

#### SCENARIO 3: Decrementing the Counter

```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

#### SCENARIO 4: Resetting the Counter

```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

### Requirements

-   **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
-   **State Management Functions**:
    -   **getState**: Returns the current state.
    -   **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
    -   **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
-   **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
-   **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

### Submission Guidelines

Your submission should consist of a JavaScript file(s) that encapsulate your Redux-inspired store and the logic for dispatching actions and subscribing to changes. Include a README.md file explaining:

-   How to run your code.
-   A brief overview of your approach.
-   Any challenges you faced and how you overcame them.

Ensure your code is well-commented and adheres to best practices for readability and maintainability.

### Evaluation Criteria

-   **Correctness**: Your implementation should correctly handle the scenarios as outlined in the user stories.
-   **Code Quality**: Use of functional programming principles, clear naming conventions, and code organization.
-   **Documentation**: Clarity of your approach and reflections in the README.md.

This challenge is an excellent opportunity to demonstrate your understanding of state management concepts and functional programming principles. Good luck!
