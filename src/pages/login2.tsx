import {
  Center,
  Paper,
  Text,
  TextInput,
  PasswordInput,
  Button,
  Loader,
} from "@mantine/core";
import { useTranslation, Trans } from "react-i18next";

import { showNotification } from "@mantine/notifications";
import { useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { siteConfig } from "../configs/site";

import { AxiosError } from "axios";
import { LanguageSelector } from "./login";
import { ThemeToggle } from "../components/theme-toggle";

export function LoginPage2() {
  const { t } = useTranslation(["common"]);
  // const { data: self } = useSelf();
  const self = false;

  const navigate = useNavigate();
  // const { mutateAsync: login, isPending: isLoggingIn } = useLogin();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    //validate: zodResolver(createLoginFormInputSchema(t)),
  });

  if (self) {
    return <Navigate to="/" replace />;
  }

  return (
    <Center className="h-screen w-full overflow-hidden">
      <LanguageSelector collapsed={false} />
      <ThemeToggle />
      <Paper
        withBorder
        className="relative isolate mx-4 w-full max-w-[40ch] bg-background"
      >
        <div className="bg-background/50 px-4 py-8 backdrop-blur-sm">
          <Text
            component="h1"
            className={
              "pb-10 pt-5 text-center text-5xl font-bold text-primary-600 lg:text-6xl"
            }
          >
            {siteConfig.name} {siteConfig.env}
          </Text>

          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(async (values) => {
              try {
                // await login(values);
                showNotification({
                  color: "success",
                  title: t("auth:notification.login_success.title"),
                  message: (
                    <Trans
                      t={t}
                      i18nKey="auth:notification.login_success.message"
                      values={{
                        email: values.email,
                      }}
                      components={{
                        b: <Text component="b" c="primary" fw="bold" />,
                      }}
                    />
                  ),
                });
                navigate("/", {
                  replace: true,
                });
              } catch (err) {
                let title = t("auth:notification.login_failed.title");
                let message = t("auth:notification.login_failed.message");
                if (err instanceof AxiosError) {
                  if (err.response?.status === 401) {
                    title = t("auth:notification.invalid_credentials.title");
                    message = t(
                      "auth:notification.invalid_credentials.message"
                    );
                  }
                }
                showNotification({
                  color: "error",
                  title,
                  message,
                });
              }
            })}
          >
            <TextInput
              withAsterisk
              label={t("label.email")}
              {...form.register("email")}

              //{...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              label={t("label.password")}
              {...form.register("password")}
              // {...form.getInputProps("password")}
            />
            <Button
              className="mt-4 self-end"
              //  loading={isLoggingIn}
              type="submit"
            >
              {t("auth:button.login")}
            </Button>
          </form>
        </div>
      </Paper>
    </Center>
  );
}
