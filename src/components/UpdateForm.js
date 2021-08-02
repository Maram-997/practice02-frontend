import React from 'react'
import { Form , Modal, Button } from 'react-bootstrap/'


class UpdateForm extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>


                    <Form onSubmit={this.props.updatePlace}  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>place name</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.updatedObj.placeName} name='placeName' />
                       
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>place image</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.updatedObj.placeImg} name='placeImg' />
                        </Form.Group>
                    
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary"  type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                    </Form>


               
                </Modal>
            </div>
        )
    }
}

export default UpdateForm
