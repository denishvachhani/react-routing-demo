import React from "react";
import Sidebar from "./sidebar";
import Users from "./users";
import { Route } from "react-router-dom";

const Dashboard = ({ match }) => {
	return (
		<div>
			<h1>Admin Dashboard</h1>
			<Sidebar />
			<Route path="/admin/users" component={Users} />
		</div>
	);
};

export default Dashboard;
