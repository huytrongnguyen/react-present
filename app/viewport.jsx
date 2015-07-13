var Viewport = React.createClass({
    render: function() {
        return <div className="panel panel-default viewport">
            <div className="panel-heading">
                <h1 className="pull-left text-muted">{this.state.slides[this.state.current].title}</h1>
                <img className="pull-right" src="content/logo.png" alt="logo" style={{ height: '80%' }} />
            </div>
            <div className="panel-body">
                {React.createElement(this.state.slides[this.state.current].slide)}
            </div>
            <div className="panel-footer">
                <ul className="pager">
                    <li className="previous">
                        <a href="javascript:void(0)" onClick={this.gotoSlide.bind(this, -1)}>
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            Previous
                        </a>
                    </li>
                    <li className="next">
                        <a href="javascript:void(0)" onClick={this.gotoSlide.bind(this, 1)}>
                            Next
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>;
    },
    getInitialState: function() {
        return { 
            current: 0,
            slides: [
                { title: '', slide: Slide0 },
                { title: 'ABOUT ME', slide: Slide1 },
                { title: 'WHAT PROBLEM ARE WE TALKING ABOUT TODAY', slide: Slide2 },
                { title: '', slide: Slide3 },
                { title: '', slide: Slide4 },
                { title: 'REACT IS ONLY THE VIEW LAYER', slide: Slide5 },
                { title: 'LIKE BUTTON COMPONENT', slide: Slide6 },
                { title: 'COMPONENT LIFECYCLE', slide: Slide7 },
                { title: 'SEPARATION OF COMPONENTS', slide: Slide8 },
                { title: 'LIVE DEMO', slide: Slide9 },
                { title: 'SHOULD YOU USE REACT', slide: Slide10 },
                { title: '', slide: Slide11 },
            ]
        };
    },
    componentDidMount: function() {
        this.gotoSlide(0);
        $(document.body).on('keydown', this.handleKeyDown);
    },
    handleKeyDown: function(e) {
        var ENTER = 13,
            SPACE = 32,
            LEFT = 37,
            RIGHT = 39,
            UP = 38,
            DOWN = 40;
        if(e.keyCode === ENTER || e.keyCode === SPACE || e.keyCode === RIGHT || e.keyCode === DOWN) {
            this.gotoSlide(1);
        } else if (e.keyCode === LEFT || e.keyCode === UP) {
            this.gotoSlide(-1);
        }
    },
    gotoSlide: function(step) {
        var current = this.state.current + step;
        if (current < 0) {
            current = 0;
        } else if (this.state.slides.length <= current) {
            current = this.state.slides.length - 1;  
        }

        this.setState({ current: current });
    }
});