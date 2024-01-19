import React from "react";
import Iframe from "react-iframe";
import { Contactsdesign } from "./styled";
const Contacts = () => {
  return (
    <Contactsdesign>
      <div>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.9215419139435!2d69.20867825713893!3d41.33743719999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c0eb209cf15%3A0xc5f3c404df3abc6d!2sBeruni%20Ave%208%2C%20Tashkent%2C%20Toshkent%20Shahri%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1705085472324!5m2!1sen!2s"
          width="705"
          height="400"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
      <div>
        <span>
          <h1>Контакты</h1>
          <p>
            +7 987 654-32-10 <br />
            <b>info@constructor.ru</b>
          </p>
          <p>
            г. Москва, метро “Китай город”, <br /> ул. Яузская, дом 15/11
          </p>
        </span>
      </div>
    </Contactsdesign>
  );
};

export default Contacts;
