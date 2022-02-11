import React, {useEffect, useState} from "react";
import axios from "axios";
import DashboardComment from "../Forms/DashboardComment";




function Dashboard () {

        const [feed, setFeed] = useState([]);

            async function fetchComments() {

                try {
                    const response = await axios.get(
                        `http://localhost:8080/api/dashboardcomment`);
                         setFeed(response.data);
                } catch {
                    console.log("ERROROORORO!")
                }
            }

            useEffect(() => {
            fetchComments();

    },[feed]);

    return (
        <div className="Comments">
            <DashboardComment UserComments={feed}/>
        </div>
    );
};

export default Dashboard;