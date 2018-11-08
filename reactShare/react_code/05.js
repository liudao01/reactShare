
//子组件
class ChildSelect extends React.Component{

    render(){
        return <select onChange={this.props.handleSelectChange}>
            <option value="1">男</option>
            <option value="0">女</option>
        </select>
    }
}

//父组件
class ParentForm extends  React.Component{
    constructor(props){
        super(props);
        this.state={gender:"1"}
    }

    handleChange = (e) => {
        console.log('改变的值 '+e.target.value);
        this.setState ({gender: e.target.value});
    };

    handleSubmit = (e) =>{
        //屏蔽表单的默认提交行为
        e.preventDefault();
        console.log(this.state.gender);
    }

    render(){
        return <form onSubmit={this.handleSubmit}>
            <ChildSelect handleSelectChange={this.handleChange}></ChildSelect><br/>
            <button  type="submit">提交</button>
        </form>
    }
}

ReactDOM.render(<ParentForm/>, document.getElementById("myDiv"));