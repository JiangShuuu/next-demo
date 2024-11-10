"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { logout } from "@/actions/logout";
// Client Reload issue

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={onClick}>
        Logout
      </button>
    </div>
  );
};

export default SettingsPage;
