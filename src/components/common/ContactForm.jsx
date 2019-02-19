import React from 'react';
import styled from 'styled-components';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        <label>
                            Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </Form>
                </Container>
            </form>
        );
    }
}

export default ContactForm;

const Container = styled.div`
    width: 90vw;
    height: 90vw;
    background: #FFF;
    box-sizing: border-box;
    padding: 0 40px;
`;

const Form = styled.div`
    width: 30vw;
    height: 30vw;
    background: #AAA;
    display: flex;
    justify-content: flex-center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 40px;
`;