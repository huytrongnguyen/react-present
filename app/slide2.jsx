var Slide2 = React.createClass({
    render: function() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <ul>
                        <li>Alice went offline</li>
                        <li>Bob went offline</li>
                        <li>Steve went online</li>
                        <li>Bob went online</li>
                        <li>Charles is idle</li>
                        <li>Charles is on mobile</li>
                        <li>...</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <dl className="code">
                        <dt dangerouslySetInnerHTML={{__html: '[{'}} />
                        <dd dangerouslySetInnerHTML={{__html: '"name": "Bob",'}} />
                        <dd dangerouslySetInnerHTML={{__html: '"client": "web",'}} />
                        <dd dangerouslySetInnerHTML={{__html: '"idle": false'}} />
                        <dt dangerouslySetInnerHTML={{__html: '}, {'}} />
                        <dd dangerouslySetInnerHTML={{__html: '"name":  "Charles",'}} />
                        <dd dangerouslySetInnerHTML={{__html: '"client": "mobile",'}} />
                        <dd dangerouslySetInnerHTML={{__html: '"idle": true'}} />
                        <dt dangerouslySetInnerHTML={{__html: '}'}} />
                        <dt dangerouslySetInnerHTML={{__html: '...'}} />
                        <dt dangerouslySetInnerHTML={{__html: ']'}} />
                    </dl>
                </div>
                <div className="col-sm-12">
                    <h2 className="text-center">How can we build large applications</h2>
                    <h2 className="text-center">with data that <strong>changes over time</strong>?</h2>
                </div>
            </div>
        </div>;
    }
});