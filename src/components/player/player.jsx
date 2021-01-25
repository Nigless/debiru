import React from 'react';
import styled from 'styled-components';
import {
	NearestFilter,
	PerspectiveCamera,
	Scene,
	TextureLoader,
	WebGLRenderer,
} from 'three';
import canvas from '../canvas';
import createPlayerModel from './createPlayerModel';

const Canvas = styled(canvas)({
	width: 500,
	height: 500,
});

export default function Player(props) {
	const { skin, verion, className } = props;

	const init = async (canvas) => {
		const renderer = new WebGLRenderer({
			canvas,
			alpha: true,
		});
		const camera = new PerspectiveCamera(
			75,
			canvas.width / canvas.height,
			5,
			1000
		);
		camera.position.z = 30;
		camera.aspect;
		const scene = new Scene();
		const player = createPlayerModel(
			await new Promise((resolve) => {
				let texture = new TextureLoader().load(skin, resolve);
				texture.minFilter = NearestFilter;
				texture.magFilter = NearestFilter;
				return texture;
			}),
			undefined,
			verion || 1,
			false
		);

		player.position.y = -20;
		scene.add(player);
		renderer.render(scene, camera);
	};
	return <Canvas className={className} onload={init} />;
}
