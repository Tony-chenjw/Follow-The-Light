function createMaps(size, gap, path) {
    var format = '.jpg';                        //设定格式
    var urls = [
        path + 'skybox/posx' + format,
        path + 'skybox/negx' + format,
        path + 'skybox/posy' + format,
        path + 'skybox/negy' + format,
        path + 'skybox/posz' + format,
        path + 'skybox/negz' + format
    ];
    var textureCube = new THREE.CubeTextureLoader().load(urls);

    scene.background = textureCube; //作为背景贴图

    var a = size;
    maze = new Maze(a, a, [1, 1], [1, 2 * a - 1], 50);
    maze.init();
    // var cube = new Array();
    var cubeGeometry1 = new THREE.BoxBufferGeometry(gap, gap, gap);
    var planeGeometry = new THREE.PlaneBufferGeometry(gap, gap, 32);
    // var cubeGeometry2 = new THREE.BoxBufferGeometry(gap, 14, gap);
    var textureGrass = THREE.ImageUtils.loadTexture(path+'wall.jpg');
    var textureRoad = THREE.ImageUtils.loadTexture(path+'ground.jpg');
    var material1 = new THREE.MeshLambertMaterial({
        map: textureGrass,
        side: THREE.DoubleSide
    });
    var material2 = new THREE.MeshPhongMaterial({
        map: textureRoad,
        side: THREE.DoubleSide
    });
    // var t = 0;
    for (var i = 0; i < 2 * a + 1; i++) {
        cube[i] = new Array();
        cubep[i] = new Array();
        for (var j = 0; j < 2 * a + 1; j++) {
            cubep[i][j] = new Array();
            if (maze.mazeDataArray[i][j].value === 0) {
                cube[i][j] = new THREE.Mesh(
                    cubeGeometry1, material1, gap
                );
                cube[i][j].position.x = gap * i;
                cube[i][j].position.y = 0;
                cube[i][j].position.z = gap * j;
                cube[i][j].castShadows = true;
                cube[i][j].receiveShadows = true;
                // collideMeshList.push(cube[i][j]);
                scene.add(cube[i][j]);
                // t++;
            }
            else if (maze.mazeDataArray[i][j].value === 1) {
                var plane1 = new THREE.Mesh(planeGeometry, material2);
                plane1.position.x = gap * i;
                plane1.position.y = -1 / 2 * gap;
                plane1.position.z = gap * j;
                plane1.rotateX(1 / 2 * Math.PI);
                plane1.receiveShadows = true;
                scene.add(plane1);

                cubep[i][j][0] = new THREE.Vector3(plane1.position.x - gap / 4.5, plane1.position.y, plane1.position.z - gap / 4.5);
                // cubep[i][j][1] = new THREE.Vector3(cube[i][j].position.x + gap/4, cube[i][j].position.y, cube[i][j].position.z - gap/4);
                cubep[i][j][2] = new THREE.Vector3(plane1.position.x + gap / 4.5, plane1.position.y, plane1.position.z + gap / 4.5);
                // cubep[i][j][3] = new THREE.Vector3(cube[i][j].position.x - gap/4, cube[i][j].position.y, cube[i][j].position.z + gap/4);
            }
            else {
                var plane = new THREE.Mesh(planeGeometry, material2);
                plane.position.x = gap * i;
                plane.position.y = -1 / 2 * gap;
                plane.position.z = gap * j;
                plane.rotateX(1 / 2 * Math.PI);
                plane.receiveShadows = true;
                scene.add(plane);

                cubep[i][j][0] = new THREE.Vector3(plane.position.x - gap / 5, plane.position.y, plane.position.z - gap / 5);
                // cubep[i][j][1] = new THREE.Vector3(cube[i][j].position.x + gap/4, cube[i][j].position.y, cube[i][j].position.z - gap/4);
                cubep[i][j][2] = new THREE.Vector3(plane.position.x + gap / 5, plane.position.y, plane.position.z + gap / 5);
                // cubep[i][j][3] = new THREE.Vector3(cube[i][j].position.x - gap/4, cube[i][j].position.y, cube[i][j].position.z + gap/4);

                switch (theme.value) {
                    case "src/bush/": {
                        initLightBush(i * gap, i * gap, j * gap, plane); // y is changeable with "size * gap"
                        break;
                    }
                    case "src/earth/": {
                        initLightEarth(i * gap, i * gap, j * gap, plane); // y is changeable with "size * gap"
                        break;
                    }
                    case "src/ocean/": {
                        initLightOcean(i * gap, i * gap, j * gap, plane); // y is changeable with "size * gap"
                        break;
                    }
                }
                // initLightBush(i * gap, i * gap, j * gap, plane); // y is changeable with "size * gap"
            }
        }
    }
}