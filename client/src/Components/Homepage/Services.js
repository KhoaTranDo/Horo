import React, { Component } from "react";
import { BiHomeHeart , BiLock , BiAlarmExclamation} from "react-icons/bi";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <BiHomeHeart />,
        title: "Real homes",
        info:
          "Our listings include authentic photos of real homes. This way, you don’t need to visit them! You can rent a place months in advance, knowing exactly what you’ll find when you arrive"
      },
      {
        icon: <BiLock />,
        title: "Secure payments",
        info:
          "To protect you from fraud, we never ask you to pay outside the Horo website. Your first payment is safe with us, and we only transfer it to the landlord after you move in"
      },
      {
        icon: <BiAlarmExclamation />,
        title: "Safe stays",
        info:
          "In the unlikely case that your new place does not match the information in the listing, report an issue within the 24 hours of your move-in. We’ll temporarily freeze your payment, and find a way to help you"
      }
    ]
  };
  render() {
    return (

      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                  
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>

    );
  }
}