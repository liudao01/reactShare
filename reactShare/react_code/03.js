/*
class Text extends React.Component{
    render (){
        return <p>this is {this.props.name}</p>;
    }
};

ReactDOM.render(<Text name="props test"/>, document.getElementById("myDiv"));*/

//案例：实现在输入框中，输入内容，上面的文字控件也跟着改变

//子组件
// var TextComponent = React.createClass({
//     render : function(){
//         return <div>Hello {this.props.text}!</div>;
//     }
//
// });
class TextComponent extends React.Component{
    render(){
        return <div>Hello {this.props.text}!</div>;
    }
}


class WrapperComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {text:''};
    }

    handleChange = (e)=>{
        this.setState({text:e.target.value})
    }

    render(){
        return <div>
            <TextComponent text = {this.state.text}/>
            <input type="text" onChange={this.handleChange}/>
        </div>
    }
}
//父组件
/*var WrapperComponent = React.createClass({
    //state初始化
    getInitialState : function(){
        return {text:''};
    },
    //内容改变回调
    handleChange : function(e){
        //e 是Event事件对象，target是指事件的目标对象
        //改变状态
        this.setState({text:e.target.value});
    },
    render : function(){
        return <div>
            <TextComponent text={this.state.text}/>
            <input type="text" onChange={this.handleChange}/>
        </div>;
    }
});*/

ReactDOM.render(<WrapperComponent/>, document.getElementById("myDiv"));

//传参流程
//1.handleChange（父组件回调）
//2.setState（修改父组件的状态）
//3.render（父组件重新渲染，子组件也会渲染）
//3.把父组件的状态值，作为子组件的属性值传入
//4.render（子组件内容改变）
