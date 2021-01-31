import React from "react";

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }

    render() {
        return (
          <button 
            className="square" 
            onClick={() => this.setState({value: 'X'})}
          >
            {this.state.value}
          </button>
        );
    }
}

const RecipePage = () => (
    <div>
        <h1>
            Recipe Page
        </h1>
        <Square />
    </div>
)

export default RecipePage;