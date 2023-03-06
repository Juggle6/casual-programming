import './contactsPage.css';
import React from 'react'
import { ContactUs } from '../../components/ContactComponent/ContactComponent';

export default function ContactsPage() {
    return (
        <div className="background">
            <div className="position">
                <ContactUs />
            </div>
        </div>
    )
}
