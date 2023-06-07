// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 2;

// Create a Renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );

// Append renderer to the body
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Resize function
window.addEventListener( 'resize', function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// GLTF Loader
var loader = new THREE.GLTFLoader();

loader.load( 'scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    animate();
}, undefined, function ( error ) {
    console.error( error );
});

// Animation
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

