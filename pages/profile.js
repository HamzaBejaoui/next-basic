import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import Link from "next/link";
import axios from "axios";
import useSWR from "swr";

const Profile = () => {
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (!data) return <h1>Chargement ...</h1>;

  if (error) return <h1>Une error est survenue</h1>;
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD",
  };

  return (
    <Layout>
      <h1>Cette page utilise le rendu coté client</h1>
      {data &&
        data.map((user) => (
          <div style={styles} key={user.id}>
            <h1>{user.name}</h1>
            <div>Email: {user.email}</div>
            <div>Telephone: {user.phone}</div>
          </div>
        ))}
    </Layout>
  );
};

export default Profile;
