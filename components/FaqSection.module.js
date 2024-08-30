import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaqData } from './data/faqdata';
import { IconContext } from 'react-icons';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Container } from './styles/Container.styled';
import { AccordionSection, Wrap, Question, Dropdown } from './styles/faq.styled';

const FaqSection = (props) => {
  const router = useRouter();
  const { limitItems, titleTag: TitleTag } = props;
  const displayedItems = limitItems ? FaqData.slice(0, 4) : FaqData;
  
  const [clicked, setClicked] = useState(false)
  const toggle = index => {
    if(clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <IconContext.Provider value={{ color: '#00ffb9', size: '25px' }}>
      <AccordionSection>
        <Container>
          <TitleTag>Frequently Asked Questions</TitleTag>
          <div className="faqcontainer">
            {displayedItems.map((item, index) => {
              return (         
              <div key={index}>
                <Wrap onClick={() => toggle(index)}>
                  <Question>{item.question}</Question>
                  <span>{clicked === index ? <FiChevronUp /> : <FiChevronDown />}</span>
                </Wrap> 
                {clicked === index ? (
                  <Dropdown key={index}>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </div>
              )
            })}
            {router.pathname !== '/faq' && (
              <a href="/faq">View all FAQ's</a>
            )}
          </div>
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
}

export default FaqSection;