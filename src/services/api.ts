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
};

export default api;