export const getRoundedCanvas = (sourceCanvas: any) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = sourceCanvas.width;
    const height = sourceCanvas.height;

    canvas.width = width;
    canvas.height = height;

    if (context) {
        context.beginPath();
        context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI);
        context.strokeStyle = 'rgba(0, 0, 0, 0)';
        context.stroke();
        context.clip();
        context.drawImage(sourceCanvas, 0, 0, width, height);
    }

    return canvas;
};