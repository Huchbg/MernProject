import { User } from "../models";

export class UsersApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchData(input: RequestInfo, init?: RequestInit) {
    const headers = new Headers(init?.headers);

    // Include credentials in the request
    headers.append("credentials", "include");

    const response = await fetch(input, { ...init, headers });

    if (response.ok) {
      return response;
    } else {
      const errorBody = await response.json();
      const errorMessage = errorBody.error;
      throw Error(errorMessage);
    }
  }

  public async getLoggedInUser(): Promise<User> {
    const response = await this.fetchData(`${this.baseUrl}/api/users`, {
      method: "GET",
    });

    return response.json();
  }

  public async signUp(credentials: SignUpCredentials): Promise<User> {
    const response = await this.fetchData(`${this.baseUrl}/api/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    return response.json();
  }

  public async login(credentials: SignUpCredentials): Promise<User> {
    const response = await this.fetchData(`${this.baseUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    return response.json();
  }

  public async logout() {
    await this.fetchData(`${this.baseUrl}/api/users/logout`, {
      method: "POST",
    });
  }
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}
