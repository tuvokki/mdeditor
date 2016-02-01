var Hello = React.createClass({
  displayName: 'Hello',
  render: function() {
    return React.createElement("div", null, "Call ", this.props.name);
  }
});

function init() {
  console.log("init");
  global.$(global.window.document).ready(function(){
      var editor = require("./../js/editor.js");
      var textEditor = global.$('#editor');
      textEditor.bind('input propertychange', function() {
          editor.reload();
      });
    ReactDOM.render(
      React.createElement(Hello, {name: "Actions"}),
      document.getElementById('example')
    );
  });
  
  var menu = require("./../js/menu.js");
  menu.initMenu();
  if(global.gui.App.argv.length > 0){
      var editor = require("./../js/editor.js");
      editor.loadFile(global.gui.App.argv[0]);
  }

}
