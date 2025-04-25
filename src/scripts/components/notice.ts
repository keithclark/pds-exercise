/**
 * Creates an empty notice element
 */
export const create = (): HTMLElement => {
  const noticeElem = document.createElement('div');
  noticeElem.classList.add('notice');
  return noticeElem;
};


/**
 * Populates a notice element
 * 
 * @param text The message to show
 */
export const populate = (notice: HTMLElement, text: string): void => {
  notice.textContent = text;
};

