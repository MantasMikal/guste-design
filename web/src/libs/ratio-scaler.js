// Expects target and native to be objects containing
// width and height keys.

const ratioScaler = (target, native) => {
  if (target.width && target.height) return target
  if (!target.width && !target.height) return native

  const ratio = target.width / native.width || target.height / native.height

  return {
    width: native.width * ratio,
    height: native.height * ratio,
    ratio: ratio
  }
}

export default ratioScaler
