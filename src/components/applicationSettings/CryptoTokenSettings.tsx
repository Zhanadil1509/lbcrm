import { Label, TextInput } from "flowbite-react";
import { ButtonUi } from "components/ui/button";
import { useGetWalletsSettings } from "../../api/settings/useGetWalletsSettings.ts";
import { useState } from "react";
import { usePutWalletsUpdate } from "../../api/settings/usePutWalletsUpdate.ts";

//type Props = {};

export function CryptoTokenSettings() {
  const { data, isLoading, error } = useGetWalletsSettings();
  const [datas, setDatas] = useState<{ [key: string]: string }>({});
  const updateWallets = usePutWalletsUpdate();

  const handleChange =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setDatas((datas) => ({
        ...datas,
        [id]: e.target.value,
      }));
    };

  const handleSave = () => {
    updateWallets.mutate({
      toCreate: [],
      toDelete: [],
      toUpdate: data?.map((wal, i) => ({
        ...wal,
        address: datas[i] ? datas[i] : wal.address,
      })),
    });
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return "Error request " + error;

  return (
    <div className="pl-2 col-span-3 h-auto md:h-64">
      <div className=" h-auto mb-4">
        {data?.map((wallet, id) => (
          <div key={id} className="grid grid-cols-10 gap-4 items-center mb-2">
            <div className="block col-span-2">
              <Label
                htmlFor="email1"
                value={`${wallet.currency}: ${wallet.network}`}
              />
            </div>
            <TextInput
              onChange={handleChange(id)}
              defaultValue={wallet.address}
              className="col-span-8"
              id="email1"
              type="email"
              placeholder="token id"
              required
            />
          </div>
        ))}
      </div>
      <div className="h-auto mb-4">
        <ButtonUi
          disabled={Object.keys(datas)?.length === 0}
          className="ml-auto mt-auto"
          title="Изменить"
          onClick={handleSave}
        />
      </div>
    </div>
  );
}
