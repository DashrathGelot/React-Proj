import React from 'react';
import { Button, Container,Row,Col} from 'react-bootstrap'; 

export default class HeaderComponent extends React.Component{
    render(){
        return(
            <div>
                <h1 className="heading"> Student App </h1>
                <Container>
                    <Row>
                        <Col md={{ span: 0, offset: 10 }}>
                            <Button variant="outline-info" onClick={this.props.setModalShow}>Add New Student</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}