function restrict1() {
    var left = 0;
    var right = 0;
    var up = 0;
    var down = 0;
    var j = Math.ceil((camera1.position.x - gap / 2) / gap);
    var i = Math.ceil((camera1.position.z - gap / 2) / gap);
    // camera1 is in cube[j][i] and cube[j][i]'position is (j*gap, i*gap)

    if (maze.mazeDataArray[j + 1][i].value === 1 || maze.mazeDataArray[j + 1][i].value === 0xf) // the x+/right cube is road
    {
        right = gap / 3.6;
    }
    if (maze.mazeDataArray[j][i + 1].value === 1 || maze.mazeDataArray[j][i + 1].value === 0xf) // the z+/down cube is road
    {
        down = gap / 3.6;
    }
    if (maze.mazeDataArray[j - 1][i].value === 1 || maze.mazeDataArray[j - 1][i].value === 0xf) // the x-/left cube is road
    {
        left = gap / 3.6;
    }
    if (maze.mazeDataArray[j][i - 1].value === 1 || maze.mazeDataArray[j][i - 1].value === 0xf) // the z-/up cube is road
    {
        up = gap / 3.6;
    }

    if (camera1.position.x >= cubep[j][i][2].x + right) {

        if (vec1.x > 0) {
            move1.setX(0);
            movq1.setX(-vec1.x);
        }
        if (vec1.x < 0) {
            move1.setX(vec1.x);
            movq1.setX(0);
        }
    }

    if (camera1.position.x <= cubep[j][i][0].x - left) {

        if (vec1.x > 0) {
            move1.setX(vec1.x);
            movq1.setX(0);
            // movq1.setX(-vec1.x);
        }
        if (vec1.x < 0) {
            move1.setX(0);
            movq1.setX(-vec1.x);
        }
    }

    if (camera1.position.z >= cubep[j][i][2].z + down) {

        if (vec1.z > 0) {
            move1.setZ(0);
            movq1.setZ(-vec1.z);
            // movq1.setX(-vec1.x);
        }
        if (vec1.z < 0) {
            move1.setZ(vec1.z);
            movq1.setZ(0);
        }
    }

    if (camera1.position.z <= cubep[j][i][0].z - up) {

        if (vec1.z > 0) {
            move1.setZ(vec1.z);
            movq1.setZ(0);
            // movq1.setX(-vec1.x);
        }
        if (vec1.z < 0) {
            move1.setZ(0);
            movq1.setZ(-vec1.z);
        }
    }
}

function restrict2() {
    var left = 0;
    var right = 0;
    var up = 0;
    var down = 0;
    var j = Math.ceil((camera2.position.x - gap / 2) / gap);
    var i = Math.ceil((camera2.position.z - gap / 2) / gap);
    // camera1 is in cube[j][i] and cube[j][i]'position is (j*gap, i*gap)

    if (maze.mazeDataArray[j + 1][i].value === 1 || maze.mazeDataArray[j + 1][i].value === 0xf) // the x+/right cube is road
    {
        right = gap / 3.6;
    }
    if (maze.mazeDataArray[j][i + 1].value === 1 || maze.mazeDataArray[j][i + 1].value === 0xf) // the z+/down cube is road
    {
        down = gap / 3.6;
    }
    if (maze.mazeDataArray[j - 1][i].value === 1 || maze.mazeDataArray[j - 1][i].value === 0xf) // the x-/left cube is road
    {
        left = gap / 3.6;
    }
    if (maze.mazeDataArray[j][i - 1].value === 1 || maze.mazeDataArray[j][i - 1].value === 0xf) // the z-/up cube is road
    {
        up = gap / 3.6;
    }

    if (camera2.position.x >= cubep[j][i][2].x + right) {

        if (vec2.x > 0) {
            move2.setX(0);
            movq2.setX(-vec2.x);
        }
        if (vec2.x < 0) {
            move2.setX(vec2.x);
            movq2.setX(0);
        }
    }

    if (camera2.position.x <= cubep[j][i][0].x - left) {
        if (vec2.x > 0) {
            move2.setX(vec2.x);
            movq2.setX(0);
            // movq1.setX(-vec1.x);
        }
        if (vec2.x < 0) {
            move2.setX(0);
            movq2.setX(-vec2.x);
        }
    }

    if (camera2.position.z >= cubep[j][i][2].z + down) {
        if (vec2.z > 0) {
            move2.setZ(0);
            movq2.setZ(-vec2.z);
            // movq1.setX(-vec1.x);
        }
        if (vec2.z < 0) {
            move2.setZ(vec2.z);
            movq2.setZ(0);
        }
    }

    if (camera2.position.z <= cubep[j][i][0].z - up) {
        if (vec2.z > 0) {
            move2.setZ(vec2.z);
            movq2.setZ(0);
            // movq1.setX(-vec1.x);
        }
        if (vec2.z < 0) {
            move2.setZ(0);
            movq2.setZ(-vec2.z);
        }
    }
}