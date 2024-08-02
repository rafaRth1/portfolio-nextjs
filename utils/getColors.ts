export const getColors = (image: any, radius: any) => {
	const canvas = document.createElement('canvas');

	let width = (canvas.width = image.width);
	let height = (canvas.height = image.height);

	const context = canvas.getContext('2d');
	context?.drawImage(image, 0, 0);

	let data;
	let length: any;
	let i = -4;
	let count = 0;

	try {
		data = context?.getImageData(0, 0, width, height);
		length = data?.data.length;
	} catch (error) {
		console.log(error);

		return {
			R: 0,
			G: 0,
			B: 0,
		};
	}

	let R, G, B;

	R = G = B = 0;

	while ((i += radius * 4) < length) {
		++count;

		R += data?.data[i]!;
		G += data?.data[i + 1]!;
		B += data?.data[i + 2]!;
	}

	R = ~~(R / count);
	G = ~~(G / count);
	B = ~~(B / count);

	return {
		R,
		G,
		B,
	};
};
