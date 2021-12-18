/**
 * Move the blob on the Home Page.
 */
const tween = KUTE.fromTo(
    "#blob1",
    { path: "#blob1" },
    { path: "#blob2" },
    {
        repeat: 999 /* Repeat near infinity times */,
        duration: 3000,
        yoyo: true,
    }
);

// Start the motion
tween.start();
