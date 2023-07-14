import React from "react";
import Styles from "./Footer.module.scss";
import FooterFormTaskListImg from "../../assets/images/footerformtasklist.svg";
import FooterContactForm from "../FooterContactForm/index";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twitter.png";
import Youtube from "../../assets/images/youtube.png";
import Linkedin from "../../assets/images/linkedin.png";
import Behance from "../../assets/images/behance.png";
import Dribble from "../../assets/images/dribble.png";

const index = () => {
  return (
    <div className={Styles.Footer}>
      <footer className={Styles.Footer_Main}>
        <div className={Styles.Footer_Main_formsection}>
          <div
            className={`container ${Styles.Footer_Main_formsection_formbox}`}
          >
            <h1 className="head-line">Tell Us About Your Project</h1>
            <p>
              Let’s discuss your project and find out what we can do to provide
              value.
            </p>
            <div className={Styles.Footer_Main_formsection_formbox_flexcol}>
              <div
                className={
                  Styles.Footer_Main_formsection_formbox_flexcol_innerone
                }
              >
                <img src={FooterFormTaskListImg} alt="Task_List" />
              </div>
              <div
                className={
                  Styles.Footer_Main_formsection_formbox_flexcol_innertwo
                }
              >
                <FooterContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.Footer_Main_footerlink}>
          <div className="container">
            <div className={Styles.gridboxtwo}>
              <div className={Styles.gridboxtwo_innerone}>
                <div className={Styles.gridboxtwo_innerone_accorbox}>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Company
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        About Us
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#Contact"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Contact Us
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#Career"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Career
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#PrivacyPolicy"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#TermsService"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Terms &amp; Service
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#RefundCancellation"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Refund &amp; Cancellation
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Ecommerce Development
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#prestashop-development-company"
                      >
                        Prestashop Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#magento-development-company"
                      >
                        Magento Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#webflow-development-agency"
                      >
                        Webflow Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#BigCommerceDevelopment"
                      >
                        BigCommerce Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#OpenCartDevelopment"
                      >
                        OpenCart Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#WooCommerceDevelopment"
                      >
                        WooCommerce Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#drupal-development-services"
                      >
                        Drupal Development
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Mobile App Development
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#prestashop-development-company"
                      >
                        iPhone App Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#prestashop-development-company"
                      >
                        Android App Development
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Web Development
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#prestashop-development-company"
                      >
                        PHP Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#prestashop-development-company"
                      >
                        Wordpress Development
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                        href="#prestashop-development-company"
                      >
                        Ruby on Rails Development
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={Styles.gridboxtwo_innerone_accorbox}>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Resources
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Blog
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Portfolio
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Web Design
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Mobile App Design
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#EcommerceWebsiteDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Ecommerce Website Design
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#WebAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Web App Design
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#LandingPageDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Landing Page Design
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Marketing
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Search Engine Optimization (SEO)
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Social Media Optimization (SMO)
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Pay Per Click (PPC)
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Payment Gateway Integration
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Paypal Integration
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Stripe Integration
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Mangopay Integration
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Alma Integration
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Monetico Integration
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#MobileAppDesign"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        CMI Integration
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={Styles.gridboxtwo_innertwo}>
                <div className={Styles.gridboxtwo_innerone_accorbox}>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Hire Moblie App Developer
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire iPhone App Developer
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire Android App Developer
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire Hybrid App Developer
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire Web App Developer
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Hire Experts
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Shopify Expert
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Webflow Expert
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        WordPress Expert
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Prestashop Expert
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        UI/UX Expert
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Graphic Design Services
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Logo Design
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Banner Design
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={Styles.gridboxtwo_innerone_accorbox}>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Latest Technologies
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Web3.js
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        React.js
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Angular.js
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Vue.js
                      </a>
                    </li>
                  </ul>
                  <h3 className={Styles.gridboxtwo_innerone_accorbox_title}>
                    Hire Web Developer
                  </h3>
                  <ul className={Styles.gridboxtwo_innerone_accorbox_linklist}>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire PHP Developer
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire Drupal Developer
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire Ruby on Rails Developer
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorbox_linklist_item
                      }
                    >
                      <a
                        href="#About"
                        className={
                          Styles.gridboxtwo_innerone_accorbox_linklist_item_link
                        }
                      >
                        Hire Wordpress Developer
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={Styles.gridboxtwo_innerone_accorboxfull}>
                  <h3
                    className={Styles.gridboxtwo_innerone_accorboxfull_BigTitle}
                  >
                    Contact Info
                  </h3>
                  <ul
                    className={Styles.gridboxtwo_innerone_accorboxfull_linklist}
                  >
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorboxfull_linklist_item
                      }
                    >
                      <a
                        href="mailto:info@startdesigns.com"
                        className={
                          Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link
                        }
                      >
                        <img
                          src="https://www.startdesigns.com/img/mail.svg"
                          alt="mail"
                        />
                        <p
                          className={
                            Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link_labl
                          }
                        >
                          Sales:
                        </p>
                        <p
                          className={
                            Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link_value
                          }
                        >
                          info@startdesigns.com
                        </p>
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorboxfull_linklist_item
                      }
                    >
                      <a
                        href="skype:+start10designs"
                        className={
                          Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link
                        }
                      >
                        <img
                          src="https://www.startdesigns.com/img/skype.svg"
                          alt="skype"
                        />
                        <p
                          className={
                            Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link_labl
                          }
                        >
                          Skype Id:
                        </p>
                        <p
                          className={
                            Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link_value
                          }
                        >
                          start10designs
                        </p>
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorboxfull_linklist_item
                      }
                    >
                      <a
                        href="javascript:void(0)"
                        className={
                          Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link
                        }
                      >
                        <img
                          src="https://www.startdesigns.com/img/telephone.svg"
                          alt="phone"
                        />
                        <p
                          className={
                            Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link_labl
                          }
                        >
                          Business No:
                        </p>
                        <p
                          className={
                            Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link_value
                          }
                        >
                          +91 141-4044287
                        </p>
                      </a>
                    </li>
                    <li
                      className={
                        Styles.gridboxtwo_innerone_accorboxfull_linklist_item
                      }
                    >
                      <a
                        href="javascript:void(0)"
                        className={
                          Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link
                        }
                      >
                        <img
                          src="https://www.startdesigns.com/img/global.svg"
                          alt="mail"
                        />
                        <p
                          className={
                            Styles.gridboxtwo_innerone_accorboxfull_linklist_item_link_labl
                          }
                        >
                          Our Global Presence:{" "}
                        </p>
                        <div class="flags">
                          <img
                            src="https://www.startdesigns.com/img/india.svg"
                            alt="flag"
                          />
                          <img
                            src="https://www.startdesigns.com/img/france-flag.svg"
                            alt="flag"
                          />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.Footer_Main_footerlink_bottom}>
            <div className="container">
                <div className={Styles.flexbox}>
                    <div className={Styles.flexbox_Inner}>
                    <small>© Copyright 2015 - 2023. All Rights Reserved.</small>
                    </div>
                    <div className={Styles.flexbox_Inner}>
                    <small>
                        Made In India &nbsp;
                        <img
                        src="https://www.startdesigns.com/img/india.svg"
                        alt="India-Flag"
                        />
                    </small>
                    </div>
                    <div className={Styles.flexbox_Inner}>
                    <div className={Styles.flexbox_Inner_bottom_socialmedia}>
                        <div className={Styles.flexbox_Inner_bottom_socialmedia_logo}>
                        <img src={Facebook} />
                        </div>
                        <div className={Styles.flexbox_Inner_bottom_socialmedia_logo}>
                        <img src={Twitter} />
                        </div>
                        <div className={Styles.flexbox_Inner_bottom_socialmedia_logo}>
                        <img src={Youtube} />
                        </div>
                        <div className={Styles.flexbox_Inner_bottom_socialmedia_logo}>
                        <img src={Linkedin} />
                        </div>
                        <div className={Styles.flexbox_Inner_bottom_socialmedia_logo}>
                        <img src={Behance} />
                        </div>
                        <div className={Styles.flexbox_Inner_bottom_socialmedia_logo}>
                        <img src={Dribble} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;