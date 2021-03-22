import React,{Component} from 'react';
class Display extends Component{
    render(){
        return(
            <div>
                {this.props.postreducer}
                </div>
        );
    }
}
function mapStateToProps(state){
    return{
        postreducer:state.postreducer
    } 
}
export default Display;