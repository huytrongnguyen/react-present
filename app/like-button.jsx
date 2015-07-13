var LikeButton = React.createClass({
    getInitialState: function() {
        return { like: false };
    },
    handleClick: function() {
        this.setState({ like: !this.state.like });
    },
    render: function() {
        return <div>
            <a href="javascript:void(0)" onClick={this.handleClick}>
                {this.state.like ? "Unlike" : "Like"}
            </a>
        </div>;        
    }
});
