import React from 'react';
import uniqueId from '../../util/unique_id.js';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: ""};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  
  handleChangeTitle(e) {
    this.setState( { title: e.target.value} );
  }
  
  handleChangeBody(e) {
    this.setState( { body: e.target.value} );
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {id: uniqueId(), title: this.state.title, body: this.state.body};
    this.props.receiveTodo(newTodo);
  }
  
  render() {
    // console.log(this.props);
    return (<>
      <form>
       <label> Title
       <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/> 
       </label>
       <label> Body
       <input type="text" value={this.state.body} onChange={this.handleChangeBody}/> 
       </label>
       <input type="submit" value="create Todo" onClick={this.handleSubmit}/>
      </form>
    </>);
  }
}

export default TodoForm;