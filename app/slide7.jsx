var Slide7 = React.createClass({
    render: function() {
        return <div className="container-fluid">
            <p>Mounting</p>
            <ul>
                <li>getInitialState</li>
                <li>componentWillMount</li>
                <li>componentDidMount</li>
            </ul>
            <p>Updating</p>
            <ul>
                <li>shouldComponentUpdate</li>
                <li>componentWillUpdate</li>
                <li>componentDidUpdate</li>
            </ul>
            <p>Unmounting</p>
            <ul>
                <li>componentWillUnmount</li>
            </ul>
        </div>;
    }
});