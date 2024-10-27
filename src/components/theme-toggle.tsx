import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Icons } from "./icons";

export function ThemeToggle() {
  const { t } = useTranslation(["components"]);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Tooltip openDelay={1000} label={t("components:theme_toggle.label")}>
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="lg"
      >
        {computedColorScheme === "light" ? (
          <Icons.Moon className="h-5 w-5 text-indigo-400" />
        ) : (
          <Icons.Sun className="h-5 w-5 text-yellow-400" />
        )}
        <span className="sr-only">{t("components:theme_toggle.label")}</span>
      </ActionIcon>
    </Tooltip>
  );
}
