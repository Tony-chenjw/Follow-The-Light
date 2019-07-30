function end() {
    var dis1 = new THREE.Vector3(gap * (size) - camera1.position.x, 0, gap * (2 * size - 1) - camera1.position.z);
    var dis2 = new THREE.Vector3(gap * (size) - camera2.position.x, 0, gap * (2 * size - 1) - camera2.position.z);
    if (dis1.length() <= gap / 2.5) //camera1 wins
    {
        bush.pause();
        earth.pause();
        ocean.pause();
        alert("Player1 Wins !");
        cancelAnimationFrame(requestID);
        return false;
    }
    if (dis2.length() <= gap / 2.5) //camera2 wins
    {
        bush.pause();
        earth.pause();
        ocean.pause();
        alert("Player2 Wins !");
        cancelAnimationFrame(requestID);
        return false;
    }
}