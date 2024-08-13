import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ObjViewer = ({ top = '0px', left = '0px' }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    // Scene, camera, renderer 세팅
    const scene = new THREE.Scene();

    // 카메라와 렌더러 설정
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true로 배경을 투명하게 설정
    rendererRef.current = renderer; // renderer를 ref에 저장

    renderer.setSize(500, 500);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // 배경을 투명하게 설정

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 조명 추가
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x808080);
    scene.add(ambientLight);

    // OBJ 파일 로드
    const loader = new OBJLoader();
    loader.load('http://0.0.0.0:8000/get-obj-file', (obj) => {
      const box = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3();
      box.getSize(size);

      const maxSize = Math.max(size.x, size.y, size.z);
      const scale = 3 / maxSize; // 모델이 화면에 꽉 차도록 스케일링
      obj.scale.set(scale, scale, scale);

      const center = new THREE.Vector3();
      box.getCenter(center);
      obj.position.sub(center);

      scene.add(obj);
    });

    camera.position.z = 2.5;

    // OrbitControls 추가
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 부드러운 감속 효과
    controls.dampingFactor = 0.05; // 감속 효과의 크기
    controls.screenSpacePanning = false; // 수평 또는 수직으로 화면을 이동할 수 없게 설정
    controls.maxPolarAngle = Math.PI / 2; // 아래로의 회전을 제한

    // Animation Loop
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // 애니메이션 루프에서 컨트롤 업데이트
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      controls.dispose(); // OrbitControls 리소스 해제
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement); // DOM에서 안전하게 제거
      }
      rendererRef.current.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: top,
        left: left,
        zIndex: '6',
        border: '1px solid #D9D9D9', // 테두리를 없애기
        borderRadius: '30px',
      }}
    ></div>
  );
};

export default ObjViewer;
