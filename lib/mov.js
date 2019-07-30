function mov1() {
    var delta = clock1.getDelta();
    var step = delta * 3;
    var theta = Math.PI / 1.5 * delta;

    if (keyboard.pressed("W"))  // w eye move1s forward
    {
        theta_b1 = 0;
        camera1.position.x = camera1.position.x + (move1.x * step || 0);
        camera1.position.z = camera1.position.z + (move1.z * step || 0);

        sphere1.position.x = camera1.position.x;
        sphere1.position.z = camera1.position.z;

        view1.setX(view1.x + (move1.x * step || 0));
        view1.setZ(view1.z + (move1.z * step || 0));

        renew_eye_to_at1();
        camera1.lookAt(view1.x, view1.y, view1.z);
    }

    if (keyboard.pressed("S"))  // s eye move1s back
    {
        theta_b1 = 0;
        camera1.position.x = camera1.position.x + (movq1.x * step || 0);
        camera1.position.z = camera1.position.z + (movq1.z * step || 0);

        sphere1.position.x = camera1.position.x;
        sphere1.position.z = camera1.position.z;

        view1.setX(view1.x + (movq1.x * step || 0));
        view1.setZ(view1.z + (movq1.z * step || 0));

        renew_eye_to_at1();
        camera1.lookAt(view1.x, view1.y, view1.z);
    }

    if (keyboard.pressed("A"))  // a view1 move1s to the left, r<0
    {
        theta_b1 = 0;
        theta_a1 -= theta;
        renew_view_round1();
        camera1.lookAt(view1.x, view1.y, view1.z);
    }
    if (keyboard.pressed("D"))  // d view1 move1s to the right, r>0
    {
        theta_b1 = 0;
        theta_a1 += theta;
        renew_view_round1();
        camera1.lookAt(view1.x, view1.y, view1.z);
    }

    if (keyboard.pressed("E")) // e view1 move1s to the upside
    {
        theta_b1 += theta;
        if (theta_b1 > 1.57) return;
        camera1.lookAt(view1.x, R * Math.sin(theta_b1), view1.z);
    }

    function renew_eye_to_at1() {
        vec1.setX(view1.x - camera1.position.x);
        vec1.setZ(view1.z - camera1.position.z);
        vec1.normalize();
    }

    function renew_view_round1() {
        view1.setX(camera1.position.x + R * Math.cos(theta_a1));
        view1.setZ(camera1.position.z + R * Math.sin(theta_a1));
    }
}


function mov2() {
    var delta = clock2.getDelta();
    var step = delta * 3;
    var theta = Math.PI / 1.5 * delta;

    if (keyboard.pressed("up"))  // w eye move1s forward
    {
        theta_b2 = 0;
        camera2.position.x = camera2.position.x + (move2.x * step || 0);
        camera2.position.z = camera2.position.z + (move2.z * step || 0);

        sphere2.position.x = camera2.position.x;
        sphere2.position.z = camera2.position.z;

        view2.setX(view2.x + (move2.x * step || 0));
        view2.setZ(view2.z + (move2.z * step || 0));

        renew_eye_to_at2();
        camera2.lookAt(view2.x, view2.y, view2.z);
    }

    if (keyboard.pressed("down"))  // s eye move1s back
    {
        theta_b2 = 0;
        camera2.position.x = camera2.position.x + (movq2.x * step || 0);
        camera2.position.z = camera2.position.z + (movq2.z * step || 0);

        sphere2.position.x = camera2.position.x;
        sphere2.position.z = camera2.position.z;

        view2.setX(view2.x + (movq2.x * step || 0));
        view2.setZ(view2.z + (movq2.z * step || 0));

        renew_eye_to_at2();
        camera2.lookAt(view2.x, view2.y, view2.z);
    }

    if (keyboard.pressed("left"))  // a view1 move1s to the left, r<0
    {
        theta_b2 = 0;
        theta_a2 -= theta;
        renew_view_round2();
        camera2.lookAt(view2.x, view2.y, view2.z);
    }
    if (keyboard.pressed("right"))  // d view1 move1s to the right, r>0
    {
        theta_b2 = 0;
        theta_a2 += theta;
        renew_view_round2();
        camera2.lookAt(view2.x, view2.y, view2.z);
    }

    if (keyboard.pressed("1")) // e view1 move1s to the upside
    {
        theta_b2 += theta;
        if (theta_b2 > 1.57) return;
        camera2.lookAt(view2.x, R * Math.sin(theta_b2), view2.z);
    }

    function renew_eye_to_at2() {
        vec2.setX(view2.x - camera2.position.x);
        vec2.setZ(view2.z - camera2.position.z);
        vec2.normalize();
    }

    function renew_view_round2() {
        view2.setX(camera2.position.x + R * Math.cos(theta_a2));
        view2.setZ(camera2.position.z + R * Math.sin(theta_a2));
    }
}
