'use client';

import type { Container } from '@tsparticles/engine'
import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { confetti } from "@tsparticles/confetti";
import { confettiData } from './data'


function Confetti() {

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);

        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (_container?: Container): Promise<void> => {};

    return (
        <div>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    ...confettiData,
                }}
            />
        </div>
    )
}

export default Confetti
