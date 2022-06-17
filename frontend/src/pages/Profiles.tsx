import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import Table from "../components/Table/Table";
import TableCell from "../components/Table/TableCell";
import TableHead from "../components/Table/TableHead";
import { useZilliqa } from "../providers/ZilliqaProvider";

type Profile = {
  address: string;
  id: number;
  uri: string;
};

export default function Profiles() {
  const { zilliqa } = useZilliqa();
  const [profiles, setProfiles] = useState<Profile[] | null>(null);

  const getZBTStates = useCallback(async () => {
    const states = await zilliqa.contracts
      .at("0x9e74a5a37a7510c1be676c7448bde49e464f5547")
      .getState();

    const _profiles = [];
    for (let address in states.token_ids) {
      const tokenId = states.token_ids[address];
      const profile = {
        address,
        id: tokenId,
        uri: states.token_uris[address],
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
            <TableHead>ID</TableHead>
            <TableHead>Owner Address</TableHead>
            <TableHead>URI</TableHead>
          </tr>
        </thead>
        <tbody>
          {profiles.map(({ id, address, uri }) => (
            <tr key={id}>
              <TableCell isIndex={true}>{id}</TableCell>
              <TableCell>{address}</TableCell>
              <TableCell>{uri}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
