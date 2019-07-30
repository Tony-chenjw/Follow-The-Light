function toFixed(num, d) {
    num *= Math.pow(10, d);
    num = Math.round(num);
    return num / (Math.pow(10, d));
}

function collision1() {
    var crash;
    var collisionResults;
    var originPoint = sphere1.position.clone();

    for (var vertexIndex = 0; vertexIndex < sphere1.geometry.vertices.length; vertexIndex++) {
        // 顶点原始坐标
        var localVertex = sphere1.geometry.vertices[vertexIndex].clone();
        // 顶点经过变换后的坐标
        var globalVertex = localVertex.applyMatrix4(sphere1.matrix);
        var directionvec1tor = globalVertex.sub(sphere1.position);

        //***
        var ray = new THREE.Raycaster(originPoint, directionvec1tor.clone().normalize());
        collisionResults = ray.intersectObjects(collideMeshList);
        if (collisionResults.length > 0 && collisionResults[0].distance < directionvec1tor.length()) {
            crash = true;
            break;
        }
        crash = false;
    }

    if (crash) {
        var collide = new THREE.Vector3(0, 0, 0);

        // if (collisionResults.length === 1) {
            collide.setX(toFixed((collisionResults[0].point.x - camera1.position.x), 2));
            collide.setZ(toFixed((collisionResults[0].point.z - camera1.position.z), 2));

            if ((vec1.x * collide.x) > 0.01 && (collide.z) <= 0.1) //faceX collision
            {
                move1.setX(0);
                move1.setZ(vec1.z);

                movq1.setX(-vec1.x);
                movq1.setZ(-vec1.z);
            }
            if ((vec1.x * collide.x) <= -0.1) {
                move1.setX(vec1.x);
                move1.setZ(vec1.z);

                movq1.setX(0);
                movq1.setZ(-vec1.z);
            }

            if ((vec1.z * collide.z) > 0.01 && (collide.x) <= 0.1) //faceZ collision
            {
                move1.setX(vec1.x);
                move1.setZ(0);

                movq1.setX(-vec1.x);
                movq1.setZ(-vec1.z);
            }
            if ((vec1.z * collide.z) <= -0.1) {
                move1.setX(vec1.x);
                move1.setZ(vec1.z);

                movq1.setX(-vec1.x);
                movq1.setZ(0);
            }

            if ((vec1.z * collide.z) > 0.01 && (vec1.x * collide.x) > 0.01) //edge collision
            {
                var collnor = new THREE.Vector3().copy(collide).normalize();

                move1.setX(vec1.x - collnor.x);
                move1.setZ(vec1.z - collnor.z);

                movq1.setX(-vec1.x);
                movq1.setZ(-vec1.z);
            }
        // }

        // else { //two and more faces collision *** remain
        //     var vec11 = new THREE.vec1tor3(toFixed((collisionResults[0].point.x - camera1.position.x), 2), 0, toFixed((collisionResults[0].point.z - camera1.position.z), 2));
        //     var vec12 = new THREE.vec1tor3(toFixed((collisionResults[1].point.x - camera1.position.x), 2), 0, toFixed((collisionResults[1].point.z - camera1.position.z), 2));
        //
        //     collide.setX((vec11.x + vec12.x));
        //     collide.setZ((vec11.z + vec12.z));
        //
        //     if ((vec1.x * collide.x) > 0.1) {
        //         move1.setX(0);
        //         movq1.setX(-vec1.x);
        //     }
        //     if ((vec1.x * collide.x) < -0.1)
        //     {
        //         move1.setX(vec1.x);
        //         movq1.setX(0);
        //     }
        //
        //     if ((vec1.z * collide.z) > 0.1) {
        //         move1.setZ(0);
        //         movq1.setZ(-vec1.z);
        //     }
        //     if ((vec1.z * collide.z) < -0.1)
        //     {
        //         move1.setZ(vec1.z);
        //         movq1.setZ(0);
        //     }
        // }
    }

    else { //no collision
        move1.setX(vec1.x);
        move1.setZ(vec1.z);

        movq1.setX(-vec1.x);
        movq1.setZ(-vec1.z);
    }
}

