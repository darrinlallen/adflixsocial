
// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.createElement('canvas'),
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the 3D text
const loader = new THREE.FontLoader();
loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.json', function(font) {
    const geometry = new THREE.TextGeometry('Ad Flix', {
        font: font,
        size: 0.5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5
    });
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(geometry, material);
    scene.add(textMesh);

    // Center the text
    const box = new THREE.Box3().setFromObject(textMesh);
    const center = box.getCenter(new THREE.Vector3());
    textMesh.position.sub(center);

    // Adjust camera position
    camera.position.z = 2;

    function animate() {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.01; // Rotate the text
        renderer.render(scene, camera);
    }
    animate();
});

// Handle window resize
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);