var Greeter = React.createClass({

    // This is where we declare the behave of our component::
    getDefaultProps: function(){
        return {
          name: "React",
          message: "Default message"
        }
    },

    onButtonClick: function(e){
        e.preventDefault();
        var name = this.refs.name.value; // We get the user input
        alert(name);
    },

    render: function(){
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
              <h1>Hello {name}!</h1>
              <p>{message}</p>

              <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name" />
                <button>Set Name</button>
              </form>

            </div>
        )
    }

});

var firstName = "Alexis";
var theMessage = "Message from prop!";

ReactDOM.render(
    <Greeter name={firstName} message={theMessage} />,
    document.getElementById("app")
);
