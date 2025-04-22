import { ApiJsonResponse, ApiMember } from './types'

export default class ApiClient {

  private host: string;

  constructor(host: string) {
    this.host = host;
  }

  async requestJson<T>(url: string): Promise<ApiJsonResponse<T>> {
    const response = await fetch(this.host + url);
    return response.json();
  }

  /**
   * Returns member by ID
   * @param id The ID of the member to retrieve
   */
  async getMemberById(id: number) {
    const response = await this.requestJson<ApiMember>(`/api/Members/${id}`);
    return response.value;
  }

};
