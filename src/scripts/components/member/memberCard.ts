import { create as createNotice, populate as populateNotice } from "../notice";

const template = document.createElement('template');
template.innerHTML = `<div class="memberCard">
  <img class="memberCard__image memberImage" alt="">
  <div class="memberCard__main">
    <h2 class="memberCard__name"></h2>
    <div class="memberCard__party"></div>
    <div class="memberCard__constituency"></div>
  </div>
  <div class="memberCard__status"></div>
</div>`;


/**
 * Creates an empty member card ready for population
 */
export const create = (): HTMLElement => {
  return <HTMLElement>template.content.firstElementChild.cloneNode(true);
};


/**
 * Populates a Member Card with content
 * 
 * @param card The HTML element of the card
 * @param name The text to show in the member name field
 * @param partyName The text to show in the party name field
 * @param partyColor The CSS color to use when colorizing party information
 * @param constituency The text to show in the constituency field
 * @param imageUrl The URL of the image to show in the member photo field
 * @param isServing Controls display of the "No longer serving" notice
 */
export const populate = (card: HTMLElement, name: string, partyName: string, partyColor: string, constituency: string, imageUrl: string, isServing: boolean) => {
  card.style.setProperty('--colorParty', partyColor);
  card.querySelector('.memberImage').setAttribute('src', imageUrl);
  card.querySelector('.memberCard__party').textContent = partyName;
  card.querySelector('.memberCard__name').textContent = name;
  card.querySelector('.memberCard__constituency').textContent = constituency;
  if (isServing) {
    card.querySelector('.memberCard__status').replaceChildren();
  } else {
    const notice = createNotice();
    populateNotice(notice, 'No longer serving');
    card.querySelector('.memberCard__status').replaceChildren(notice);
  }
};
