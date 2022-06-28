import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useStorage } from "../providers/Web3StorageProvider";
import { useWallet } from "../providers/WalletProvider";
import { useForm } from "react-hook-form";
import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";
import React, { useEffect } from "react";
import { AiOutlineBlock } from "react-icons/ai";
import Button from "../components/Button";

const FormField = ({
  id,
  label,
  register,
  errors,
  ...inputProps
}: {
  id: string;
  label: string;
  register: any;
  errors: any;
} & React.HTMLProps<HTMLInputElement>) => {
  return (
    <div className="md:flex md:items-center mb-7">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
          htmlFor={id}
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3 relative">
        <input
          {...register(id)}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 invalid:border-red-500"
          id={id}
          {...inputProps}
        ></input>
        <p className="h-6 absolute top-11 text-xs font-bold text-red-400 transition-all">
          {errors[id]?.message}
        </p>
      </div>
    </div>
  );
};

const DropArea = () => {
  const [data, setData] = useState<ArrayBuffer | string | null | undefined>(
    null
  );
  const { storeFiles, storeJson } = useStorage();
  const { wallet, callContract } = useWallet();
  const [err, setErr] = useState<string | boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  useEffect(() => {
    if (wallet) {
      setValue("walletAddress", wallet.defaultAccount.base16);
    }
  }, [setValue, wallet]);

  const uploadImage = async () => {
    // Router.push(`/result?url=${imageURI}`);
  };
  const onSubmit = handleSubmit(async ({ walletAddress, ...data }) => {
    const imageURI = await storeFiles(file);
    console.log(imageURI);

    //TODO , Add additional information such as social media handles.
    const jsonString = JSON.stringify({
      name: `${data.name}`,
      id: `${data.description}`,
    });

    const nameUri = await storeJson(jsonString);
    console.log(nameUri);

    const tx = await callContract(
      "Mint",
      scillaJSONParams({
        to: ["ByStr20", walletAddress],
        picture_uri: ["String", `${imageURI}`],
        data_uri: ["String", `${nameUri}`],
      })
    );

    // TODO: Check for transaction conformation
    console.log("transaction: %o", tx.id);

    console.log(JSON.stringify(tx.receipt, null, 4));

    console.log(tx.receipt);
  });

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    const { length } = files;
    const reader = new FileReader();
    if (length === 0) {
      return false;
    }
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    const { size, type } = files[0];
    setData(null);
    // Limit to either image/jpeg, image/jpg or image/png file
    if (!fileTypes.includes(type)) {
      setErr("File format must be either png or jpg");
      return false;
    }
    // Check file size to ensure it is less than 2MB.
    if (size / 1024 / 1024 > 2) {
      setErr("File size exceeded the limit of 2MB");
      return false;
    }
    setErr(false);

    reader.readAsDataURL(files[0]);
    setFile(files[0]);
    reader.onload = (loadEvt) => {
      setData(loadEvt.target?.result);
    };
  };

  return (
    <>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e)}
        className={styles.card}
      >
        {data !== null && (
          <img className={styles.image} src={data?.toString()} alt="" />
        )}
        {data === null && (
          <p className={styles.dropAreaText}>Drag and drop image</p>
        )}
      </div>
      {err && <p>Unable to upload image</p>}
      {data !== null && (
        <div>
          <button className={styles.deleteButton} onClick={() => setData(null)}>
            Remove Image
          </button>

          <form onSubmit={onSubmit} className="w-full max-w-md object-center">
            <FormField
              id="walletAddress"
              label="Wallet Address"
              register={register}
              errors={errors}
              disabled={wallet}
            />

            <FormField
              id="name"
              label="Name"
              register={register}
              errors={errors}
            />

            <FormField
              id="description"
              label="Description"
              register={register}
              errors={errors}
            />

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                {/* <Button type="submit">
                  <AiOutlineBlock className="scale-150" />
                  Mint
                </Button> */}
                <Button
                  type="submit"
                  className={styles.uploadButton}
                  onClick={() => uploadImage()}
                >
                  <AiOutlineBlock className="scale-150" />
                  Mint
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default DropArea;
