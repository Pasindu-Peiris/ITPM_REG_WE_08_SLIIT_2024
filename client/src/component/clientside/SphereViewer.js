import React, { useEffect, useRef, useState } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import { CompassPlugin } from "@photo-sphere-viewer/compass-plugin";
import "@photo-sphere-viewer/compass-plugin/index.css";
import { MapPlugin } from "@photo-sphere-viewer/map-plugin";
import "@photo-sphere-viewer/map-plugin/index.css";
import { GalleryPlugin } from "@photo-sphere-viewer/gallery-plugin";
import "@photo-sphere-viewer/gallery-plugin/index.css";
//import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
//import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

import "../CSS/style.css";

const SphereViewer = ({ imageUrl, imagePaths, musicPath }) => {
  const viewerRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const viewerOptions = {
      container: viewerRef.current,
      panorama: imageUrl,
      navbar: [
        "zoom",
        {
          id: "custom-button",
          content:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-speaker"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line></svg>',
          title: "mute",
          className: "custom-icon-button",
          onClick: () => {
            setMuted(!muted);
          },
        },
        "autorotate",
        "gallery",
        "download",
        "caption",
        "fullscreen",
      ],
      plugins: [
        [AutorotatePlugin, { autorotatePitch: "5deg" }],
        [
          CompassPlugin,
          { size: "120px", position: "top left", navigation: true },
        ],
        [
          MapPlugin,
          {
            imageUrl: imageUrl,
            center: { x: 785, y: 421 },
            rotation: "125deg",
            defaultZoom: 40,
          },
        ],
        [
          GalleryPlugin,
          {
            items: imagePaths.map((path, index) => ({
              id: `pano-${index}`,
              name: `Image ${index + 1}`,
              panorama: path,
              thumbnail: path, //`http://localhost:8090/thumbnails/${path}`
            })),
          },
        ],
        /*    [
          VirtualTourPlugin,
          {
            renderMode: "3d",
            nodes: [
              {
                id: "node-1",
                panorama: image3,
                links: [
                  {
                    nodeId: "node-2",
                    position: { textureX: 1500, textureY: 800 },
                  },
                ],
              },
              {
                id: "node-2",
                panorama: image2,
                links: [{ nodeId: "node-1", position: { yaw: 150, pitch: 0 } }],
              },
            ],
          },
        ],*/
      ],
    };

    const viewer = new Viewer(viewerOptions);

    return () => viewer.destroy();
  }, [imageUrl, imagePaths,muted, musicPath]);

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
    >
      {muted ? null : (
        <audio
          src={musicPath}
          autoPlay
          loop
          controls
          className="audio-player"
        />
      )}
    </div>
  );
};

export default SphereViewer;
