import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import ContactFrom from '../../components/ContactFrom/ContactFrom.jsx';

const ContactFromContainer = () => {
    return (
        <div className="contact-form-section section section-padding-t90-b100 bg-primary-blue">
            <div className="container">
                <div className="row">
                    <div >
                        <SectionTitle
                            headingOption="fz-32"
                            title="PLEASE FILL THE REQUIREMENTS"
                            subTitle=""
                        />
                        <ContactFrom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFromContainer
