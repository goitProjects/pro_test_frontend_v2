import React from "react";
import s from "./ContactsCard.module.scss";
import sprite from "../../sprites/sprite.svg";

const ContactsCard = ({
  name,
  photo,
  position,
  tasks,
  email,
  linkedin,
  facebook,
}) => {
  return (
    <div className={s.container}>
      <img src={photo} className={s.image} alt="profile" />
      <div className={s.box}>
        <h3 className={s.name}>{name}</h3>
        <p className={s.position}>{position}</p>
        <p className={s.description}>{tasks}</p>

        <ul className={s.contacts}>
          <li className={s.contactsWrapper}>
            <a href={linkedin} target="_blank" rel="noreferrer">
              &nbsp;
              <svg className={s.contactsLogo}>
                <use href={sprite + "#linkedin-logo"} />
              </svg>{" "}
            </a>
          </li>
          <li className={s.contactsWrapper}>
            <a href={facebook} target="_blank" rel="noreferrer">
              &nbsp;
              <svg className={s.contactsLogo}>
                <use href={sprite + "#facebook-logo"} />
              </svg>{" "}
            </a>
          </li>
          <li className={s.contactsWrapper}>
            <a href={`mailto:${email}`}>
              <svg className={s.contactsLogo}>
                <use href={sprite + "#email-logo"} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsCard;
