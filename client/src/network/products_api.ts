import { Product } from "../models";

export class ProductApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, {
      ...init,
      credentials: "include", // Set credentials to include
    });

    if (response.ok) {
      return response;
    } else {
      const errorBody = await response.json();
      const errorMessage = errorBody.error;
      throw Error(errorMessage);
    }
  }

  public async fetchProducts(): Promise<Product[]> {
    const results = await this.fetchData(`${this.baseUrl}/api/products`, {
      method: "GET",
    });
    return results.json();
  }

  public async createProduct(product: ProductInput): Promise<Product> {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);

    if (product.images) {
      product.images.forEach((image, index) => {
        formData.append("images", image, `image_${index}.jpg`);
      });
    } // Assuming product.image is a File

    const response = await this.fetchData(`${this.baseUrl}/api/products`, {
      method: "POST",
      body: formData,
    });

    return response.json();
  }

  public async deleteProduct(productId: string) {
    await this.fetchData(`${this.baseUrl}/api/products/${productId}`, {
      method: "DELETE",
    });
  }
}

export interface ProductInput {
  name: string;
  description: string;
  images: File[] | null;
}
