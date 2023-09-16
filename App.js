import React from 'react'
import ReactDOM from 'react-dom/client'

//React element

const heading1 = React.createElement('h1', {id: 'heading'}, "Hi from React library");
//JSX
const heading = <h1 className="heading">Hi from React library JSX</h1>
// const reactElement = root.render(heading1)
// const reactElement1 = root.render(heading)

// React Componen ts
const HeadingComponent = () => <h1 className='headingFunctionComponent'>Hi from React Functional Component</h1>;
const Title = () => (
    <div id="container">
        { HeadingComponent }
        <h3 className='title'>This is the title inside container</h3>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Title />);