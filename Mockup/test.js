var scene, camera, renderer, controls;
var dae, loader;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas').appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    loader = new THREE.ColladaLoader();
    loader.load('model.dae', function(collada) {
        dae = collada.scene;
        scene.add(dae);
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    if(dae) {
        dae.rotation.y += 0.01;
    }

    controls.update();
    renderer.render(scene, camera);
}

init();
