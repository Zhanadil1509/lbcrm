/*type Props = {

};*/

import { ButtonUi } from "components/ui/button";
import { useSignIn } from "../../api/auth/useSignIn.ts";
import { useState } from "react";
import { CustomInput } from "components/ui/customInput";

export function AuthPage() {
  const signInMutation = useSignIn();

  const [token, setToken] = useState<string>("");

  const handleSignIn = () => signInMutation.mutate({ token });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Libertad
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <label
                htmlFor="token"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Введите токен:
              </label>
              <CustomInput
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setToken(e.target.value)
                }
                type="text"
                name="token"
                id="token"
                placeholder="токен..."
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <ButtonUi
              onClick={() => handleSignIn()}
              title="Войти"
              className="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
