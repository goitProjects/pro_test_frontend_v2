import React from "react";
import ContactsCard from "../../contactsCard/ContactsCard";
import { v4 as uuidv4 } from "uuid";

import s from "./ContactsPage.module.scss";
import { contacts } from "./data";

const ContactsPage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.headContainer}>
        <h2 className={s.head}>Our team</h2>
      </div>
      <ul className={s.ourTeam}>
        {contacts.map((item) => (
          <li key={uuidv4()} className={s.ourTeam_Item}>
            <ContactsCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
