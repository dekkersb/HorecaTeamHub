import React, {useEffect, useState} from "react";
import axios from "axios";
import DashboardComment from "../Forms/DashboardComment";

function Dashboard () {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await axios.get(
                    `http://localhost:8080/dashboardcomment`
                )
                console.log("Dit is de data:", response.data)
                setComments(response.data)

            } catch {
                console.log("ERROROORORO!")
            }
        }

        fetchComments();

    }, [comments]);

    return (
        <div className="Comments">
            <DashboardComment comments={comments}/>
        </div>
    )
}

export default Dashboard;