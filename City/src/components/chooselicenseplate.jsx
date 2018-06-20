import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import style from "../static/css/style1.css"
import { connect } from "react-redux"
import getLocation from "../HOC/getlocation"
import getDate from "../HOC/getData"
import Store,{actions,SETLICENSE} from "../redux/index"
class licensePlate extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            showCity: this.props.cityprovince[this.defaultCity()],
            selectCity:this.props.locations[0].name,
            classState:this.defaultCity()
        }
    }
    defaultCity() {
        let id = null
        this.props.province.some((i, ind) => {
            i.province.some((item, index) => {
                if (item.name == this.props.locations[0].province) {
                    id = item.id
                    return true;
                } else {
                    return false;
                }
            })
        })
        return id;
    }

    scrollCity(){
        let letter="";
        this.props.province.some((item,index)=>{
            let state=item.province.some((i,ind)=>{
                if(i.id==this.state.classState){
                    return true;
                }else{
                    return false;
                }
            });
            if(state){
                letter=item.letter;
                return true;
            }else{
                return false;
            }
           
        })
    this.refs.province.scrollTop=this.refs[letter].offsetTop-70;
    }
    componentDidMount(){
        this.scrollCity()
    }
    changeCity(i) {
        let id = null
        Object.entries(this.props.cityprovince).some(arr => {
            if (arr[0] == i.id) {
                id = arr[0];
                return true
            }
        });
        this.setState({
            showCity: this.props.cityprovince[id],
            classState:id
        },()=>{
            this.scrollCity()
        })
    }
    show(i){
        Store.dispatch(actions[SETLICENSE](i.name))
        this.setState({
            selectCity:i.name
        })
    }
    scroll(i){
        this.refs.province.scrollTop=this.refs[i.letter].offsetTop-70;
    }
    render() {
        let $left = this.props.province.map((item, index) => {
            let $li = item.province.map((i, ind) => {

                let li = <p key={ind} className={this.state.classState==i.id?style.active:null} onClick={() => { this.changeCity(i) }} >{i.name}</p>
                return li;
            })
            return (<div key={index}>
                <h3 ref={item.letter}>{item.letter}</h3>
                <div>
                    {$li}
                </div>
            </div>)
        })
        let $center = this.state.showCity&&this.state.showCity.map((i, ind) => {
            return <p key={ind} onClick={()=>{this.show(i)}}>{i.name}</p>
        })
        let $right= this.props.province.map((item, index) => {
            return(<p key={index} onClick={()=>{this.scroll(item)}}>{item.letter}</p>) 
        })
        return (
            <div className={style.licensePlate}>
                <nav><Link to="/chooselocation">返回</Link><span>您的上牌城市</span></nav>
                <div className={style.top}>{this.state.selectCity}</div>
                <section className={style.box}>
                    <div className={style.left} ref="province">
                        {$left}
                    </div>
                    <div className={style.center}>
                        {$center}
                     </div>
                    <div className={style.right}>
                        {$right}
                    </div>
                </section>
            </div>
        )
    }
}
let select = (state) => {
    return state;
}
let license = getDate(connect(select)(getLocation(licensePlate)), { url: "/api" })
let licenseRouter3 = () => {
    return <Route path="/license" component={license} />
}
export default licenseRouter3;
