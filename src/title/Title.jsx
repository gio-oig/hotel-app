import React from 'react';

function Title({ title }) {
	return (
		<div className="section-title">
			<h4>{title}</h4>
			<div className="underline" />
		</div>
	);
}

export default Title;
