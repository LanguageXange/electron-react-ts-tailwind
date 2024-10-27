import { useEffect, useState } from "react";
const { ipcRenderer } = window.require("electron"); // https://github.com/electron/electron/issues/7300
import { channels } from "../shared/constants";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { showNotification } from "@mantine/notifications";
import { siteConfig } from "../configs/site";

type Language = "en" | "zh-TW";
export function LanguageSelector({ collapsed }: { collapsed: boolean }) {
  const { i18n } = useTranslation(["components"]);
  const activeLanguage = i18n.language as Language;
  return (
    <Stack gap="xs">
      {Object.entries(siteConfig.language).map(([lng, lngInfo]) => (
        <Button
          variant="transparent"
          color="dark.1"
          leftSection={lngInfo.icon}
          onClick={() => i18n.changeLanguage(lng)}
          key={lng}
          className={`${activeLanguage === lng ? "text-white" : ""}`}
        >
          {collapsed ? lngInfo.shortName : lngInfo.name}
        </Button>
      ))}
    </Stack>
  );
}

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation(["common"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
    ipcRenderer.send(channels.LOGIN, email, password);
  };

  useEffect(() => {
    const hasToken = localStorage.getItem("token");
    if (hasToken) navigate("/home");
  }, []);

  useEffect(() => {
    ipcRenderer.on(channels.LOGIN_RESPONSE, (event, response) => {
      if (response.success) {
        // Redirect to about page or display a success message
        console.log("Login successful");
        localStorage.setItem("token", "secret");
        navigate("/home");
      } else {
        // Handle login failure
        alert("login failed");
        console.log("Login failed");
      }
    });

    return () => {
      ipcRenderer.removeAllListeners(channels.LOGIN_RESPONSE);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <LanguageSelector collapsed={false} />
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:border-blue-400"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:ring-blue-400 focus:outline-none focus:border-blue-400"
              placeholder="Password"
            />
          </div>
          {/* <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button> */}

          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              showNotification({
                color: "success",
                message: "hello",
                title: "testing title",
              });
            }}
          >
            {t("common:nav.login")}
          </Button>
        </form>
      </div>
    </div>
  );
};
