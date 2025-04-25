import ApiClient from "./api/ApiClient";
import { populate as populateMemberCard, create as createMemberCard } from "./components/member/memberCard";
import '../styles/main.scss';

const DEFAULT_MEMBER_ID = 4514; // Sir Keir Starmer

/** Our main application class, extend this as needed. */
class Main {

  private api = new ApiClient('https://members-api.parliament.uk');

  constructor() {
    const urlParams = new URLSearchParams(document.location.search);
    const memberId = urlParams.get('id') ?? DEFAULT_MEMBER_ID;
    const cardElem = createMemberCard();
    this.populateMemberCardForMemberId(cardElem, +memberId).then(() => {
      document.querySelector('main').append(cardElem);
    }).catch(() => {
      document.querySelector('main').append(`Unable to load member ${memberId}`);
    });
  }


  /**
   * Populates a Member Card element with data from the API
   * 
   * @param card The HTML card element to populate
   * @param memberId The unqiue ID of the member to populate data for
   */
  async populateMemberCardForMemberId(card: HTMLElement, memberId: number) {
    const member = await this.api.getMemberById(memberId);
    const { membershipEndDate } = member.latestHouseMembership;
    populateMemberCard(
      card,
      member.nameDisplayAs,
      member.latestParty.name,
      `#${member.latestParty.backgroundColour}`,
      member.latestHouseMembership.membershipFrom,
      member.thumbnailUrl,
      !membershipEndDate || new Date(membershipEndDate) > new Date()
    );
  }
}

new Main();
