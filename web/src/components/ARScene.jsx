import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { useGLTF } from "@react-three/drei";

const PokemonModel = ({ position, onCapture }) => {
  const { scene } = useGLTF("/pokemon.glb");

  return (
    <primitive
      object={scene}
      position={position}
      scale={0.5}
      onClick={onCapture} // Capture on tap
    />
  );
};

const ARScene = () => {
  const [pokemons, setPokemons] = useState([
    { id: 1, position: [0, 1, -1] },
    { id: 2, position: [1, 1, -2] },
  ]);

  const handleCapture = (id) => {
    setPokemons((prev) => prev.filter((p) => p.id !== id));
    alert("Pokémon captured! 🎉");
  };

  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 2, 2]} />
          
          {pokemons.map((pokemon) => (
            <PokemonModel
              key={pokemon.id}
              position={pokemon.position}
              onCapture={() => handleCapture(pokemon.id)}
            />
          ))}

          <Controllers />
          <Hands />
        </XR>
      </Canvas>
    </>
  );
};

export default ARScene;