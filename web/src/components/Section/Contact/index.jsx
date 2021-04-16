import React from 'react'
import { array, string } from 'prop-types'

import BlockContent from 'Common/BlockContent'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import TextControl from 'Primitive/TextControl'
import FieldTemplate from 'Primitive/FieldTemplate'
import ButtonStandard from 'Primitive/ButtonStandard'

import styles from './Contact.module.scss'

/**
 * If deployed on Netlify the form will be handled automagically! Just check the 'Forms' section under site settings
 */
const Contact = ({ body, title }) => {
  return (
    <Container size="wide" center gutter spacious withNavSpace as="section">
      <Type as="h1" size="display" className={styles.Title}>
        {title}
      </Type>
      {body && (
        <div className={styles.Body}>
          <BlockContent blocks={body} />
        </div>
      )}
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={styles.Form}
      >
        <input type="hidden" name="form-name" value="contact" />
        <FieldTemplate label="Name" required controlName="name">
          <TextControl name="name" type="text" required />
        </FieldTemplate>
        <FieldTemplate label="Email" required controlName="email">
          <TextControl name="email" type="email" required />
        </FieldTemplate>
        <FieldTemplate label="Message" required controlName="message">
          <TextControl
            name="message"
            placeholder="Say hi!"
            multiLine
            rows={10}
            required
          />
        </FieldTemplate>
        <ButtonStandard className={styles.ApplyButton} type="submit">
          <Type size="base" demi>
            Apply
          </Type>
        </ButtonStandard>
      </form>
    </Container>
  )
}

Contact.propTypes = {
  body: array,
  title: string
}

export default Contact
