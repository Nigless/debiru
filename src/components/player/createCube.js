import {
	BoxGeometry,
	DoubleSide,
	FrontSide,
	Mesh,
	MeshBasicMaterial,
	Vector2,
} from 'three';
export default function createCube(
	texture,
	width,
	height,
	depth,
	textures,
	slim,
	name,
	transparent
) {
	let textureWidth = texture.image.width;
	let textureHeight = texture.image.height;

	let geometry = new BoxGeometry(width, height, depth);
	let material = new MeshBasicMaterial({
		map: texture,
		transparent: transparent || false,
		alphaTest: 0.1,
		side: transparent ? DoubleSide : FrontSide, //TODO: double sided not working properly
	});

	geometry.computeBoundingBox();

	geometry.faceVertexUvs[0] = [];

	let faceNames = ['right', 'left', 'top', 'bottom', 'front', 'back'];
	let faceUvs = [];
	for (let i = 0; i < faceNames.length; i++) {
		let face = textures[faceNames[i]];
		if (faceNames[i] === 'back') {
		}
		let w = textureWidth;
		let h = textureHeight;
		let tx1 = (slim && face.sx ? face.sx : face.x) / w;
		let ty1 = face.y / h;
		let tx2 =
			((slim && face.sx ? face.sx : face.x) +
				(slim && face.sw ? face.sw : face.w)) /
			w;
		let ty2 = (face.y + face.h) / h;

		faceUvs[i] = [
			new Vector2(tx1, ty2),
			new Vector2(tx1, ty1),
			new Vector2(tx2, ty1),
			new Vector2(tx2, ty2),
		];
		// console.log(faceUvs[i])

		let flipX = face.flipX;
		let flipY = face.flipY;

		let temp;
		if (flipY) {
			temp = faceUvs[i].slice(0);
			faceUvs[i][0] = temp[2];
			faceUvs[i][1] = temp[3];
			faceUvs[i][2] = temp[0];
			faceUvs[i][3] = temp[1];
		}
		if (flipX) {
			//flip x
			temp = faceUvs[i].slice(0);
			faceUvs[i][0] = temp[3];
			faceUvs[i][1] = temp[2];
			faceUvs[i][2] = temp[1];
			faceUvs[i][3] = temp[0];
		}
	}

	let j = 0;
	for (let i = 0; i < faceUvs.length; i++) {
		geometry.faceVertexUvs[0][j] = [
			faceUvs[i][0],
			faceUvs[i][1],
			faceUvs[i][3],
		];
		geometry.faceVertexUvs[0][j + 1] = [
			faceUvs[i][1],
			faceUvs[i][2],
			faceUvs[i][3],
		];
		j += 2;
	}
	geometry.uvsNeedUpdate = true;

	let cube = new Mesh(geometry, material);
	cube.name = name;
	cube.castShadow = true;
	cube.receiveShadow = false;

	return cube;
}
