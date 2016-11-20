import React from 'react';

const Index = (props) => {
	return (
		<div className="container">
			<div className="jumbotron">
				<img src="/images/logo.svg" width="160" />
				<h1>Welcome</h1>
				<p>This is your new <a href='http://keystonejs.com' target='_blank'>KeystoneJS</a> website.</p>
				<p>
					It includes the latest versions of <a href='http://getbootstrap.com/' target='_blank'>Bootstrap</a> and <a href='http://www.jquery.com/' target='_blank'>jQuery</a>.
				</p>
				<p>Visit the <a href='http://keystonejs.com/guide' target='_blank'>Getting Started</a> guide to learn how to customise it.</p>
				<hr />
				{ (props.user && props.user.canAccessKeystone)
					?
					<p>
						<a href='/keystone' className="btn btn-lg btn-primary">
							Open the Admin UI
						</a>
					</p>
					:
					<p>
						We have created a default Admin user for you with the email <strong>user@keystonejs.com</strong> and the password <strong>admin</strong>.
						<br />
						<a href='/keystone/signin' style={{ marginRight: '10px'}} className="btn btn-lg btn-primary">Sign in</a>
						to use the Admin UI.
					</p>
				}
				<hr />
				<p>
					Remember to <a href='https://github.com/keystonejs/keystone' target='_blank'>Star KeystoneJS on GitHub</a> and
					<a href='https://twitter.com/keystonejs' target='_blank'>follow @keystonejs</a> on twitter for updates.
				</p>
				<hr />
				<button className="btn btn-primary btn-large" onClick={() => alert('An alert from the frontend! with props, the section is: ' + props.section)}>
					Click here to see frontend react in the works
				</button>
			</div>
		</div>
	);
};


// React Engine needs exports, don't export default
module.exports = Index;
