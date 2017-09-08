var greeting = React.createElement('h1', {}, 'Hello, World!');
var clock = React.createElement('h2', {}, `It is ${new date().toLocaleTimeString()}`);
var app = React.createElement('div', {}, greeting, clock);

ReactDOM.render(
  greeting,
  document.getElementById('react-app-root')
);
