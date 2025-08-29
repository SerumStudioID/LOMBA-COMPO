var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama",
      "name": "Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.09791886471687405,
        "pitch": 0.11613469593601522,
        "fov": 0.986251115745996
      },
      "linkHotspots": [
        {
          "yaw": -0.7163388671396209,
          "pitch": 0.5037716500834097,
          "rotation": 0,
          "target": "1-panorama-bedroom"
        },
        {
          "yaw": 0.14023994833615205,
          "pitch": 0.43316177663645483,
          "rotation": 0,
          "target": "2-panorama-kitchen"
        },
        {
          "yaw": -1.0026507417728592,
          "pitch": 0.4244590340312264,
          "rotation": 0,
          "target": "3-panorama-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-bedroom",
      "name": "PANORAMA BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.06848606544354574,
        "pitch": 0.36016607429269953,
        "fov": 1.1401601407913857
      },
      "linkHotspots": [
        {
          "yaw": -1.2010848696356398,
          "pitch": 0.8400121736808135,
          "rotation": 0,
          "target": "0-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama-kitchen",
      "name": "PANORAMA KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.17072010032783425,
        "pitch": 0.1393095130385298,
        "fov": 0.9892451398322145
      },
      "linkHotspots": [
        {
          "yaw": -0.4750785492159615,
          "pitch": 0.5588466274689097,
          "rotation": 0,
          "target": "0-panorama"
        },
        {
          "yaw": 0.5004388199376351,
          "pitch": 0.5041862243791897,
          "rotation": 0,
          "target": "1-panorama-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-panorama-bathroom",
      "name": "PANORAMA BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.12329056613717704,
        "pitch": 0.3966227511183078,
        "fov": 0.9210580480048011
      },
      "linkHotspots": [
        {
          "yaw": -2.9665429592143973,
          "pitch": 1.281242145183029,
          "rotation": 0,
          "target": "0-panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LOMBA COMPO",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
