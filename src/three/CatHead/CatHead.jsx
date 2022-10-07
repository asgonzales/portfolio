import style from'./CatHead.module.css';
import * as THREE from 'three';
import { useEffect } from 'react';
import { useRef } from 'react';







export default function CatHead () {
    const mountRef = useRef()

    useEffect(() => {
        const currentMount = mountRef.current


        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(25, currentMount.clientWidth / currentMount.clientHeight, 0.5, 1000)

        scene.add(camera)

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)

        currentMount.appendChild(renderer.domElement)



        //Cubo
        const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
        scene.add(cube)

        renderer.render(scene, camera)
    }, [])



    return (
        <div className={style.contCatHead} ref={mountRef}>
        </div>
    )
}