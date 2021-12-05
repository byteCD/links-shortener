import axios from "axios";

class LinkService {
  async getLink(id) {
    return await axios.get(`http://localhost:5000/api/link/${id}`);
  }

  async shortener(link) {
    return await axios.post("http://localhost:5000/api/shortener", { link });
  }
}

export default new LinkService();
