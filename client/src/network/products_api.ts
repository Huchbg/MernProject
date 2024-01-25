import { Product } from "../models";

export class ProductApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init);

    if (response.ok) {
      return response;
    } else {
      const errorBody = await response.json();
      const errorMessage = errorBody.error;
      throw Error(errorMessage);
    }
  }

  public async fetchNotes(): Promise<Product[]> {
    const results = await this.fetchData(`${this.baseUrl}/api/products`, {
      method: "GET",
    });
    return results.json();
  }

  public async createProduct(product: ProductInput): Promise<Product> {
    const response = await this.fetchData(`${this.baseUrl}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
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
}
