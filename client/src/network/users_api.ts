import { User } from "../models";

export class UsersApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetchData(input: RequestInfo, init?: RequestInit) {
    try {
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
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  }

  public async getLoggedInUser(): Promise<User> {
    const response = await this.fetchData(`${this.baseUrl}/api/users`, {
      method: "GET",
    });

    return response.json();
  }

  public async signUp(signUpCredentials: SignUpCredentials): Promise<User> {
    const response = await this.fetchData(`${this.baseUrl}/api/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpCredentials),
    });

    return response.json();
  }

  public async login(loginCredentials: LoginCredentials): Promise<User> {
    const response = await this.fetchData(`${this.baseUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginCredentials),
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
