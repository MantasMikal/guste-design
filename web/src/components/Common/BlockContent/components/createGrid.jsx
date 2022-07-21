import React from 'react'
import createMedia from './createMedia'
import Grid from 'Primitive/Grid'

export function createGrid(component) {
  const gridMedia = component.gridMedia
  console.log("🚀 ~ file: createGrid.jsx ~ line 7 ~ createGrid ~ component", component)
  if (!gridMedia) return <> </>

  const centered = component.centered && component.centered
  const styles = {
    margin: component.margin || '0',
    gridTemplateColumns: component.colTemplate || '1fr 1fr',
    gridTemplateRows: component.rowTemplate || 'auto',
    gridTabletTemplateColumns: component.colTemplateTablet || '1fr 1fr',
    gridTabletTemplateRows: component.rowTemplateTablet || 'auto',
    gridRowGap: component.rowGap || '8px',
    gridColumnGap: component.colGap || '8px'
  }

  const gridComponents = gridMedia.map((item) => {
    return createMedia(item)
  })

  return (
    gridComponents && (
      <Grid
        id={`grid_${component._key}`}
        title={component?.title}
        options={styles}
        centered={centered}
        key={component._key}
      >
        {gridComponents}
      </Grid>
    )
  )
}

export default createGrid
