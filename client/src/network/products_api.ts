import { Product } from "../models";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

export async function fetchNotes(): Promise<Product[]> {
  const results = await fetchData("/api/products", { method: "GET" });
  return results.json();
}

export interface ProductInput {
  name: string;
  description: string;
}

export async function createProduct(product: ProductInput): Promise<Product> {
  const response = await fetchData("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response.json();
}
