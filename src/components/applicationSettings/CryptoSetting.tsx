/*
type Props = {

};
*/

import { Label, TextInput } from "flowbite-react";
import { ButtonUi } from "components/ui/button";
import { useGetBotSettings } from "api/settings/useGetBotSettings.ts";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { DefaultConfigParamsTypes } from "types/settings.types.ts";
import { usePutUpdateBotSettings } from "api/settings/usePutUpdateBotSettings.ts";

export function CryptoSetting() {
  const { pathname } = useLocation();
  const { data, isLoading, error } = useGetBotSettings();
  const postUpdateBotSettings = usePutUpdateBotSettings();
  const [datas, setDatas] = useState<DefaultConfigParamsTypes>({
    exchangeRate: "",
    minFiatAmount: "",
    maxFiatAmount: "",
    avaliableCryptoCurrencies: [],
  });
  const [avaliableCryptoCurrencies, setAvaliableCryptoCurrencies] = useState<
    string[]
  >([]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return;

  if (error) return "Error request " + error;

  const filteredScope = data.filter(
    (v: DefaultConfigParamsTypes, _) =>
      v.scope?.toLowerCase() === pathname.replace(/\//g, "").toLowerCase(),
  );
  const scopeObj: DefaultConfigParamsTypes = Object.assign(
    {},
    ...filteredScope,
  );

  const handleChange =
    (key: string, id?: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof id !== "undefined") {
        const { checked, value } = e.target;
        setAvaliableCryptoCurrencies((prev) =>
          checked ? [...prev, value] : prev?.filter((val) => val !== value),
        );
      }
      setDatas((datas) => ({
        ...datas,
        [key]: e.target.value,
      }));
    };

  const handleSave = () => {
    const currentCurrency = {
      ...datas,
      avaliableCryptoCurrencies,
    };
    postUpdateBotSettings.mutate(Object.assign(scopeObj, currentCurrency));
  };

  return (
    <div className="border-r col-span-2 h-auto md:h-64">
      <form className="flex max-w-md flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="mb-2 block">
            <Label htmlFor="minSum" value="Минимальная сумма" />
          </div>
          <TextInput
            defaultValue={
              datas?.minFiatAmount
                ? datas?.minFiatAmount
                : scopeObj?.minFiatAmount
            }
            id="minSum"
            type="number"
            placeholder="min sum"
            required
            onChange={handleChange("minFiatAmount")}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-2 block">
            <Label htmlFor="maxSum" value="Максимальная сумма" />
          </div>
          <TextInput
            defaultValue={
              datas?.maxFiatAmount
                ? datas?.maxFiatAmount
                : scopeObj?.maxFiatAmount
            }
            onChange={handleChange("maxFiatAmount")}
            id="maxSum"
            type="number"
            placeholder="max sum"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-2 block">
            <Label htmlFor="" value="Время ожидание оплаты" />
          </div>
          <TextInput
            disabled
            id=""
            type="number"
            placeholder="ожидание оплаты"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-2 block">
            <Label htmlFor="exchangeRate" value="Отхождение от курса" />
          </div>
          <TextInput
            defaultValue={
              datas?.exchangeRate ? datas?.exchangeRate : scopeObj?.exchangeRate
            }
            onChange={handleChange("exchangeRate")}
            id="exchangeRate"
            type="number"
            placeholder="отхождение курса"
            required
          />
        </div>

        <div className="grid gap-2 grid-cols-4">
          {scopeObj?.avaliableCryptoCurrencies?.length > 0 ? (
            scopeObj?.avaliableCryptoCurrencies?.map((v, id) => (
              <div key={v + id} className="flex items-center justify-start">
                <Label
                  className="mr-2"
                  htmlFor={`avaliableCryptoCurrencies+${id}`}
                >
                  {v}
                </Label>
                <input
                  onChange={handleChange("avaliableCryptoCurrencies", id)}
                  id={`avaliableCryptoCurrencies+${id}`}
                  type="checkbox"
                  value={v}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            ))
          ) : (
            <h2 className="font-bold">Нет валют</h2>
          )}
        </div>
        <ButtonUi
          disabled={Object.keys(datas).length === 0}
          className="ml-auto mt-auto"
          title="Изменить"
          onClick={handleSave}
        />
      </form>
    </div>
  );
}
