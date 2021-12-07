import axios from "axios";

class LinkService {
  async getLink(id) {
    return await axios.get(`${process.env.REACT_APP_API_URL}/api/link/${id}`);
  }

  async shortener(link) {
    return await axios.post(`${process.env.REACT_APP_API_URL}/api/shortener`, {
      link,
    });
  }
}

export default new LinkService();
