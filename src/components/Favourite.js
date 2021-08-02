import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import {Card , Button} from 'react-bootstrap/'
import UpdateForm from './UpdateForm';

 class Favourite extends React.Component {
 constructor(props){
     super(props)
     this.state={
      email:'',
      favsArr:[],
      show:false,
      index:0,
      updatedObj:{}

     }
 }
componentDidMount = async () =>{
    const {user}= this.props.auth0
let url = `https://practice02-301.herokuapp.com/favs?email=${user.email}`
let result = await axios.get(url)
this.setState({
    email:user.email,
    favsArr:result.data
})
}

deletePlace = async(idx) =>{
    let url = `https://practice02-301.herokuapp.com/deletePlace/${idx}?email=${this.state.email}`
    let result = await axios.delete(url)
    this.setState({
        favsArr:result.data
    })
}

showForm =  (idx) =>{
    let selectedObj = {
        placeName:this.state.favsArr[idx].placeName,
        placeImg:this.state.favsArr[idx].placeImg
    }
    this.setState({
        show:true,
        updatedObj:selectedObj,
        index: idx
    })

}
handleClose = () =>{
    this.setState({
        show:false
    })
}

updatePlace = async (event) =>{
    event.preventDefault()
    let targetedObj = {
        placeName : event.target.placeName.value,
        placeImg : event.target.placeImg.value
    }
    this.setState({
        show:false,

    })
  let url = `https://practice02-301.herokuapp.com/updatePlace/${this.state.index}?email=${this.state.email}`
  let result = await axios.put(url , targetedObj)
  this.setState({
      favsArr:result.data
  })
}


    render() {
        return (
            <div>
                <UpdateForm show={this.state.show} handleClose={this.handleClose} updatedObj={this.state.updatedObj} updatePlace={this.updatePlace} />
                {this.state.favsArr.map((element,idx)=>{
                     return   (<Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src={element.placeImg} />
                     <Card.Body>
                         <Card.Title>{element.placeName}</Card.Title>
                       
                         <Button variant="primary" onClick={()=>{this.deletePlace(idx)}} >Delete</Button>
                         <Button variant="primary" onClick={()=>{this.showForm(idx)}} >Update</Button>

                     </Card.Body>
                 </Card>)
                })}
            </div>
        )
    }
}

export default withAuth0(Favourite)
