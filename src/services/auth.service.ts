import { API } from "@/lib/api";
import { AuthSignIn, AuthSignUp, AuthTokenResponse } from "@/models/auth.model";
import { User } from "@/models/user.model";

export default class AuthService {
  public async signIn(payload: AuthSignIn): Promise<AuthTokenResponse> {
    const { data } = await API.post("/auth/sign-in", payload);
    return data;
  }

  public async signUp(payload: Partial<AuthSignUp>): Promise<Partial<User>> {
    const { data } = await API.post("/auth/sign-up", payload);
    return data;
  }
}
