import client from "src/infrastructure/http/client";

const api = {
  createProduct: async (data: {
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
  }) => {
    return client("products", data, "POST");
  },
  getProducts: async () => {
    return client("products", null, "GET");
  },
};

export default api;
