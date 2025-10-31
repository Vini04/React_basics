class Car extends React.Component {
    render() {
        return (
            // Here, react application has a component called Car, which returns a <h2> element
            <h2>I am a Car!</h2>
        )
    }
}

// To use this component in your application, use similar syntax as normal HTML: <Car />
createRoot(document.getElementById('root')).render(
  <Car />
);

// eg : Create a constructor function in the Car component, and add a color property:
class Car1 extends React.Component {
    // Constructor function : purpose is to initialize the object's properties
    constructor() { 
        super(); // Always call super() first when defining the constructor of a subclass
        this.state = { color: "red" };
    }
    render() {
        return (
            <h2>I am a {this.state.color} Car!</h2>
        )
    }
}

// Another Way
// eg : Props : Use an attribute to pass a color to the Car component, and use it in the render function:
class Car2 extends React.Component {
    render() {
        return (
            <h2>My car is of {this.props.color} Color!</h2>
        );
    }
}
createRoot(document.getElementById('root')).render(
  <Car2 color="blue" />
);

// If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.
class Car3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>I am a {this.props.model}!</h2>
        );
    }
}
createRoot(document.getElementById('root')).render(
  <Car3 model="GT" />
);

// We can refer to components inside other components
class Car4 extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car4 />
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Garage />
)