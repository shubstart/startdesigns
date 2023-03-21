import {Col,Nav,Row,Tab} from 'react-bootstrap';
import Styles from './TabHomeService.module.scss';
import HomeIcon from '../../assets/images/homeicon.svg';
import WebDevelop from '../../assets/images/webdevlopement.svg';
import EcomDevelop from '../../assets/images/ecommercedevelopment.svg';
import MobileDevelop from '../../assets/images/mobileappdevelopment.svg';
import BlockchainDevelop from '../../assets/images/blockchaindevelopment.svg';
import UiUx from '../../assets/images/uiux.svg';
import Marketing from '../../assets/images/marketing.svg';
import GraphicDesignServices from '../../assets/images/graphicdesignservice.svg';
import PaymentGateway from '../../assets/images/paymentgatewayintergration.svg';


function LeftTabs() {
  return (
    <div className={`${Styles.Maintab} Maintab`}>
      <Tab.Container id="left-tabs" defaultActiveKey="first">
        <Row>
          <Col sm={4}>
            <Nav variant="pills" className={Styles.flex_column}>
              <Nav.Item className={Styles.flex_column_item}>
                <Nav.Link  eventKey="first" className={Styles.flex_column_item_link}>
                    <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                            <img src={WebDevelop} alt='Web Development' />
                        </div>
                        <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>Web Development</h6></div>
                    </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                          <img src={EcomDevelop} alt='Ecommerce Development' />
                      </div>
                      <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>Ecommerce Development</h6></div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                        <img src={MobileDevelop} alt='Mobile App Development' />
                    </div>
                    <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>Mobile App Development</h6></div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="four">
                <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                        <img src={BlockchainDevelop} alt='Blockchain Development' />
                      </div>
                      <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>Blockchain Development</h6></div>
                    </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="five">
                <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                      <img src={UiUx} alt='UI/UX' />
                    </div>
                    <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>UI/UX</h6></div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="six">
                <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                      <img src={Marketing} alt='Marketing' />
                    </div>
                    <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>Marketing</h6></div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seven">
                <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                      <img src={GraphicDesignServices} alt='Graphic Design Services' />
                    </div>
                    <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>Graphic Design Services</h6></div>
                  </div>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="eight">
                <div className={Styles.flex_column_item_link_tabflex}>
                        <div className={Styles.flex_column_item_link_tabflex_innerone}>
                      <img src={PaymentGateway} alt='Payment Gateway Intergration' />
                    </div>
                    <div className={Styles.flex_column_item_link_tabflex_innertwo}><h6>Payment Gateway Integration</h6></div>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>Web Developemnt</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>Ecommerce Development</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>Mobile App Development</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>Blockchain Development</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="five">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>UI/UX</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="six">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>Marketing</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="seven">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>Graphic Design Services</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="eight">
                <div className={Styles.Maintab_Content}>
                  <h2 className={Styles.Maintab_Content_head}>Payment Gateway Integration</h2>
                  <p>Technology for Growing Businesses</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.</p>
                  <p>We can convert your ideas into reality. We create cost-effective, award-winning solutions for our clients to grab digital space & create new business opportunities.</p>
                  <p>StartDesigns is a custom web design & web app development agency based out in India, France, and USA. We have a team of skilled professionals with 290+ collective years of experience in custom UX/UI design and web app development Solutions.
  </p>
                  <ul className={Styles.Maintab_Content_list}>
                    <li>
                        <div className={Styles.Maintab_Content_list_flex}>
                            <div>
                                <img src={HomeIcon} alt='HomeIcon' />
                            </div>
                            <div>
                                <h5>PHP Development</h5>
                            </div>
                        </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                        <div>
                            <img src={HomeIcon} alt='HomeIcon' />
                        </div>
                        <div>
                            <h5>Wordpress Development</h5>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Styles.Maintab_Content_list_flex}>
                          <div>
                              <img src={HomeIcon} alt='HomeIcon' />
                          </div>
                          <div>
                              <h5>Ruby on Rails Development</h5>
                          </div>
                      </div>
                    </li>
                  </ul>
                  <div className={Styles.Maintab_Content_ReadMore}>
                     <a href='#'>Read More  ...</a>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default LeftTabs;