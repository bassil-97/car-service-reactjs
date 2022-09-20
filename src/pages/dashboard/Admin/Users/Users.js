import React, { useEffect, useState } from "react";
import "./Users.css";

import UsersList from "../../../../components/Admin/UsersList/UsersList";
import DataTable from "../../../../components/Admin/UsersList/UsersTable";
import LoadingSpinner from "../../../../UI/LoadingSpinner";

import { useHttpClient } from "../../../../hooks/http-hook";

export default function Users() {
  const { isLoading, sendRequest } = useHttpClient();

  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [giftsList, setGiftsList] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users"
        );

        console.log(responseData.users);
        setFetchedUsers(responseData.users);
      } catch (err) {}
    };

    const fetchGiftsList = async () => {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/gifts`
      );

      setGiftsList(responseData["gifts"]);
    };

    fetchUser();
    fetchGiftsList();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && fetchedUsers && (
        <div className="users-list-page">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <DataTable data={fetchedUsers} />
            </div>
            <div className="col-lg-4 mb-2">
              <UsersList data={fetchedUsers} title={"Users List"} />
              <UsersList data={giftsList} title={"Gifts List"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
