// this is not showing
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));

// i guess this is replacing it
ReactDOM.render(
    <ul><li>thing 1</li><li>thing 2</li></ul>,
    document.getElementById("root")
);