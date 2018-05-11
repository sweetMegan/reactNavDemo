/**
 * Created by zhqmac on 2018/5/11.
 */
import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
var args = "";
class Page2 extends Component {
    constructor(props){
        //constructor方法中,使用this关键字必须在super之后
        super(props);
        //获取上个页面传过来的值
        /*
        * args是state中的一个字段,因为page1传过来的值对应的key是args,所以这里这么写
        * */
        args = this.props.location.state.args;
    }
    render() {
        return (
            <div >
                Page2<br/>
                {"Page1 说:"+args}
                <div>
                    <Link to="/">to App</Link>
                </div>
            </div>
        );
    }
}

export default Page2;
