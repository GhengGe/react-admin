import { useCallback, useMemo, useState } from 'react'
import { Spin, SpinProps } from 'antd'

type SpinState = {
    spinning: boolean
    tip?: string
    delay?: number
}

type UseSpinReturn = {
    spinState: SpinState
    setSpinState: (state: Partial<SpinState>) => void
    showSpin: (tip?: string, delay?: number) => void
    hideSpin: () => void
    SpinWrapper: React.FC<{ children: React.ReactNode } & Partial<SpinProps>>
}

const useSpin = (initialState: Partial<SpinState> = {}): UseSpinReturn => {
    const [spinState, setState] = useState<SpinState>({
        spinning: false,
        tip: '加载中...',
        delay: 300,
        ...initialState
    })

    const setSpinState = useCallback((state: Partial<SpinState>) => {
        setState((prev) => ({ ...prev, ...state }))
    }, [])

    const showSpin = useCallback((tip?: string, delay?: number) => {
        setState((prev) => ({
            ...prev,
            spinning: true,
            tip: tip ?? prev.tip,
            delay: delay ?? prev.delay
        }))
    }, [])

    const hideSpin = useCallback(() => {
        setState((prev) => ({ ...prev, spinning: false }))
    }, [])

    const SpinWrapper: React.FC<{ children: React.ReactNode } & Partial<SpinProps>> = useMemo(
        () =>
            // eslint-disable-next-line react/display-name, react/prop-types
            ({ children, ...props }) =>
                (
                    <Spin {...spinState} {...props}>
                        {children}
                    </Spin>
                ),
        [spinState]
    )

    return {
        spinState,
        SpinWrapper,
        setSpinState,
        showSpin,
        hideSpin
    }
}

export default useSpin
