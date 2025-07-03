import React from 'react'
import { useEffect, useState } from 'react'
import { Button } from 'antd'
// useEffect 的使用

const UseEffectCont: React.FC = () => {
    const { count, setCount } = useState(0)
    const { level, setLevel } = useState(1)

    // useEffect 只传一个函数，副作用函数执行：组件初始渲染 + 组件更新时渲染(level, count)
    useEffect(() => {
        console.log('初始化+组件数据更新渲染')
    })

    // useEffect 传一个函数,空数组，副作用函数执行：只有组件初始渲染
    useEffect(() => {
        console.log('初始化渲染')
    }, [])

    // useEffect 传一个函数,参数，副作用函数执行：组件初始渲染 + 参数变化时渲染(count)
    useEffect(() => {
        console.log('初始化+组件count数据更新渲染')
    }, [count])

    const onHandel = () => {
        setCount(count + 1)
    }
    return (
        <div>
            {count}
            <Button color="purple" variant="solid" onClick={onHandel}>
                Solid
            </Button>
            {level}
            <Button color="purple" variant="solid" onClick={() => setLevel(level + 1)}>
                Solid
            </Button>
        </div>
    )
}

export default UseEffectCont
