import "./DashboardComment.css";

function DashboardComment ({UserComments}) {

    return (
        <div className="completeDashboardCommentBox">
            {UserComments && UserComments.map((comment)=>(
            <div key={comment.id} className="completeSmallTipBox">
                <div className="dashboardCommentBox">
                    <div className="commentDate">
                        Datum: {comment.date}
                        <div className="dashboardComment">
                            Bericht: {comment.comment}
                    </div>
                    </div>

                    <div className="dashboardCommentUser">
                       Gebruiker: {comment.gebruiker}
                    </div>

                </div>

            </div>))}
        </div>
    )
}

export default DashboardComment;