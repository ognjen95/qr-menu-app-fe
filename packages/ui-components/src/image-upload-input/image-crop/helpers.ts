export const readFile = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => resolve(reader.result as string),
      false
    );
    reader.readAsDataURL(file);
  });

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });

export function getRadianAngle(degreeValue: number): number {
  return (degreeValue * Math.PI) / 180;
}

export function rotateSize(
  width: number,
  height: number,
  rotation: number
): { width: number; height: number } {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: {
    x: number;
    y: number;
    width: number;
    height: number;
  },
  rotation = 0,
  flip: { horizontal: boolean; vertical: boolean } = {
    horizontal: false,
    vertical: false,
  }
): Promise<string | null> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  ctx.drawImage(image, 0, 0);

  const croppedCanvas = document.createElement("canvas");

  const croppedCtx = croppedCanvas.getContext("2d");

  if (!croppedCtx) {
    return null;
  }

  croppedCanvas.width = pixelCrop.width;
  croppedCanvas.height = pixelCrop.height;

  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise<string | null>((resolve) => {
    croppedCanvas.toBlob((file) => {
      if (file) {
        resolve(URL.createObjectURL(file));
      } else {
        resolve(null);
      }
    }, "image/jpeg");
  });
}

export async function getRotatedImage(
  imageSrc: string,
  rotation = 0
): Promise<string> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;

  ctx?.translate(canvas.width / 2, canvas.height / 2);
  ctx?.rotate((rotation * Math.PI) / 180);
  ctx?.drawImage(image, -image.width / 2, -image.height / 2);

  return new Promise<string>((resolve) => {
    canvas.toBlob((file) => {
      if (file) {
        resolve(URL.createObjectURL(file));
      } else {
        resolve("");
      }
    }, "image/png");
  });
}
