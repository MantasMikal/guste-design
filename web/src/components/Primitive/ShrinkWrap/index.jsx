import ShrinkWrapWrapper from './component/ShrinkWrapWrapper'
import ShrinkWrapItem from './component/ShrinkWrapItem'

/**
 * A component to display items side-by-side, often with one item taking as
 * little space as possible and the other filling the remaining space.

 * Useful for laying out icons next to text, avatars next to names, inputs
 * next to label text, or even for just general horizontal spacing.

 * Uses \`display: table;\` for layout, so won’t ever wrap onto a new row.
 */
const ShrinkWrap = ShrinkWrapWrapper
ShrinkWrap.displayName = 'ShrinkWrap'

ShrinkWrap.Item = ShrinkWrapItem
ShrinkWrap.Item.displayName = 'ShrinkWrap.Item'

export default ShrinkWrap
