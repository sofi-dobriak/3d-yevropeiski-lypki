function placeElemInWrapperNearMouse(el, wrap, event, offset = 20) {
  const wrapperWidth = wrap.offsetWidth;
  const isRightHalf = event.pageX > wrapperWidth / 2;

  const x = isRightHalf ? event.pageX - offset : event.pageX + offset;
  const side = isRightHalf ? 'left' : 'right';

  let y = event.pageY;
  y = Math.max(y, 10);
  y = Math.min(y, window.innerHeight - 10);

  return { x, y, side };
}

export default placeElemInWrapperNearMouse;
