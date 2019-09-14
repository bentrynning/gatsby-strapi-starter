/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import ContactProvider from './src/components/context/ContactProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <ContactProvider>
      {element}
    </ContactProvider>
  )
}