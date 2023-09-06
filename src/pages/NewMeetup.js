import React from "react";
import { useNavigate } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Layout from "../components/layout/Layout";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    //here we will send the http request - to the firebase api
    fetch(
      "https://advanced-react-4e9c6-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <div>
      <MainNavigation />
      <Layout>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Layout>
    </div>
  );
};

export default NewMeetupPage;
