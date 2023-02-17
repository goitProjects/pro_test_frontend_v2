import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ContactsCard from "../../contactsCard/ContactsCard";

import s from "./ContactsPage.module.scss";
import { contacts } from "./data";
import { useResetTest } from "../../../hooks/useResetTest";
import { getLangValue } from "../../../redux/selectors/langSelectors";

const ContactsPage = () => {
  useResetTest();

  // розкоментувати після того як буде переклад контактів румунською
  // const lang = useSelector(getLangValue);

  // видалити після того як буде переклад контактів румунською
  const langState = useSelector(getLangValue);
  const lang = langState === "ro" ? "en" : langState;
  // видалити після того як буде переклад контактів румунською -END

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
