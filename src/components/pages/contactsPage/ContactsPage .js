import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ContactsCard from "../../contactsCard/ContactsCard";

import s from "./ContactsPage.module.scss";
import { contacts } from "./data";
import { useRestTest } from "../../../hooks/useRestTest";
import { getLangValue } from "../../../redux/selectors/langSelectors";

const ContactsPage = () => {
  useRestTest();

  const lang = useSelector(getLangValue);

  return (
    <div className={s.wrapper}>
      <div className={s.headContainer}>
        <h2 className={s.head}>Our team</h2>
      </div>
      <ul className={s.ourTeam}>
        {contacts[lang].map((item) => (
          <li key={uuidv4()} className={s.ourTeam_Item}>
            <ContactsCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
