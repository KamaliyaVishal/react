import React, { Component } from "react";


class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        const comments = this.props.dish.map((comnt) => {
            return (
                <div key={comnt.id}>
                    <p>
                        {comnt.comment} <br />
                        <span>--</span> {comnt.author}<span>, </span>
                        {comnt.date}
                    </p>
                </div>
            );
        });
        return (
            <div>
                <strong>Comments</strong>
                {comments}
            </div>
        );

    }

}

export default Dishdetail;