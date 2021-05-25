/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  welcomeHeader: {
    id: `${scope}.welcome.header`,
    defaultMessage: 'Purshottam Manji Nathwani welcomes you',
  },
  welcomeMessage: {
    id: `${scope}.welcome.header`,
    defaultMessage: 'to the wedding of Jordan Buches and Dhruv Nathwani',
  },
  itenerary: {
    id: `${scope}.itenerary.message`,
    defaultMessage:
      'The wedding will take place on October 9th, 2021.',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
