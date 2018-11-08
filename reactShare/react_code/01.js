// ReactDOM.render(<h1>Hello, world!</h1>,
//     document.getElementById('myDiv'));

// function add(x) {
//     return x + 2;
// }

// var add = (x) => (x + 3 );
//
// var add = (x,y)=>(
//     x + y);
//
// console.log(add(3,4));

//React.js
//React 组件化(组件的重用)
//自定义组件
class ChildText extends React.Component{
    //组件的内容
    render(){
        return <div>
            Hello <b>React! child component</b>
        </div>;
    }
}

class WrapperText extends React.Component{
    render(){
        //虚拟DOM（Document Object Model）
        //html标签，小写开头
        //自定义组件：大写开头
        return <p>
            <ChildText></ChildText>
            <span>wrapper component</span>
        </p>;
    }
}

//使用
//绘制到页面中
ReactDOM.render(<WrapperText></WrapperText>, document.body);