import { RootState } from "../../../store/store";
import { clearUser } from "../../../store/authSlice";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const decodeToken = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      if (decodedToken) {
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          // Token has expired, clear it and redirect to login
          dispatch(clearUser());
          router.push("/");
        }
      } else {
        // If decoding fails, treat as invalid token
        dispatch(clearUser());
        router.push("/");
      }
    } else if (router.pathname !== "/") {
      router.push("/"); // Redirect to login page if not authenticated
    }
  }, [token, router, dispatch]);

  return <>{children}</>;
};

export default AuthWrapper;
