var Slide10 = React.createClass({
    render: function() {
        return <div className="container-fluid">
            <p>Pros</p>
            <ul>
                <li>Components makes code reuse, testing, and separation of concerns easy</li>
                <li>Plays well with other libraries and technologies (meteor, rails, node, ...)</li>
                <li>Components allow you to split work easily</li>
            </ul>
            <p>Cons</p>
            <ul>
                <li>React will <strong>slow you down tremendously</strong> at the start</li>
                <li>React does not support any browser below IE8, and never will</li>
                <li>You will reinvent a lot of wheels</li>
            </ul>
        </div>;
    }
});