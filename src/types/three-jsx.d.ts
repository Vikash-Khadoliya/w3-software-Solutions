import { Object3D } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: {
        object: Object3D;
        [key: string]: any;
      };
      ambientLight: {
        intensity?: number;
        [key: string]: any;
      };
      spotLight: {
        position?: [number, number, number];
        angle?: number;
        penumbra?: number;
        [key: string]: any;
      };
    }
  }
} 