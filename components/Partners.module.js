import React from 'react';
import { Container, Flex } from './styles/Container.styled';
import { LetsConnect, MobileIllustration } from './styles/LetsConnect.styled';
import { ourpartners } from './data/our-partners';

const Partners = () => {

    return (
        <LetsConnect>
            <section className='full-height'>
              <Container>                
                <div className="contact-us-page">
                    <h1>Empowering <span>Partnerships</span></h1>
                    <p className="tac">Unlock the power of collaboration through true partnerships. Our deep expertise is your key to elevating outcomes.</p>
                  </div>

                  {/* <MobileIllustration className="mobile" src="./images/lets_connect.svg" alt="Partners with DevX Digital" /> */}

                  <Flex className="partners-container">
                    {ourpartners.map(partner => (
                      <div key={partner.id} className='partners-logo'>
                        <a href={partner.PartnerUrl} target="_blank" rel="noopener noreferrer">
                          <img src={partner.PartnerLogo} alt={partner.PartnerName} />
                        </a>
                      </div>
                    ))}
                  </Flex>
              </Container>
            </section>

            <Container>                
                <div className="contact-us-page">
                  <h2>Cutting-Edge Technologies in <span>DevX</span></h2>
                  <p className="tac">We leverage a comprehensive array of cutting-edge technologies to deliver exceptional solutions tailored to meet the unique needs of our clients. <br />
                  From front-end development to back-end systems, we utilize a diverse toolkit encompassing languages, platforms, and frameworks such as <br />
                  <span>JavaScript</span> <span>React.js</span> <span>Node.js</span> <span>AWS</span> <span>Docker</span> <span>Kubernetes</span> and more. <br />
                  <strong><i>We empower businesses to achieve their goals and stay ahead in today's dynamic digital landscape.</i></strong></p>
                </div>
                <Flex className="partners-container">
                  <div key="100" className='partners-logo'>
                    <img src="/images/partners/klaviyo.png" alt="Klaviyo" />
                  </div>
                  <div key="101" className='partners-logo'>
                    <img src="/images/partners/bigcommerce.svg" alt="BigCommerce" />
                  </div>
                  <div key="102" className='partners-logo'>
                    <img src="/images/partners/WordPress_logo.svg" alt="WordPress" />
                  </div>
                  <div key="103" className='partners-logo'>
                    <img src="/images/partners/drupal.svg" alt="Drupal" />
                  </div>
                  <div key="104" className='partners-logo'>
                    <img src="/images/partners/woo.png" alt="WooCommerce" />
                  </div>
                  <div key="105" className='partners-logo'>
                    <img src="/images/partners/vercel.svg" alt="Vercel" />
                  </div>
                  <div key="106" className='partners-logo'>
                    <img src="/images/partners/shopify.svg" alt="Shopify" />
                  </div>

                  
                  <div key="107" className='partners-logo'>
                    <img src="/images/partners/angular.svg" alt="Angular" />
                  </div>
                  <div key="108" className='partners-logo'>
                    <img src="/images/partners/amazon-aws.svg" alt="Amazon AWS" />
                  </div>
                  <div key="109" className='partners-logo'>
                    <img src="/images/partners/tensorflow.svg" alt="Tensorflow" />
                  </div>
                  <div key="110" className='partners-logo'>
                    <img src="/images/partners/firebase.svg" alt="Firebase" />
                  </div>
                  <div key="111" className='partners-logo'>
                    <img src="/images/partners/javascript.svg" alt="JavaScript" />
                  </div>
                  <div key="112" className='partners-logo'>
                    <img src="/images/partners/vuejs.svg" alt="VueJS" />
                  </div>
                  <div key="114" className='partners-logo'>
                    <img src="/images/partners/nodejs.svg" alt="NodeJS" />
                  </div>
                  <div key="115" className='partners-logo'>
                    <img src="/images/partners/mailchimp.svg" alt="Mailchimp" />
                  </div>
                  <div key="116" className='partners-logo'>
                    <img src="/images/partners/reactjs.svg" alt="React JS" />
                  </div>
                  <div key="117" className='partners-logo'>
                    <img src="/images/partners/stripe.svg" alt="Stripe" />
                  </div>
                  <div key="117" className='partners-logo'>
                    <img src="/images/partners/pwa.svg" alt="PWA" />
                  </div>
                  <div key="118" className='partners-logo'>
                    <img src="/images/partners/figma.svg" alt="" />
                  </div>
                  <div key="119" className='partners-logo'>
                    <img src="/images/partners/mongo.png" alt="MongoDB" />
                  </div>
                  <div key="124" className='partners-logo'>
                    <img src="/images/partners/jquery.png" alt="jQuery" />
                  </div>
                </Flex>
            </Container>

            <section className='gray'>
              <Container>
                <div className="contact-us-page">
                  <h2>Delving into <span>Blockchain</span> Innovation</h2>
                  <p className="tac">Step into the realm of blockchain with DevX and unleash the potential of decentralized technologies. <br />
                  From creating immutable ledgers to implementing smart contracts, we equip businesses with the tools to innovate and thrive in the digital age.<br />
                  <strong><i>Empower Your Business with Decentralized Solutions</i></strong></p>
                </div>
                <Flex className="partners-container">
                  <div key="121" className='partners-logo'>
                    <img src="/images/partners/ethereum.svg" alt="Ethereum" />
                  </div>
                  <div key="122" className='partners-logo'>
                    <img src="/images/partners/matic.png" alt="Polygon Matic" />
                  </div>
                  <div key="123" className='partners-logo'>
                    <img src="/images/partners/python.png" alt="Python" />
                  </div>
                  <div key="125" className='partners-logo'>
                    <img src="/images/partners/web3.png" alt="Web3 JS" />
                  </div>
                  <div key="126" className='partners-logo'>
                    <img src="/images/partners/php.png" alt="PHP" />
                  </div>
                </Flex>
              </Container>
            </section>
        </LetsConnect>
    );
};

export default Partners;
