/**
 * The contents of this file were derrived from the OpenAPI schema for the
 * `/api/Members/{id}` endpoint, which is documented at:
 * https://members-api.parliament.uk/index.html#operations-Members-get_api_Members__id_
 */

/**
 * Common API response wrapper for JSON payloads
 */
export type ApiJsonResponse<T> = {
  value: T,
  links: ApiLink[]
}

export type ApiLink = {
  rel: string;
  href: string;
  method: string;
}

export type ApiMember = {
  id: number,
  nameListAs?: string,
  nameDisplayAs?: string,
  nameFullTitle?: string,
  nameAddressAs?: string,
  latestParty?: ApiMemberParty,
  gender?: string,
  latestHouseMembership?: ApiMemberHouseMembership
  thumbnailUrl?: string
}

export type ApiMemberParty = {
  id: number,
  name?: string,
  abbreviation?: string,
  /** CSS color in hex format, without the "#" prefix */
  backgroundColour?: string,
  /** CSS color in hex format, without the "#" prefix */
  foregroundColour?: string,
  isLordsMainParty: boolean,
  isLordsSpiritualParty: boolean,
  governmentType?: 0|1|2|3,
  isIndependentParty: boolean
}

export type ApiMemberHouseMembership = {
  membershipFrom?: string
  membershipFromId?: number,
  house: 1|2,
  membershipStartDate?: string
  membershipEndDate?: string,
  membershipEndReason?: string,
  membershipEndReasonNotes?: string,
  membershipEndReasonId?: number,
  membershipStatus?: ApiMemberMembershipStatus
}

export type ApiMemberMembershipStatus = {
  statusIsActive: boolean,
  statusDescription?: string,
  statusNotes?: string,
  statusId?: 0,
  status?: 0|1|2|3,
  statusStartDate?: string
}
