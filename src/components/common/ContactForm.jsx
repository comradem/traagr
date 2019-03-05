import React from 'react';
import styled from 'styled-components';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.contactName,
            email: this.props.contactEmail,
            subject: this.props.subjectEmail,
            content: this.props.contentEmail
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Container>
                    <Form>
                        <Input type="text" defaultValue="How we adress you?.."></Input>
                        <Input type="text" defaultValue="email@example.com"></Input>
                        <textarea className="Input" placeholder="write some text"></textarea>
                        <Button>Submit</Button>
                    </Form>
                </Container>
            </form>
        );
    }
}

export default ContactForm;

const Container = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
`;


const Button = styled.button`
    padding: 0.25em 1em;
    border: 2px black;
    border-radius: 3px;

`;

const Form = styled.div`
    width: 30vw;
    height: 30vw;
    background: #AAA;
    display: flex;
    justify-content: flex-center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 40px;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: none;
`;