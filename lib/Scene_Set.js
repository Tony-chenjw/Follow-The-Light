function initScene(x, y) {
    scene = new THREE.Scene();
    createMaps(x, y, path);
}

function initCamera1(x, y, z, viewx, viewy, viewz) {
    camera1 = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 800);
    camera1.position.x = x;
    camera1.position.y = y;
    camera1.position.z = z;
    camera1.up.x = 0;
    camera1.up.y = 1;
    camera1.up.z = 0;
    camera1.lookAt(viewx, viewy, viewz);
}

function initCamera2(x, y, z, viewx, viewy, viewz) {
    camera2 = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 800);
    camera2.position.x = x;
    camera2.position.y = y;
    camera2.position.z = z;
    camera2.up.x = 0;
    camera2.up.y = 1;
    camera2.up.z = 0;
    camera2.lookAt(viewx, viewy, viewz);
}

function initRender() {
    // renderer = new THREE.WebGLRenderer({antialias: true});
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas'),
        antialias: true
    });

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function initSphere1(R, x, y, z, color) {
    var geometry = new THREE.SphereGeometry(R, 10, 20);
    var material = new THREE.MeshStandardMaterial({color: color});
    sphere1 = new THREE.Mesh(geometry, material);
    sphere1.position.set(x, y, z);
    sphere1.castShadows = true;
    sphere1.receiveShadows = true;
    scene.add(sphere1);
}

function initSphere2(R, x, y, z, color) {
    var geometry = new THREE.SphereGeometry(R, 10, 20);
    var material = new THREE.MeshStandardMaterial({color: color});
    sphere2 = new THREE.Mesh(geometry, material);
    sphere2.position.set(x, y, z);
    sphere2.castShadows = true;
    sphere2.receiveShadows = true;
    scene.add(sphere2);
}

// function initLightDeath(x, y, z, target) {
//     scene.add(new THREE.AmbientLight(0x880000)); //环境光
//
//     var light = new THREE.PointLight(0xff0000, 1, 0, 2);
//     light.position.set(x, y, z);
//     light.castShadow = true; //需要开启阴影投射
//     scene.add(light);
//
//     var spotlight = new THREE.SpotLight(0xff0000, 20, 0, Math.atan(gap / 2.8 / y));
//     spotlight.position.set(x, y, z);
//     spotlight.castShadow = true;
//     spotlight.target = target;
//     scene.add(spotlight);
//
//     // var geometry = new THREE.SphereGeometry(10, 30, 30);
//     // var material = new THREE.MeshStandardMaterial({color: 0xff0000, emissive: 0xff0000});
//     // var sun = new THREE.Mesh(geometry, material);
//     // sun.position.set(x, 100, z);
//     // scene.add(sun);
// }

function initLightBush(x, y, z, target) {
    scene.add(new THREE.AmbientLight(0x444444)); //环境光
    scene.fog = new THREE.FogExp2(0x000000, 0.6);

    var light = new THREE.PointLight(0xffffff, 1.5, 0, 0);
    light.position.set(x, y / 2, z);
    light.castShadow = true; //需要开启阴影投射
    scene.add(light);

    var spotlight = new THREE.SpotLight(0xffffff, 5, 0, Math.atan(gap / 1.3 / y)); // fixed
    spotlight.position.set(x, y / 2, z);
    spotlight.castShadow = true;
    spotlight.target = target;
    scene.add(spotlight);
    bush.play();
}

function initLightEarth(x, y, z, target) {
    scene.add(new THREE.AmbientLight(0x888888)); //环境光

    var light = new THREE.PointLight(0xffffff, 2, 0, 0);
    light.position.set(x, y / 2, z);
    light.castShadow = true; //需要开启阴影投射
    scene.add(light);

    var spotlight = new THREE.SpotLight(0xffffff, 5, 0, Math.atan(gap / 1.3 / y)); // fixed
    spotlight.position.set(x, y / 2, z);
    spotlight.castShadow = true;
    spotlight.target = target;
    scene.add(spotlight);
    earth.play();
}

function initLightOcean(x, y, z, target) {
    scene.add(new THREE.AmbientLight(0x444444)); //环境光
    scene.fog = new THREE.FogExp2(0x013C7C, 0.3);

    var light = new THREE.PointLight(0xffffff, 1.5, 0, 0);
    light.position.set(x, y / 2, z);
    light.castShadow = true; //需要开启阴影投射
    scene.add(light);

    var spotlight = new THREE.SpotLight(0xffffff, 2, 0, Math.atan(gap / 1.3 / y)); // fixed
    spotlight.position.set(x, y / 2, z);
    spotlight.castShadow = true;
    spotlight.target = target;
    scene.add(spotlight);
    ocean.play();
}

function render(cameraLeft, cameraRight, sceneNow) {
    renderer.autoClear = false;
    renderer.setViewport(0, 0, window.innerWidth / 2, window.innerHeight);
    renderer.setScissor(0, 0, window.innerWidth / 2, window.innerHeight);
    //renderer.setScissor(window.innerWidth/2,0,window.innerWidth,window.innerHeight);
    //renderer.setScissor(0,0,window.innerWidth/2,window.innerHeight);
    renderer.setScissorTest = true;

    renderer.render(sceneNow, cameraLeft);
    renderer.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
    renderer.setScissor(0, 0, screen.Width / 2, screen.Height);
    // renderer.setScissor(0,0,window.innerWidth/2,window.innerHeight);//renderer.setScissor(window.innerWidth/2,0,window.innerWidth,window.innerHeight);
    renderer.setScissorTest = true;
    renderer.render(sceneNow, cameraRight);
}

function playBush() {
    // var bush = document.getElementById("bush");
    // bush.play();
}
function playEarth() {
    // var earth = document.getElementById("earth");
    earth.play();
}
function playOcean() {
    // var ocean = document.getElementById("ocean");
    ocean.play();
}