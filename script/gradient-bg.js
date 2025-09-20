// Gradient color palette (customize as you like)
const gradientColors = [
   //[228, 185, 209], // #e4b9d1
    //[221, 181, 215], // #ddb5d7
    [178, 178, 221], // #b2b2dd
    [163, 177, 228], // #a3b1e4
    [176, 176, 234], // #b0b0ea
    [154, 180, 238], // #9ab4ee
    [118, 188, 238], // #76bcee
    [24, 235, 221],  // #18ebdd
    [0, 209, 233],   // #00dbe9
    [0, 161, 235],   // #00a1eb
    [220, 107, 171], // #dc6bab
    [76, 137, 238],  // #4c89ee
];

let step = 0;
// Color indices for gradient transitions
let colorIndices = [0, 1, 2, 3];

// Gradient transition speed
const gradientSpeed = 0.005;

function updateGradient() {
    if (!window.gradientColors) return;

    let c0_0 = gradientColors[colorIndices[0]];
    let c0_1 = gradientColors[colorIndices[1]];
    let c1_0 = gradientColors[colorIndices[2]];
    let c1_1 = gradientColors[colorIndices[3]];

    let istep = 1 - step;
    let color1 = 'rgb(' +
        Math.round(istep * c0_0[0] + step * c0_1[0]) + ',' +
        Math.round(istep * c0_0[1] + step * c0_1[1]) + ',' +
        Math.round(istep * c0_0[2] + step * c0_1[2]) + ')';
    let color2 = 'rgb(' +
        Math.round(istep * c1_0[0] + step * c1_1[0]) + ',' +
        Math.round(istep * c1_0[1] + step * c1_1[1]) + ',' +
        Math.round(istep * c1_0[2] + step * c1_1[2]) + ')';

    document.body.style.background = `linear-gradient(120deg, ${color1}, ${color2})`;

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        // Pick new target indices
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (gradientColors.length - 1))) % gradientColors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (gradientColors.length - 1))) % gradientColors.length;
    }
    requestAnimationFrame(updateGradient);
}

window.gradientColors = gradientColors;
window.addEventListener('DOMContentLoaded', updateGradient);