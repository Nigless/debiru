import { Object3D, Vector3 } from 'three';
import createCube from './createCube';
import texturePositions from './texturePositions';
export default function createPlayerModel(
	skinTexture,
	capeTexture,
	skinVersion,
	slim,
	capeType
) {
	let headGroup = new Object3D();
	headGroup.name = 'headGroup';
	headGroup.position.set(0, 28, 0);
	headGroup.translateOnAxis(new Vector3(0, 1, 0), -4);
	let head = createCube(
		skinTexture,
		8,
		8,
		8,
		texturePositions.head[skinVersion],
		slim,
		'head'
	);
	head.translateOnAxis(new Vector3(0, 1, 0), 4);
	headGroup.add(head);
	if (skinVersion >= 1) {
		let hat = createCube(
			skinTexture,
			8.504,
			8.504,
			8.504,
			texturePositions.hat,
			slim,
			'hat',
			true
		);
		hat.translateOnAxis(new Vector3(0, 1, 0), 4);
		headGroup.add(hat);
	}

	let bodyGroup = new Object3D();
	bodyGroup.name = 'bodyGroup';
	bodyGroup.position.x = 0;
	bodyGroup.position.y = 18;
	bodyGroup.position.z = 0;
	let body = createCube(
		skinTexture,
		8,
		12,
		4,
		texturePositions.body[skinVersion],
		slim,
		'body'
	);
	bodyGroup.add(body);
	if (skinVersion >= 1) {
		let jacket = createCube(
			skinTexture,
			8.504,
			12.504,
			4.504,
			texturePositions.jacket,
			slim,
			'jacket',
			true
		);
		bodyGroup.add(jacket);
	}

	let leftArmGroup = new Object3D();
	leftArmGroup.name = 'leftArmGroup';
	leftArmGroup.position.x = slim ? -5.5 : -6;
	leftArmGroup.position.y = 18;
	leftArmGroup.position.z = 0;
	leftArmGroup.translateOnAxis(new Vector3(0, 1, 0), 4);
	let leftArm = createCube(
		skinTexture,
		slim ? 3 : 4,
		12,
		4,
		texturePositions.leftArm[skinVersion],
		slim,
		'leftArm'
	);
	leftArm.translateOnAxis(new Vector3(0, 1, 0), -4);
	leftArmGroup.add(leftArm);
	if (skinVersion >= 1) {
		let leftSleeve = createCube(
			skinTexture,
			slim ? 3.504 : 4.504,
			12.504,
			4.504,
			texturePositions.leftSleeve,
			slim,
			'leftSleeve',
			true
		);
		leftSleeve.translateOnAxis(new Vector3(0, 1, 0), -4);
		leftArmGroup.add(leftSleeve);
	}

	let rightArmGroup = new Object3D();
	rightArmGroup.name = 'rightArmGroup';
	rightArmGroup.position.x = slim ? 5.5 : 6;
	rightArmGroup.position.y = 18;
	rightArmGroup.position.z = 0;
	rightArmGroup.translateOnAxis(new Vector3(0, 1, 0), 4);
	let rightArm = createCube(
		skinTexture,
		slim ? 3 : 4,
		12,
		4,
		texturePositions.rightArm[skinVersion],
		slim,
		'rightArm'
	);
	rightArm.translateOnAxis(new Vector3(0, 1, 0), -4);
	rightArmGroup.add(rightArm);
	if (skinVersion >= 1) {
		let rightSleeve = createCube(
			skinTexture,
			slim ? 3.504 : 4.504,
			12.504,
			4.504,
			texturePositions.rightSleeve,
			slim,
			'rightSleeve',
			true
		);
		rightSleeve.translateOnAxis(new Vector3(0, 1, 0), -4);
		rightArmGroup.add(rightSleeve);
	}

	let leftLegGroup = new Object3D();
	leftLegGroup.name = 'leftLegGroup';
	leftLegGroup.position.x = -2;
	leftLegGroup.position.y = 6;
	leftLegGroup.position.z = 0;
	leftLegGroup.translateOnAxis(new Vector3(0, 1, 0), 4);
	let leftLeg = createCube(
		skinTexture,
		4,
		12,
		4,
		texturePositions.leftLeg[skinVersion],
		slim,
		'leftLeg'
	);
	leftLeg.translateOnAxis(new Vector3(0, 1, 0), -4);
	leftLegGroup.add(leftLeg);
	if (skinVersion >= 1) {
		let leftTrousers = createCube(
			skinTexture,
			4.504,
			12.504,
			4.504,
			texturePositions.leftTrousers,
			slim,
			'leftTrousers',
			true
		);
		leftTrousers.translateOnAxis(new Vector3(0, 1, 0), -4);
		leftLegGroup.add(leftTrousers);
	}

	let rightLegGroup = new Object3D();
	rightLegGroup.name = 'rightLegGroup';
	rightLegGroup.position.x = 2;
	rightLegGroup.position.y = 6;
	rightLegGroup.position.z = 0;
	rightLegGroup.translateOnAxis(new Vector3(0, 1, 0), 4);
	let rightLeg = createCube(
		skinTexture,
		4,
		12,
		4,
		texturePositions.rightLeg[skinVersion],
		slim,
		'rightLeg'
	);
	rightLeg.translateOnAxis(new Vector3(0, 1, 0), -4);
	rightLegGroup.add(rightLeg);
	if (skinVersion >= 1) {
		let rightTrousers = createCube(
			skinTexture,
			4.504,
			12.504,
			4.504,
			texturePositions.rightTrousers,
			slim,
			'rightTrousers',
			true
		);
		rightTrousers.translateOnAxis(new Vector3(0, 1, 0), -4);
		rightLegGroup.add(rightTrousers);
	}

	let playerGroup = new Object3D();
	playerGroup.add(headGroup);
	playerGroup.add(bodyGroup);
	playerGroup.add(leftArmGroup);
	playerGroup.add(rightArmGroup);
	playerGroup.add(leftLegGroup);
	playerGroup.add(rightLegGroup);

	if (capeTexture) {
		console.log(texturePositions);
		let capeTextureCoordinates = texturePositions.capeRelative;
		if (capeType === 'optifine') {
			capeTextureCoordinates = texturePositions.capeOptifineRelative;
		}
		if (capeType === 'labymod') {
			capeTextureCoordinates = texturePositions.capeLabymodRelative;
		}
		capeTextureCoordinates = JSON.parse(
			JSON.stringify(capeTextureCoordinates)
		); // bad clone to keep the below scaling from affecting everything

		console.log(capeTextureCoordinates);

		// Multiply coordinates by image dimensions
		for (let cord in capeTextureCoordinates) {
			capeTextureCoordinates[cord].x *= capeTexture.image.width;
			capeTextureCoordinates[cord].w *= capeTexture.image.width;
			capeTextureCoordinates[cord].y *= capeTexture.image.height;
			capeTextureCoordinates[cord].h *= capeTexture.image.height;
		}

		console.log(capeTextureCoordinates);

		let capeGroup = new Object3D();
		capeGroup.name = 'capeGroup';
		capeGroup.position.x = 0;
		capeGroup.position.y = 16;
		capeGroup.position.z = -2.5;
		capeGroup.translateOnAxis(new Vector3(0, 1, 0), 8);
		capeGroup.translateOnAxis(new Vector3(0, 0, 1), 0.5);
		let cape = createCube(
			capeTexture,
			10,
			16,
			1,
			capeTextureCoordinates,
			false,
			'cape'
		);
		cape.rotation.x = toRadians(10); // slight backward angle
		cape.translateOnAxis(new Vector3(0, 1, 0), -8);
		cape.translateOnAxis(new Vector3(0, 0, 1), -0.5);
		cape.rotation.y = toRadians(180); // flip front&back to be correct
		capeGroup.add(cape);

		playerGroup.add(capeGroup);
	}

	return playerGroup;
}
