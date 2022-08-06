import ButtonStandard from 'Primitive/ButtonStandard'
import Container from 'Primitive/Container'
import Field from 'Primitive/Field'
import Image from 'Primitive/Image'
import TextControl from 'Primitive/TextControl'
import Type from 'Primitive/Type'
import VisuallyHidden from 'Primitive/VisuallyHidden'
import { object, string } from 'prop-types'
import React from 'react'
import { useState } from 'react'

import styles from './NewsletterSignup.module.scss'

const NewsletterSignup = ({ title, subtitle, bgImage, bgImageMobile }) => {
  const [formState, setFormState] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState('loading')

    const res = await fetch('/api/newsletter-subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.email.value
      }),
      headers: {
        'content-type': 'application/json'
      }
    })

    if (res.ok) {
      setFormState('success')
    } else {
      setFormState('error')
    }
  }

  return (
    <div className={styles.NewsletterSignup}>
      <Image image={bgImage} className={styles.Image} />
      <Image image={bgImageMobile} className={styles.MobileImage} />
      <Container gutter center size="large" className={styles.Content}>
        <Type as="h2" size="titleLarge" className={styles.Title}>
          {title}
        </Type>
        <Type as="p" size="titleMedium" className={styles.Subtitle}>
          {subtitle}
        </Type>
        {formState === 'success' ? (
          <p>Success. You're in!</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.Form}>
            <Field className={styles.Field}>
              <VisuallyHidden>
                <Field.Question htmlFor="email">Your email</Field.Question>
              </VisuallyHidden>
              <Field.Answer>
                <TextControl
                  id="email"
                  required
                  placeholder="Your email"
                  type="email"
                  name="email"
                />
              </Field.Answer>
            </Field>
            <ButtonStandard
              loading={formState === 'loading'}
              type="submit"
              className={styles.Submit}
            >
              Sign me up!
            </ButtonStandard>
          </form>
        )}
        {formState === 'error' && (
          <Type className={styles.Error}>
            Brr, an error. Try again later! 🙂
          </Type>
        )}
      </Container>
    </div>
  )
}

NewsletterSignup.propTypes = {
  title: string,
  subtitle: string,
  bgImage: object
}

export default NewsletterSignup
