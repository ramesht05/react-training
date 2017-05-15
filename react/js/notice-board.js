let cardsList = [
            {
                id: 1,
                title: "Read the proj reqt",
                description: "should read the whole reqt doc",
                status: "in-progress",
                tasks: [{
                            id: 1,
                            name: "revise HLD",
                            done: false
                        }]
            },
            {
                id: 2,
                title: "Write some code",
                description: "Code based on the current CRs",
                status: "todo",
                tasks: [
                        {
                            id: 1,
                            name: "call Ravi",
                            done: true
                        },
                        {
                            id: 2,
                            name: "reply to the emails",
                            done: false
                        },
                        {
                            id: 3,
                            name: "read the bug reports",
                            done: false
                        }
                    ]
            },
   ];

class Card extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

class Lane extends React.Component {
    render() {
        return (
            <div>
                <Card {...this.props.card}/>
            </div>
        );
    }
}

class NoticeBoard extends React.Component {
    constructor(props) {
        super(props);
        this.renderLane = this.renderLane.bind(this);
    }

    renderLane(cards) {
        return this.props.cards.map((card, i) => {
            if (card.status == "in-progress") {
                return <div> <Card card={card}/> </div>;
            }
        });
    }

    render() {
        return (
            <div>
                {this.renderLane(this.props.cards)}
            </div>
        );
    }
};

ReactDOM.render(<NoticeBoard cards={cardsList} />, document.getElementById("content"));