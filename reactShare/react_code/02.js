

//案例：点击切换，喜欢不喜欢？

//标签属性命名改成了，小驼峰命名规则

//Activity生命周期

//实例化组件对象过程中，调用getInitialState设置state对象的初始值
// var Text = React.createClass({
//     //设置状态的初始值
//     getInitialState : function(){
//         return {isLike:false};
//     },
//     //点击事件回调
//     handleClick : function(){
//         //改变状态
//         this.setState({isLike:!this.state.isLike});
//     },
//     //当状态改变时，会重新调用render函数，重绘
//     render : function(){
//         //获取状态
//         var text = this.state.isLike ? "喜欢" : "不喜欢";
//         return <p onClick={this.handleClick}>你{text}吗？</p>
//     }
// });

// class Text extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isLike:false};
//
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(){
//         this.setState({
//             isLike:!this.state.isLike
//         });
//         console.log(this.state.isLike);
//         // this.setState({isLike:!this.state.isLike});
//     }
//     render(){
//         var text = this.state.isLike ? "喜欢" : "不喜欢";
//         return <p onClick={this.handleClick}>你{text}吗?</p>
//     }
//
// }
class Text extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLike:false};

    }

    handleClick = ()=>{
        this.setState({
            isLike:!this.state.isLike
        });
        console.log(this.state.isLike);
    }
    render(){
        var text = this.state.isLike ? "喜欢" : "不喜欢";
        return <p onClick={this.handleClick}>你{text}吗?</p>
    }

}

ReactDOM.render(<Text/>, document.getElementById("myDiv"));

//加载流程：
//1.getInitialState（初始化，设置组件的state的值，给了一个对象）
//2.render（不喜欢）

//点击之后的流程
//1.handleClick（点击回调）
//2.setState（改变状态）
//3.render（喜欢）


