/**
 * Created by zhqmac on 2018/5/11.
 */
import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
var args = "one world one dream";
var data="";
class Page1 extends Component {

    constructor(props){
        super(props);
        //获取上个页面传过来的值
        /*
         * data是state中的一个字段,因为app.js传过来的值对应的key是data,所以这里这么写
         * */
        data = this.props.location.state.data;
    }
    componentDidMount(){
        console.log(this.props.location.state.data);
    }
    toNextPage=()=>{
        //使用history的push方法,实现跳转
        this.props.history.push({
            pathname:"/page2",
            state:{args:args}
        });
    };

    render() {
        return (
            <div >
                Page1 <br/>
                {"App说:"+ data.name+data.value}
                <div>
                    {/*使用Link控件跳转*/}
                    <Link to={
                    {pathname:"/page2",
                        state:{args:args}}
                    }> Page2</Link>
                </div>
                {/*使用history的push方法,实现跳转*/}
                <button onClick={()=>this.toNextPage()}>
                    去下一页
                </button>
            </div>
        );
    }
}

// export default withRouter(Page1);
export default Page1