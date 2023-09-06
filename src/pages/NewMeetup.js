import React from "react";
import MainNavigation from "../components/layout/MainNavigation";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Layout from "../components/layout/Layout";

const NewMeetupPage = () => {
  return (
    <div>
      <MainNavigation />
      <Layout>
        <NewMeetupForm />
      </Layout>
    </div>
  );
};

export default NewMeetupPage;
