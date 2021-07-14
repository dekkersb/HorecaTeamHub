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

                    <div >
                        Datum: 14-07-2021
                    </div>

                </div>

            </div>))}
        </div>
    )
}

export default DashboardComment;