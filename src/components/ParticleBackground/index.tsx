import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions } from '@tsparticles/engine'

import { loadSlim } from '@tsparticles/slim'

export const ParticleBackground = () => {
    const [init, setInit] = useState(false)
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container)
    }

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: 'transparent' // 背景色设为透明，由gradient控制
                },
                gradient: {
                    start: { r: 240, g: 249, b: 255 }, // 浅蓝白色调
                    stop: { r: 203, g: 235, b: 255 }, // 浅蓝色调
                    direction: 'center' // 从中心向四周放射
                }
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push' // 点击添加粒子
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab', // 鼠标吸附效果
                        parallax: {
                            enable: true,
                            force: 80, // 视差效果强度
                            smooth: 10
                        }
                    },
                    resize: true // 窗口大小变化时自动调整
                },
                modes: {
                    push: {
                        quantity: 4 // 每次点击添加4个粒子
                    },
                    grab: {
                        distance: 140, // 吸附距离
                        line_linked: {
                            opacity: 0.5 // 连接线透明度
                        }
                    }
                }
            },
            particles: {
                // 五彩斑斓的粒子配置
                color: {
                    value: [
                        '#FF6B6B',
                        '#FFD166',
                        '#6cff14',
                        '#06D6A0',
                        '#118AB2',
                        '#073B4C',
                        '#ff4407',
                        '#2451ff'
                    ], // 多彩颜色
                    animation: {
                        enable: true,
                        speed: 2,
                        sync: true
                    }
                },
                links: {
                    color: '#a0bdf5', // 连接线颜色
                    distance: 150, // 连接距离
                    enable: true, // 启用连接线
                    opacity: 0.5, // 连接线透明度
                    width: 1 // 连接线宽度
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    // out_mode: 'out', // 粒子移出画布
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800 // 粒子密度
                    },
                    value: 80 // 粒子数量
                },
                opacity: {
                    value: 0.5 // 粒子透明度
                },
                shape: {
                    type: 'circle' // 粒子形状（圆形）
                },
                size: {
                    random: true,
                    value: 5 // 粒子大小
                }
            },
            detectRetina: true // 支持高分辨率屏幕
        }),
        []
    )

    if (init) {
        return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    }

    return <></>
}
