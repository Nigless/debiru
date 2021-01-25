import React, { createRef, useEffect } from 'react';
import styled from 'styled-components';

const Root = styled.canvas({
	width: '100%',
	display: 'block',
});

export default function Canvas(props) {
	const canvas = createRef();

	const { onload, className } = props;
	useEffect(() => {
		const elem = canvas.current;
		elem.width = elem.offsetWidth;
		elem.height = elem.offsetHeight;
		onload(elem);
	}, []);
	return <Root ref={canvas} className={className} />;
}
