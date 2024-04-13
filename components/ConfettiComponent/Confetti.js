'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { confetti } from "@tsparticles/confetti";
import { particleData, confettiData } from './data'


function Confetti() {

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
            await confetti();

        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({ ...particleData }),
        [],
    );


    const particlesLoaded = (container) => {
        // console.log(container);
    };

    return (
        <div>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    preset: confetti({ ...confettiData }),
                }}
            />
        </div>
    )
}

export default Confetti