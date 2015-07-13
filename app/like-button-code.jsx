var LikeButtonCode = React.createClass({
    render: function() {
    	return <dl className="code small">
            <dt dangerouslySetInnerHTML={{__html: '&lt;<strong>script</strong> src=<strong class="text-success">"react.js"</strong>&gt;&lt;/<strong>script</strong>&gt;'}} />
            <dt dangerouslySetInnerHTML={{__html: '&lt;<strong>script</strong> src=<strong class="text-success">"JSXTransformer.js"</strong>&gt;&lt;/<strong>script</strong>&gt;'}} />
            <dt dangerouslySetInnerHTML={{__html: '&lt;<strong>script</strong> type=<strong class="text-success">"text/jsx"</strong>&gt;'}} />
            <dd dangerouslySetInnerHTML={{__html: '<strong class="text-primary">var</strong> LikeButton = React.createClass({'}} />
            <dd className="inner1" dangerouslySetInnerHTML={{__html: '<strong class="text-info">getInitialState</strong>: <strong class="text-primary">function</strong>() {'}} />
            <dd className="inner2" dangerouslySetInnerHTML={{__html: 'return { like: false };'}} />
            <dd className="inner1" dangerouslySetInnerHTML={{__html: '},'}} />
            <dd className="inner1" dangerouslySetInnerHTML={{__html: '<strong class="text-info">handleClick</strong>: <strong class="text-primary">function</strong>() {'}} />
            <dd className="inner2" dangerouslySetInnerHTML={{__html: 'this.setState({ like: !<span class="text-primary">this</span>.state.like });'}} />
            <dd className="inner1" dangerouslySetInnerHTML={{__html: '},'}} />
            <dd className="inner1" dangerouslySetInnerHTML={{__html: '<strong class="text-info">render</strong>: <strong class="text-primary">function</strong>() {'}} />
            <dd className="inner2" dangerouslySetInnerHTML={{__html: '<strong class="text-primary">return</strong> &lt;div&gt;'}} />
            <dd className="inner3" dangerouslySetInnerHTML={{__html: '&lt;a href=<strong class="text-success">"#"</strong> onClick={<span class="text-primary">this</span>.handleClick}&gt;'}} />
            <dd className="inner4" dangerouslySetInnerHTML={{__html: '{ <span class="text-primary">this</span>.state.like ? <strong class="text-success">"Unlike"</strong> : <strong class="text-success">"Like"</strong> }'}} />
            <dd className="inner3" dangerouslySetInnerHTML={{__html: '&lt;/a&gt;'}} />
            <dd className="inner2" dangerouslySetInnerHTML={{__html: '&lt;/div&gt;;'}} />
            <dd className="inner1" dangerouslySetInnerHTML={{__html: '}'}} />
            <dd dangerouslySetInnerHTML={{__html: '});'}} />
            <dd dangerouslySetInnerHTML={{__html: 'React.render(&lt;LikeButton /&gt;, $(<strong class="text-success">".ui-view"</strong>).get(<span class="text-primary">0</span>));'}} />
            <dt dangerouslySetInnerHTML={{__html: '&lt;/<strong>script</strong>&gt;'}} />
        </dl>
    }
});