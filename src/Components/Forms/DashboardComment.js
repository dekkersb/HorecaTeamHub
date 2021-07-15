import "./DashboardComment.css";

function DashboardComment ({comments}) {

    return (
        <div className="completeDashboardCommentBox">
            {comments.map((comment)=>(
            <div key={comment.id} className="completeSmallTipBox">
                <div className="dashboardCommentBox">
                    <div className="commentUser">
                       Gebruiker: {comment.gebruiker}
                        <div className="dashboardComment">
                            Bericht: {comment.comment}
                    </div>
                    </div>

                    <div className="dashboardCommentDate">
                        Datum: {comment.date}
                    </div>

                </div>

            </div>))}
        </div>
    )
}

export default DashboardComment;