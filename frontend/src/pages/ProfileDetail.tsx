import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/Table/Table";
import TableCell from "../components/Table/TableCell";
import { useZilliqa } from "../providers/ZilliqaProvider";
import { Profile } from "../types/types";

const ProfileDetail = () => {
  const { address } = useParams();
  const { zilliqa } = useZilliqa();
  const [profile, setProfile] = useState<Profile | null>(null);

  const getZBTStates = useCallback(async () => {
    if (address) {
      const states = await zilliqa.contracts
        .at("0xf6fc98103b75c7e6b2b690e3419f66360ba32e8b")
        .getState();

      try {
        const data = await fetch(states.token_uris[address][1]).then((res) =>
          res.json()
        );
        setProfile({
          address,
          profile_uri: states.token_uris[address][0],
          data_uri: states.token_uris[address][1],
          data,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [address, zilliqa.contracts]);

  useEffect(() => {
    getZBTStates();
  }, [getZBTStates]);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="sm:mx-10">
      <h1 className="text-4xl font-bold tracking-wide">Profile</h1>
      <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-around sm:items-start my-20 mr-4">
        <div>
          <img
            alt="profile"
            src={profile.profile_uri}
            className="rounded-full w-32 h-32 mb-8 sm:w-60 sm:h-60"
          />
          <img
            alt="profile"
            src={profile.data?.image}
            className="rounded-full w-32 h-32 mb-8 sm:w-60 sm:h-60"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="border-b font-bold tracking-wide">Info</h2>
          <Table>
            <tr>
              <TableCell isIndex={true}>ID</TableCell>
              <TableCell>{profile.data?.tokenId}</TableCell>
            </tr>
            <tr>
              <TableCell isIndex={true}>Name</TableCell>
              <TableCell>{profile.data?.name}</TableCell>
            </tr>
          </Table>
          <h2 className="border-b font-bold tracking-wide mt-8">Attributes</h2>
          <Table>
            {profile.data?.attributes?.map(({ trait_type, value }: any) => (
              <tr key={trait_type}>
                <TableCell isIndex={true}>{trait_type}</TableCell>
                <TableCell>{value}</TableCell>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
