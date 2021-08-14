import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "../components/Header";
import Siderbar from '../components/Siderbar';
import Users from "../components/Users";
import Products from "../components/Products";
import Transaction from "../components/Transaction";
import Categories from "../components/Categories";
import Orders from "../components/Orders";
import UserForm from "../components/UserForm";
import DashboardPanel from "../components/DashboardPanel";
import "./dashboard.css";


function Dashboard(props) {
    return (
        <div class="m-dashboard">
            <div className="d-top-nav">
                <Header />
            </div>
            <div className="content-wrap">
              <div className="d-sidebar">
                  <Siderbar />
                  </div>  
                  <div className="d-main">

                  <Switch>
						<Route
							path={`${props.match.path}/users/new`}
							component={UserForm}
						/>
						<Route
							path={`${props.match.path}/users/update/:id`}
							component={UserForm}
						/>
						<Route path={`${props.match.path}/users`} component={Users} />
						<Route path={`${props.match.path}/products`} component={Products} />
						<Route
							path={`${props.match.path}/transactions`}
							component={Transaction}
						/>
						<Route
							path={`${props.match.path}/categories`}
							component={Categories}
						/>
						<Route path={`${props.match.path}/orders`} component={Orders} />
						<Route path={`${props.match.path}/`} component={DashboardPanel} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;