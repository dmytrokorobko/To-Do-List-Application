These are a series of self-test exercises (5 tasks) designed by ChatGPT to build my confidence, knowledge and skills. They cover topics such as components and props, hooks, promises and async/await, React Router, and Jest/RTL testing. These exercises are based on content from the Front-End Web Engineering course on Codecademy.

---

# Task 1: Build a To-Do List Application

[Live Version](https://dmytrokorobko.github.io/To-Do-List-Application/)

## Features

1. **Components and Props**: 
    - Create components for the header, to-do item, and footer.
    - Pass data via props to the to-do item component.

2. **Hooks**: 
    - Use `useState` to manage the state of the to-do list items.
    - Use `useEffect` to fetch initial to-do items from a mock API.

3. **Promises and Async/Await**: 
    - Fetch to-do items from a mock API using `async/await` in `useEffect`.

4. **React Router**: 
    - Add routes for different views like "All Tasks", "Completed Tasks", "Pending Tasks", and "New Task".

5. **Jest and RTL Testing**: 
    - Write tests for the components to ensure they render correctly.
    - Verify that the functionalities work as expected.

## Project Structure

Below is the directory structure of the project:


### Directories and Files

- **assets/images/**
  - `bg.jpg`: Background image.
  - `logo.jpg`: Logo image.

- **components/**
  - `Footer.js`: Footer component.
  - `Header.js`: Header component.
  - `Item.js`: Item component.
  - `Root.js`: Root component.

- **contexts/**
  - `TasksContext.js`: Context for managing tasks state.

- **data/**
  - `fakeArray.js`: Fake data array for testing or initial data.
  - `initialArray.js`: Initial array data for tasks.

- **pages/**
  - `AllTasks.js`: Page displaying all tasks.
  - `AllTasks.test.js`: Test file for `AllTasks.js`.
  - `CompletedTasks.js`: Page displaying completed tasks.
  - `CompletedTasks.test.js`: Test file for `CompletedTasks.js`.
  - `NewTask.js`: Page for creating a new task.
  - `NewTask.test.js`: Test file for `NewTask.js`.
  - `Page404.js`: 404 error page.
  - `Page404.test.js`: Test file for `Page404.js`.
  - `PendingTasks.js`: Page displaying pending tasks.
  - `PendingTasks.test.js`: Test file for `PendingTasks.js`.

- **utils/**
  - `helper.js`: Utility helper functions.
  - `helper.test.js`: Test file for `helper.js`.

- `App.css`: CSS file for the main app component.
- `App.js`: Main app component.
- `index.css`: CSS file for the main index.
- `index.js`: Entry point of the application.

## Unit Testing Issues and Resolutions

While writing unit tests for the `TasksProvider` component and related components in the application, we encountered several issues. Below is a summary of the problems and the solutions we implemented:

### Initial Data Loading with Delay

**Problem:**
The `useEffect` in `TasksProvider` was fetching initial data with a simulated delay using `setTimeout`. This caused issues in unit tests where the test would timeout or proceed before the data was fully loaded.

**Error:**
thrown: "Exceeded timeout of 5000 ms for a test. Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."

**Solution:**
We simplified the data fetching by removing the delay (`setTimeout`) and directly assigning the initial data. This ensures that the state is set immediately, allowing the test to proceed without unnecessary waiting.

**Code Changes:**
```javascript
useEffect(() => {
  ...
  // Simulate fetching data with a delay using setTimeout to mimic loading in a browser environment.
  const getArray = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Fetch logic here
    }, 3000);
  });

  let data = [];
  if (initialTasks.length > 0) {
    data = initialTasks; // Simplified data fetching without delay for unit testing
  } else {
    data = await getArray; // Use regular fetching with simulated delay
  }
  // Further logic to use the data
}, [initialTasks]);




