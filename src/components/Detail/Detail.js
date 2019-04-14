import React from 'react';
import './style.css';
import {getKoop} from "../../services/funda/funda.services";

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            detail: null
        };
    }
    componentDidMount(){
        this.loadDetail();
    }
    async loadDetail(){
        const { match } = this.props;
        const detail = await getKoop(match.params.id);
        this.setState({
            ...this.state,
            detail,
            loading: false
        })
    }
    render() {
        const { match, detail } = this.state;
        return (
            <div className="">
                {
                    JSON.stringify(detail)
                }
            </div>
        );
    }
}


export default Detail;
