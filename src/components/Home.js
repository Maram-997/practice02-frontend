import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Card, Button } from 'react-bootstrap/'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            placesArr: [],
            placeObj:{}
        }
    }
    componentDidMount = async () => {
        const {user}= this.props.auth0
        let url = `https://practice02-301.herokuapp.com/places`
        let result = await axios.get(url)
        this.setState({
            placesArr: result.data,
            email: user.email
        })
    }
  
    addToFavs = async (idx)=>{

        let url = `https://practice02-301.herokuapp.com/addtofavs/${this.state.email}`
        let selectedPlace={
          placeName:this.state.placesArr[idx].placeName,
          placeImg:this.state.placesArr[idx].placeImg
        }
      await axios.post(url,selectedPlace)
    }

    render() {
        return (
            <div>
                {this.state.placesArr.map((element,idx) => {
                 return   <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.placeImg} />
                        <Card.Body>
                            <Card.Title>{element.placeName}</Card.Title>
                          
                            <Button variant="primary" onClick={()=>{this.addToFavs(idx)}}>Add to Favourites</Button>
                        </Card.Body>
                    </Card>
                })}
            </div>
        )
    }
}

export default withAuth0(Home)