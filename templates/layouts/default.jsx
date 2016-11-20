import React from 'react';
import FlashMessages from '../mixins/flash-messages';

const Default = (props) => {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<title>{props.title || 'React-example'}</title>

				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

				<link href="/styles/site.css" rel="stylesheet" />

				{ props.user && props.user.canAccessKeystone &&
					<link href="/keystone/styles/content/editor.min.css" rel="stylesheet" />
				}

				{props.css}
				{props.head}
			</head>

			<body>
				<div id="header">
					<div className="container">
						{
							//- Customise your site's navigation by changing the navLinks Array in ./routes/middleware.js
							//- ... or completely change this header to suit your design.
						}
					    <div role="navigation" className="navbar navbar-default">
						    <div className="container-fluid">
						   		<div className="navbar-header">
							 		<button
										type="button"
										data-toggle="collapse"
										data-target=".navbar-collapse"
										className="navbar-toggle"
										>
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<a href="/" className="navbar-brand">React-example</a>
						   		</div>

						   		<div className="collapse navbar-collapse">
							 		<ul className="nav navbar-nav navbar-left">
										{ props.navLinks.map((link) => {
											return (
												<li key={link.key} className={props.section == link.key ? 'active' : null}>
													<a href={link.href}>
														{link.label}
													</a>
												</li>
											);
										}) }
							 		</ul>
									<ul className="nav navbar-nav navbar-right">
										{ props.user && props.user.canAccessKeystone &&
											<li>
												<a href='/keystone'>
													Open Keystone
												</a>
											</li>
										}
										{ props.user &&
											<li>
												<a href='/keystone/signout'>
													Sign Out
												</a>
											</li>
										}
										{ !props.user &&
											<li>
												<a href='/keystone/signin'>
													Sign In
												</a>
											</li>
										}
									</ul>
						   		</div>
						 	</div>
					   	</div>
					</div>
				</div>

				<div id="body">
					{
						//- NOTE:
						//- There is no .container wrapping className around body blocks to allow more flexibility in design.
						//- Remember to include it in your templates when you override the intro and content blocks!
					}

					{
						//- The Intro block appears above flash messages (used for temporary information display)
						props.intro
					}
					{
						//- Flash messages allow you to display once-off status messages to users, e.g. form
						//- validation errors, success messages, etc.
						<FlashMessages messages={props.messages} />
					}
					{
						//- The children block should contain the body of your template's content
						props.children
					}
				</div>
				<div className="container">
			      	<div id="footer">
			        	<p>Powered by <a href="http://keystonejs.com" target="_blank">KeystoneJS</a>.</p>
			      	</div>
			    </div>

				{
					//- jQuery 1.11.3 is included by default, and required by both Bootstrap
					//- and the KeystoneJS Content Editor. If you are not targeting IE8,
					//- you can upgrade to 2.1.4 (also bundled) for better performance.
				}
				<script src="/js/jquery/jquery-1.11.3.min.js"></script>

				{
					//- Customise which Bootstrap javascript files are served by including
					//- them specifically here, instead of bootstrap-3.3.5.min.js
				}
				<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>

				{ props.user && props.user.canAccessKeystone &&
					//- The KeystoneJS Content Editor provides support for ks-editable data attributes,
					//- which generate links to edit content for users who can access Keystone
					<script src="/keystone/js/content/editor.js"></script>
				}

				{/* <script src="/js/bundle.js"></script> */}

				{
					//- Add scripts that are globally required by your site here.

					//- Include template-specific javascript files by extending the js block
					props.js
				}
			</body>
		</html>
	);
};

export default Default;
