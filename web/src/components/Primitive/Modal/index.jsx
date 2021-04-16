import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { bool, func, node, string } from 'prop-types'
import useEscapeKey from 'hooks/useEscapeKey'
import useOutsideClick from 'hooks/useOutsideClick'

import FocusTrap from 'focus-trap-react'

import styles from './Modal.module.scss'

import VisuallyHidden from '../VisuallyHidden'
import IconButton from '../IconButton'

/**
 * A static modal overlay which uses an \`open\` prop to show/hide.

 * Has lots of accessibility functionality built-in, including
 * focus-trapping, keyboard/click-outside closing.

 * Note: This component doesn’t include the state-based functionality
 * required to show/hide: see \`<ModalWithTrigger />\`.
 */
const Modal = ({
  actions,
  ariaLabel,
  children,
  heading,
  onClose,
  open,
  role
}) => {
  const ref = useRef()

  const handleClose = () => {
    open && onClose && onClose()
  }

  useEscapeKey(handleClose)
  useOutsideClick(ref, handleClose)

  if (!open) return null
  if (typeof window === 'undefined') return null

  return createPortal(
    <aside
      className={styles.Modal}
      role={role}
      aria-label={ariaLabel}
      aria-modal="true"
      tabIndex="-1"
    >
      <FocusTrap>
        <div className={styles.ModalInner}>
          <div className={styles.ModalBg} />
          <div className={styles.ModalPanel} ref={ref}>
            {!onClose && (
              <VisuallyHidden>
                <button name="modal-content" tabIndex="0">
                  Modal content start
                </button>
              </VisuallyHidden>
            )}
            {onClose && (
              <div className={styles.ModalClose}>
                <IconButton
                  type="button"
                  icon="close"
                  a11yText="Close Modal"
                  onClick={onClose}
                />
              </div>
            )}
            {heading && <h4 className={styles.ModalHeader}>{heading}</h4>}
            <div className={styles.ModalPanelContent}>
              <div className={styles.ModalContent}>{children}</div>
              {actions && <div className={styles.ModalActions}>{actions}</div>}
            </div>
          </div>
        </div>
      </FocusTrap>
    </aside>,
    document.body
  )
}

Modal.defaultProps = {
  role: 'dialog'
}

Modal.propTypes = {
  actions: node,
  ariaLabel: string.isRequired,
  children: node.isRequired,
  heading: string,
  onClose: func,
  open: bool,
  role: string
}

export default Modal
