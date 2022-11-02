/**
 * @todo
 *   axios로 재작성
 *   예외 처리
 */
export class HttpClient {
  private base = process.env.BASE_URL

  async get<ResponseType>(url: string): Promise<ResponseType> {
    const response = await fetch(`${url}`);
    const ret = await response.json();
    return ret;
  }

  async post<ResponseType, DataType>(
    url: string,
    data: DataType,
  ): Promise<ResponseType> {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const ret = await response.json();
    return ret;
  }

  async patch<ResponseType, DataType>(
    url: string,
    data: DataType,
  ): Promise<ResponseType> {
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
    const ret = await response.json();
    return ret;
  }

  async delete(url: string): Promise<void> {
    await fetch(url, { method: 'DELETE' });
  }
}

export default new HttpClient();
