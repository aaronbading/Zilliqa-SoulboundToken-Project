import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import Table from "../components/Table/Table";
import TableCell from "../components/Table/TableCell";
import TableHead from "../components/Table/TableHead";
import { useZilliqa } from "../providers/ZilliqaProvider";

type Profile = {
  address: string;
  profile_uri: string;
  data_uri: string;
};

export default function Profiles() {
  const { zilliqa } = useZilliqa();
  const [profiles, setProfiles] = useState<Profile[] | null>(null);

  const getZBTStates = useCallback(async () => {
    const states = await zilliqa.contracts
      .at("0xf6fc98103b75c7e6b2b690e3419f66360ba32e8b")
      .getState();
    
    const _profiles = [];
    for (let address in states.token_uris) {
      const profile = {
        address,
        profile_uri: states.token_uris[address][0],
        data_uri: states.token_uris[address][1],
      };
      _profiles.push(profile);
    }

    setProfiles(_profiles);
  }, [zilliqa.contracts]);

  useEffect(() => {
    getZBTStates();
  }, [getZBTStates]);

  if (!profiles) return <div>Loading...</div>;

  return (
    <div className={cn("sm:mx-10", "sm:my-4")}>
      <h1 className={cn("text-xl", "font-bold")}>Profiles</h1>
      <Table>
        <thead className="border-b bg-gray-800">
          <tr>
            <TableHead>Owner Address</TableHead>
            <TableHead>Profle_URI</TableHead>
            <TableHead>Data_URI</TableHead>

          </tr>
        </thead>
        <tbody>
          {profiles.map(({ address, profile_uri, data_uri }) => (
            <tr key={address}>
              <TableCell isIndex={true}>{address}</TableCell>
              <TableCell>{profile_uri}</TableCell>
              <TableCell>{data_uri}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
