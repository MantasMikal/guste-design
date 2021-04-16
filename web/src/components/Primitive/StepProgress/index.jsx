import StepProgressWrapper from './component/StepProgressWrapper'
import StepProgressItem from './component/StepProgressItem'

/**
 * TBC
 */
const StepProgress = StepProgressWrapper
StepProgress.displayName = 'StepProgress'

StepProgress.Item = StepProgressItem
StepProgress.Item.displayName = 'StepProgress.Item'

export default StepProgress
