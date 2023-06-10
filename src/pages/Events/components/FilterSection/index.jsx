import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Checkbox } from '../../../../components';
import ClearAllButton from './ClearAllButton';
import { Icon, IconIdentifier } from '../../../../components';
import './FilterSection.css';

const FilterSection = () => {
  const [accordionData, setAccordionData] = useState([
    {
      id: 1,
      title: 'Registration Status',
      content: [
        { id: 1, label: 'Registrations Open', isChecked: false },
        { id: 2, label: 'Registrations Closed', isChecked: false },
        { id: 3, label: 'Marked as Interested', isChecked: false },
      ],
    },
    {
      id: 2,
      title: 'Clubs',
      content: [
        { id: 1, label: 'Art & Craft Club', isChecked: false },
        { id: 2, label: 'Cultural Club', isChecked: false },
        { id: 3, label: 'Human Values Club', isChecked: false },
        { id: 4, label: 'Literal Club', isChecked: false },
        { id: 5, label: 'Maths Club', isChecked: false },
        { id: 6, label: 'Management Club', isChecked: false },
        { id: 7, label: 'Publication Club', isChecked: false },
        { id: 8, label: 'Tech Bizz Club', isChecked: false },
      ],
    },
    {
      id: 3,
      title: 'Event Category',
      content: [
        { id: 1, label: 'Competition', isChecked: false },
        { id: 2, label: 'Quizzes', isChecked: false },
        { id: 3, label: 'Seminar', isChecked: false },
        { id: 4, label: 'Workshop', isChecked: false },
      ],
    },
  ]);

  const [activeAccordionId, setActiveAccordionId] = useState(
    accordionData.map((accordion) => `${accordion.id}`),
  );

  const handleClearAll = () => {
    const newData = accordionData.map((accordion) => ({
      ...accordion,
      content: accordion.content.map((checkbox) => ({
        ...checkbox,
        isChecked: false,
      })),
    }));

    setAccordionData(newData);
  };

  const toggleAccordion = (id) => {
    setActiveAccordionId((prev) =>
      prev.includes(id) ? prev.filter((key) => key !== id) : [...prev, id],
    );
  };

  const handleCheckboxChange = (accordionId, checkboxId) => {
    const newData = accordionData.map((accordion) => {
      if (accordion.id === accordionId) {
        const updatedContent = accordion.content.map((checkbox) => {
          if (checkbox.id === checkboxId) {
            return {
              ...checkbox,
              isChecked: !checkbox.isChecked,
            };
          }
          return checkbox;
        });

        return {
          ...accordion,
          content: updatedContent,
        };
      }
      return accordion;
    });

    setAccordionData(newData);
  };

  return (
    <div className="sag-filter__section">
      <div className="sag-filter__header">
        <div className="sag-filter__text">Filters</div>
        <ClearAllButton onClick={handleClearAll} />
      </div>
      <Accordion
        className="sag-filter"
        activeKey={activeAccordionId}
        onSelect={toggleAccordion}
      >
        {accordionData.map((accordion) => (
          <Accordion.Item
            className="sag-filter__item"
            key={accordion.id}
            eventKey={`${accordion.id}`}
          >
            <Accordion.Header>
              {accordion.title}
              <Icon
                className="sag-filter__chevron-icon"
                iconIdentifier={
                  activeAccordionId.includes(`${accordion.id}`)
                    ? IconIdentifier.ChevronUp
                    : IconIdentifier.ChevronDown
                }
                color="black"
              />
            </Accordion.Header>
            <Accordion.Body className="sag-filter__body">
              {accordion.content.map((checkbox) => (
                <Checkbox
                  key={checkbox.id}
                  label={checkbox.label}
                  checked={checkbox.isChecked}
                  onChange={() =>
                    handleCheckboxChange(accordion.id, checkbox.id)
                  }
                />
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FilterSection;
