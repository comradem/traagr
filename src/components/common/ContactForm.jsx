import React from 'react';
import styled from 'styled-components';


class ContactForm extends React.Component {
    state = {
        email: this.props.contactEmail,
        subject: this.props.subjectEmail,
        content: this.props.contentEmail
    }

    render(){
        return <div>muahahahah</div>;
    }
}

export default ContactForm;