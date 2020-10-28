import React, { Component, useState } from "react";

import { getLoggedInUser } from "../../helpers/authUtils";
import Loader from "../../components/Loader";
import OverviewWidget from "../../components/OverviewWidget";
import SimpleForm from "../candidate/SimpleForm";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import Chat from "./Chat";
// import "../../app1.css";

// class Dashboard extends Component {
// 	constructor(props) {
// 		super(props);

// 		var oneWeekAgo = new Date();
// 		oneWeekAgo.setDate(oneWeekAgo.getDate() - 15);

// 		this.state = {
// 			user: getLoggedInUser(),
// 			filterDate: [oneWeekAgo, new Date()],
// 		};
// 	}

// 	render() {
// 		return (
// 			<React.Fragment>
// 				<div style={{ textAlign: "center" }}>
// 					<h1>Welcome to Home </h1>
// 				</div>
// 			</React.Fragment>
// 		);
// 	}
// }

const Dashboard = (props) => {
    let [showChat, setShowChat] = useState(false);

    const startChat = () => {
        setShowChat(true);
    };
    const hideChat = () => {
        setShowChat(false);
    };

    return (
        <React.Fragment>
            <div className="header">
                <h2>Home Page!</h2>
            </div>
            <div className="footer">Footer</div>
            <div className="bot">
                <div style={{ display: showChat ? "" : "none" }}>
                    <SimpleForm></SimpleForm>
                </div>
                <div> {showChat ? <SimpleForm></SimpleForm> : null} </div>
                <div
                    style={{
                        position: "absolute",
                        top: "500px",
                        left: "1600px",
                    }}
                >
                    <h1>hey</h1>
                    {!showChat ? (
                        <button className="btn" onClick={() => startChat()}>
                            click to chat...{" "}
                        </button>
                    ) : (
                        <button className="btn" onClick={() => hideChat()}>
                            click to hide...{" "}
                        </button>
                    )}
                </div>
            </div>{" "}
        </React.Fragment>
    );
};

export default Dashboard;
