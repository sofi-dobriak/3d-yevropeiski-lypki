import s3d2spriteIcon from '../spriteIcon';

/**
 *
 * @param {String} className
 * @param {String} classNamePrev
 * @param {String} classNameNext
 * @param {String} content
 *
 * @returns
 */
export default function s3d2_SwiperButtons({
  className = '',
  classNamePrev = '',
  classNameNext = '',
  content = '',
  attrsPrev = {},
  attrsNext = {},
} = {}) {
  const toAttrs = obj =>
    Object.entries(obj)
      .map(([key, val]) => (val === true ? key : `${key}="${val}"`))
      .join(' ');

  return `
        <div class="navigation-buttons ${className}">
          <div class="${classNamePrev}" ${toAttrs(attrsPrev)}>
            <button class="navigation-buttons__button" type="button">
                ${s3d2spriteIcon('Big arrow left')}
            </button>
          </div>
          ${content}
          <div class="${classNameNext}" ${toAttrs(attrsNext)}>
              <button class="navigation-buttons__button" type="button">
                ${s3d2spriteIcon('Big arrow right')}
            </button>
          </div>
        </div>
  `;
}
