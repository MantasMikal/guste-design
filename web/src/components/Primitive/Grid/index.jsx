import React from 'react'
import { object, node, bool, string } from 'prop-types'
import classNames from 'classnames'
import styles from './Grid.module.scss'
import PageTitle from 'Common/PageTitle'

/**
 * Used by portable text editor for grid customisation
 * See Common/ContentBlock
 * TODO:
 * This can be improved so we don't pass inline styles directly
 */

// I think this is nasty
const Grid = ({ id, title, options, itemOptions, centered, children }) => {
  const className = classNames(styles.Grid, centered && styles.centered)
  return (
    <div>
      {options && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<style> 
            #${id} {
              display: grid;
              margin: ${options.margin || '0'};
              grid-row-gap: ${options.gridRowGap || '8px'};
              grid-column-gap: ${options.gridColumnGap || '8px'};
              margin-bottom: 8px;
            }
            @media screen and (min-width: 48em) {
              #${id} {
                grid-template-columns: ${
                  options.gridTabletTemplateColumns || '1fr 1fr'
                };
                grid-template-rows: ${options.gridTabletTemplateRows || 'auto'};
              }
            }
            @media screen and (min-width: 80em) {
              #${id} {
                grid-template-columns: ${
                  options.gridTemplateColumns || '1fr 1fr'
                };
                grid-template-rows: ${options.gridTemplateRows || 'auto'};
              }
            }
            #${id} > * {
              display: flex;
              flex-direction: column;
              justify-content: ${itemOptions.justifyContent || 'flex-start'};
              align-items: ${itemOptions.alignItems || 'flex-start'};
            }
            #${id} > a {
              margin-bottom: 0 !important;
            }
          </style>`
          }}
        />
      )}
      {title && <PageTitle as="h2" title={title} />}
      <div id={id} className={className}>
        {children}
      </div>
    </div>
  )
}

Grid.propTypes = {
  id: string.isRequired,
  title: string,
  options: object,
  children: node,
  centered: bool
}

export default Grid