function collision2() {
    var crash;
    var collisionResults;
    var originPoint = sphere2.position.clone();

    for (var vertexIndex = 0; vertexIndex < sphere2.geometry.vertices.length; vertexIndex++) {
        // 顶点原始坐标
        var localVertex = sphere2.geometry.vertices[vertexIndex].clone();
        // 顶点经过变换后的坐标
        var globalVertex = localVertex.applyMatrix4(sphere2.matrix);
        var directionvec1tor = globalVertex.sub(sphere2.position);

        //***
        var ray = new THREE.Raycaster(originPoint, directionvec1tor.clone().normalize());
        collisionResults = ray.intersectObjects(collideMeshList);
        if (collisionResults.length > 0 && collisionResults[0].distance < directionvec1tor.length()) {
            crash = true;
            break;
        }
        crash = false;
    }

    if (crash) {
        var collide = new THREE.Vector3(0, 0, 0);

        // if (collisionResults.length === 1) {
            collide.setX(toFixed((collisionResults[0].point.x - camera2.position.x), 2));
            collide.setZ(toFixed((collisionResults[0].point.z - camera2.position.z), 2));

            if ((vec2.x * collide.x) > 0.01 && (collide.z) <= 0.1) //faceX collision
            {
                move2.setX(0);
                move2.setZ(vec2.z);

                movq2.setX(-vec2.x);
                movq2.setZ(-vec2.z);
            }
            if ((vec2.x * collide.x) <= -0.1) {
                move2.setX(vec2.x);
                move2.setZ(vec2.z);

                movq2.setX(0);
                movq2.setZ(-vec2.z);
            }

            if ((vec2.z * collide.z) > 0.01 && (collide.x) <= 0.1) //faceZ collision
            {
                move2.setX(vec2.x);
                move2.setZ(0);

                movq2.setX(-vec2.x);
                movq2.setZ(-vec2.z);
            }
            if ((vec2.z * collide.z) <= -0.1) {
                move2.setX(vec2.x);
                move2.setZ(vec2.z);

                movq2.setX(-vec2.x);
                movq2.setZ(0);
            }

            if ((vec2.z * collide.z) > 0.01 && (vec2.x * collide.x) > 0.01) //edge collision
            {
                var collnor = new THREE.Vector3().copy(collide).normalize();

                move2.setX(vec2.x - collnor.x);
                move2.setZ(vec2.z - collnor.z);

                movq2.setX(-vec2.x);
                movq2.setZ(-vec2.z);
            }
        // }

        // else { //two and more faces collision *** remain
        //     var vec11 = new THREE.vec1tor3(toFixed((collisionResults[0].point.x - camera1.position.x), 2), 0, toFixed((collisionResults[0].point.z - camera1.position.z), 2));
        //     var vec12 = new THREE.vec1tor3(toFixed((collisionResults[1].point.x - camera1.position.x), 2), 0, toFixed((collisionResults[1].point.z - camera1.position.z), 2));
        //
        //     collide.setX((vec11.x + vec12.x));
        //     collide.setZ((vec11.z + vec12.z));
        //
        //     if ((vec1.x * collide.x) > 0.1) {
        //         move1.setX(0);
        //         movq1.setX(-vec1.x);
        //     }
        //     if ((vec1.x * collide.x) < -0.1)
        //     {
        //         move1.setX(vec1.x);
        //         movq1.setX(0);
        //     }
        //
        //     if ((vec1.z * collide.z) > 0.1) {
        //         move1.setZ(0);
        //         movq1.setZ(-vec1.z);
        //     }
        //     if ((vec1.z * collide.z) < -0.1)
        //     {
        //         move1.setZ(vec1.z);
        //         movq1.setZ(0);
        //     }
        // }
    }

    else { //no collision
        move2.setX(vec2.x);
        move2.setZ(vec2.z);

        movq2.setX(-vec2.x);
        movq2.setZ(-vec2.z);
    }
}