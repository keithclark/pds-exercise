import ApiClient from "./api/ApiClient";
import '../styles/main.scss';

/** Our main application class, extend this as needed. */
class Main {

  private api = new ApiClient('https://members-api.parliament.uk');

  private defaultMember = 4514 // Sir Keir Starmer

  constructor() {
    const urlParams = new URLSearchParams(document.location.search);
    const memberId = urlParams.get('id') ?? this.defaultMember;
    const cardElem = document.getElementById('memberElem');
    this.populateMemberCardForMemberId(cardElem, +memberId);
  }


  /**
   * Creates a notice element
   * @param text The message to show
   */
  private createNotice(text: string): HTMLDivElement {
    const noticeElem = document.createElement('div');
    noticeElem.classList.add('notice');
    noticeElem.textContent = text;
    return noticeElem;
  }


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
  populateMemberCard(card: HTMLElement, name: string, partyName: string, partyColor: string, constituency: string, imageUrl: string, isServing: boolean) {
    card.style.setProperty('--colorParty', partyColor);
    card.querySelector('.memberImage').setAttribute('src', imageUrl);
    card.querySelector('.memberCard__party').textContent = partyName;
    card.querySelector('.memberCard__name').textContent = name;
    card.querySelector('.memberCard__constituency').textContent = constituency;
    if (isServing) {
      card.querySelector('.memberCard__status').replaceChildren();
    } else {
      card.querySelector('.memberCard__status').replaceChildren(this.createNotice('No longer serving'));
    }
  }


  /**
   * Populates a Member Card element with data from the API
   * 
   * @param card The HTML card element to populate
   * @param memberId The unqiue ID of the member to populate data for
   */
  async populateMemberCardForMemberId(card: HTMLElement, memberId: number) {
    try {
      const member = await this.api.getMemberById(memberId);
      const { membershipEndDate } = member.latestHouseMembership;
      this.populateMemberCard(
        card,
        member.nameDisplayAs,
        member.latestParty.name,
        `#${member.latestParty.backgroundColour}`,
        member.latestHouseMembership.membershipFrom,
        member.thumbnailUrl,
        !membershipEndDate || new Date(membershipEndDate) > new Date()
      );
    } catch (e) {
      alert('Demo error handling');
    }
  }
}

new Main();
