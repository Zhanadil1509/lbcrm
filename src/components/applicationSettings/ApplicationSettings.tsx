import { CryptoSetting } from "components/applicationSettings/CryptoSetting.tsx";
import { CryptoTokenSettings } from "components/applicationSettings/CryptoTokenSettings.tsx";

type IProps = {
  pathname: string;
};

export function ApplicationSettings({ pathname }: IProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-2 mb-4">
      <CryptoSetting />
      <CryptoTokenSettings />
    </div>
  );
}
