import React, { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";
import "@photo-sphere-viewer/compass-plugin/index.css";

const SphereViewer = ({ imageUrl }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = new Viewer({
        container: viewerRef.current,
        panorama: imageUrl,
        navbar: true,
        plugins: [
          [
            AutorotatePlugin,
            {
              autorotatePitch: "5deg",
            },
          ],
          [
            CompassPlugin,
            {
              size: "120px",
              position: "top left",
              navigation: true,
            },
          ],
        ],
      });

      return () => viewer.destroy();
    }
  }, [imageUrl]);

  return (
    <div
      ref={viewerRef}
      style={{
        width: "100%",
        height: "80vh",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default SphereViewer;
