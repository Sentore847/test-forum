import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";

export default function MainPage() {
  const { t } = useTranslation("main");
  const [value, setValue] = useState("");

  const onChange = (val: string) => {
    setValue(val);
  };
  return (
    <div>
      {String(t("Main Page"))}
      <Input placeholder="text..." value={value} onChange={onChange} />
    </div>
  );
}
