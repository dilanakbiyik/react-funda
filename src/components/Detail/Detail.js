import React from 'react';
import './style.css';
import {getKoop} from "../../services/funda/funda.services";
import DetailInfo from "../DetailInfo/DetailInfo";
import Images from "../Images/Images";

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
        const { match, detail, loading } = this.state;
        if(loading){
            return <div>Loading...</div>
        }
        return (
            <div className="">
                <DetailInfo info={detail.info}/>
                <Images images={detail.images}/>
                {
                    JSON.stringify(detail)
                }
            </div>
        );
    }
}


export default Detail;
