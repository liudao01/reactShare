

//React 组件的生命周期
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}


class Content extends React.Component {
    //在完成首次渲染之前调用
    componentWillMount() {
        console.log('Component WILL MOUNT! 将要挂载')
    }
    componentDidMount() {
        //真实的DOM被渲染出来后调用
        console.log('Component DID MOUNT! 已经挂载')
    }
    //组件接收到新的props时调用
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS! 接受到新的props')
    }
    //组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate");
        return true;
    }
    //接收到新的props或者state后，进行渲染之前调用
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE! 将要更新props state');
    }
    //完成渲染新的props或者state后调用，此时可以访问到新的DOM元素
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE! 完成更新props state')
    }
    //组件被移除之前被调用，可以用于做一些清理工作
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT! 将要卸载组件')
    }
    //必选的方法，创建虚拟DOM
    // 只能通过this.props和this.state访问数据
    // 可以返回null、false或任何React组件
    // 只能出现一个顶级组件（不能返回数组）
    // 不能改变组件的状态
    // 不能修改DOM的输出
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('myDiv')
);
// ReactDOM.render(<MyComponent/>, document.getElementById("myDiv"));